/**
 * Database initialization for physician-monitor.
 * Creates tables and inserts Dr. Singer.
 * Run with: node src/setup-database.js
 */

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
});

async function setup() {
  const client = await pool.connect();
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
    console.log('Database tables created successfully.');

    const { rows: existing } = await client.query(
      "SELECT id FROM physicians WHERE name = 'Dr. Singer' LIMIT 1"
    );
    if (existing.length === 0) {
      await client.query(
        `INSERT INTO physicians (external_id, name, specialty, status) VALUES ($1, $2, $3, $4)`,
        ['43005', 'Dr. Singer', 'General Practice', 'unknown']
      );
      console.log('Inserted Dr. Singer (external_id 43005).');
    } else {
      await client.query(
        "UPDATE physicians SET external_id = '43005' WHERE name = 'Dr. Singer' AND (external_id IS NULL OR external_id != '43005')"
      );
      console.log('Dr. Singer already exists (external_id ensured).');
    }
  } finally {
    client.release();
    await pool.end();
  }
}

setup().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
