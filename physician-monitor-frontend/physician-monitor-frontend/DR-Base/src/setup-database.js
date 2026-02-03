/**
 * Database initialization for physician-monitor.
 * Creates tables and inserts Dr. Singer.
 * Run with: node src/setup-database.js
 */

require('dotenv').config();
const { Pool } = require('pg');

/**
 * Run DB setup using the given pool. Safe to call from HTTP (does not end the pool).
 * @param {import('pg').Pool} dbPool
 */
async function runSetup(dbPool) {
  const client = await dbPool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS physicians (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        external_id TEXT UNIQUE,
        name TEXT NOT NULL,
        specialty TEXT,
        status TEXT NOT NULL DEFAULT 'unknown',
        last_seen_at TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await client.query(`
      ALTER TABLE physicians ADD COLUMN IF NOT EXISTS external_id TEXT UNIQUE;
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS monitor_events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        physician_id UUID REFERENCES physicians(id),
        event_type TEXT NOT NULL,
        payload JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_monitor_events_physician_id ON monitor_events(physician_id);
      CREATE INDEX IF NOT EXISTS idx_monitor_events_created_at ON monitor_events(created_at);
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        physician_id UUID REFERENCES physicians(id),
        amount_cents INTEGER NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS monitoring_alerts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        physician_id UUID REFERENCES physicians(id),
        alert_type TEXT NOT NULL,
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS monitoring_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        physician_id UUID REFERENCES physicians(id),
        event TEXT NOT NULL,
        payload JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    const { rows: existing } = await client.query(
      "SELECT id FROM physicians WHERE name = 'Dr. Singer' LIMIT 1"
    );
    if (existing.length === 0) {
      await client.query(
        `INSERT INTO physicians (external_id, name, specialty, status) VALUES ($1, $2, $3, $4)`,
        ['43005', 'Dr. Singer', 'General Practice', 'unknown']
      );
    } else {
      await client.query(
        "UPDATE physicians SET external_id = '43005' WHERE name = 'Dr. Singer' AND (external_id IS NULL OR external_id != '43005')"
      );
    }
  } finally {
    client.release();
  }
}

if (require.main === module) {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set. Create a .env file with DATABASE_URL=... or run with: railway run npm run create-tables');
    process.exit(1);
  }
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
  });
  runSetup(pool)
    .then(() => {
      console.log('Database tables created successfully.');
      return pool.end();
    })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Setup failed:', err);
      pool.end().then(() => process.exit(1));
    });
}

module.exports = { runSetup };
