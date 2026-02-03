/**
 * Monitoring logic for physician status and availability, with Telegram alerts.
 */

const { Pool } = require('pg');
const TelegramBot = require('node-telegram-bot-api');

function createPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
  });
}

function getTelegramBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return null;
  return new TelegramBot(token, { polling: false });
}

/**
 * Send an alert to the configured Telegram chat.
 * @param {string} message
 */
async function sendAlert(message) {
  const bot = getTelegramBot();
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!bot || !chatId) {
    console.log('[Alert (no Telegram)]', message);
    return;
  }
  try {
    await bot.sendMessage(chatId, `[Physician Monitor] ${message}`);
  } catch (err) {
    console.error('Telegram alert failed:', err.message);
  }
}

/**
 * Run a single monitoring cycle: check physicians, record events, send alerts.
 * @param {import('pg').Pool} pool
 */
async function runCycle(pool) {
  const client = await pool.connect();
  try {
    const { rows: physicians } = await client.query(
      'SELECT id, name, status, last_seen_at FROM physicians'
    );
    const now = new Date();
    const timeoutMs = Number(process.env.ALERT_THRESHOLD) || Number(process.env.HEALTH_CHECK_TIMEOUT_MS) || 5000;
    for (const p of physicians) {
      const stale =
        !p.last_seen_at ||
        (now - new Date(p.last_seen_at)) > timeoutMs;
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
        await sendAlert(`${p.name}: ${p.status} → ${newStatus}`);
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

module.exports = { createPool, runCycle, startMonitor, sendAlert, getTelegramBot };
