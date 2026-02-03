/**
 * Main service: Express web server, physician monitoring, and daily cron jobs.
 */

require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const { createPool, startMonitor, runCycle, sendAlert } = require('./monitor.js');
const { runSetup } = require('./setup-database.js');

const PORT = Number(process.env.PORT) || 3000;
const app = express();
const pool = createPool();

async function ensureSetup() {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1 FROM physicians LIMIT 1');
    client.release();
  } catch (err) {
    if (err.code === '42P01') {
      console.log('Tables not found; running database setup...');
      await runSetup(pool);
      console.log('Database setup complete.');
    } else {
      console.error('Startup DB check failed:', err.message);
    }
  }
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Physician Monitor Service');
});

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'physician-monitor' });
});

// Run DB setup from inside Railway (avoids postgres.railway.internal from local). Requires SETUP_SECRET.
app.post('/setup', async (req, res) => {
  const secret = process.env.SETUP_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ ok: false, error: 'missing or invalid Authorization' });
  }
  try {
    await runSetup(pool);
    res.json({ ok: true, message: 'Database setup complete.' });
  } catch (err) {
    console.error('Setup error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Manual check: POST /check/:id — id is UUID or external_id (e.g. 43005). Updates last_seen_at.
app.post('/check/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ ok: false, error: 'missing id' });
  try {
    const client = await pool.connect();
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
    const { rows } = await client.query(
      isUuid
        ? 'UPDATE physicians SET last_seen_at = NOW(), updated_at = NOW(), status = \'online\' WHERE id = $1 RETURNING id, external_id, name, status, last_seen_at'
        : 'UPDATE physicians SET last_seen_at = NOW(), updated_at = NOW(), status = \'online\' WHERE external_id = $1 RETURNING id, external_id, name, status, last_seen_at',
      [id]
    );
    client.release();
    if (rows.length === 0) return res.status(404).json({ ok: false, error: 'physician not found' });
    res.json({ ok: true, physician: rows[0] });
  } catch (err) {
    console.error('Check error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Daily cron: run at 08:00 every day (configurable via CRON_DAILY)
const dailyCronExpr = process.env.CRON_DAILY || '0 8 * * *';
cron.schedule(dailyCronExpr, async () => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(
      'SELECT name, status, last_seen_at FROM physicians ORDER BY name'
    );
    client.release();
    const lines = rows.map((p) => `${p.name}: ${p.status} (last seen: ${p.last_seen_at || 'never'})`);
    const summary = `Daily physician summary:\n${lines.join('\n')}`;
    await sendAlert(summary);
    console.log('Daily cron: summary sent.');
  } catch (err) {
    console.error('Daily cron error:', err);
    await sendAlert(`Daily summary failed: ${err.message}`);
  }
});

// Optional: run a full monitor cycle on a schedule (e.g. every 6 hours)
const cycleCronExpr = process.env.CRON_CYCLE || '0 */6 * * *';
cron.schedule(cycleCronExpr, () => {
  runCycle(pool).catch((err) => console.error('Scheduled cycle error:', err));
});

let intervalId;
const server = app.listen(PORT, () => {
  console.log(`Physician monitor listening on port ${PORT}`);
});

// Run DB setup on first start, then start the monitor
ensureSetup()
  .then(() => {
    intervalId = startMonitor(pool);
  })
  .catch((err) => console.error('ensureSetup error:', err));

function shutdown() {
  if (intervalId) clearInterval(intervalId);
  server.close();
  pool.end();
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
