/**
 * Main service: Express web server, physician monitoring, and daily cron jobs.
 */

require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const { createPool, startMonitor, runCycle, sendAlert } = require('./monitor.js');

const PORT = Number(process.env.PORT) || 3000;
const app = express();
const pool = createPool();
const intervalId = startMonitor(pool);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Physician Monitor Service');
});

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'physician-monitor' });
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

const server = app.listen(PORT, () => {
  console.log(`Physician monitor listening on port ${PORT}`);
});

function shutdown() {
  clearInterval(intervalId);
  server.close();
  pool.end();
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
