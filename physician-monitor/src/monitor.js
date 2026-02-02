/**
 * Monitoring logic for physician status and availability.
 */

const { Pool } = require('pg');

function createPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
  });
}

/**
 * Run a single monitoring cycle: check physicians and record events.
 * @param {import('pg').Pool} pool
 */
async function runCycle(pool) {
  const client = await pool.connect();
  try {
    const { rows: physicians } = await client.query(
      'SELECT id, name, status, last_seen_at FROM physicians'
    );
    const now = new Date();
    for (const p of physicians) {
      const stale =
        !p.last_seen_at ||
        (now - new Date(p.last_seen_at)) >
          (Number(process.env.HEALTH_CHECK_TIMEOUT_MS) || 5000);
      const newStatus = stale ? 'offline' : p.status;
      if (newStatus !== p.status) {
        await client.query(
          'UPDATE physicians SET status = $1, last_seen_at = $2, updated_at = $2 WHERE id = $3',
          [newStatus, now, p.id]
        );
        await client.query(
          'INSERT INTO monitor_events (physician_id, event_type, payload) VALUES ($1, $2, $3)',
          [p.id, 'status_change', JSON.stringify({ from: p.status, to: newStatus })]
        );
      }
    }
  } finally {
    client.release();
  }
}

/**
 * Start the monitoring loop.
 * @param {import('pg').Pool} pool
 * @returns {NodeJS.Timeout}
 */
function startMonitor(pool) {
  const intervalMs = Number(process.env.MONITOR_INTERVAL_MS) || 60000;
  runCycle(pool).catch((err) => console.error('Monitor cycle error:', err));
  return setInterval(() => {
    runCycle(pool).catch((err) => console.error('Monitor cycle error:', err));
  }, intervalMs);
}

module.exports = { createPool, runCycle, startMonitor };
