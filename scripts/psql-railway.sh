#!/usr/bin/env bash
# Connect to Railway PostgreSQL using DATABASE_URL from .env
# Usage: ./scripts/psql-railway.sh
set -e
cd "$(dirname "$0")/.."
if [ ! -f .env ]; then
  echo "No .env file. Set DATABASE_URL or run: cp .env.example .env"
  exit 1
fi
# Parse DATABASE_URL and run psql (Node parses URL reliably)
node -e "
require('dotenv').config();
const u = process.env.DATABASE_URL;
if (!u) { console.error('DATABASE_URL not set in .env'); process.exit(1); }
const url = new URL(u);
const env = { ...process.env, PGPASSWORD: url.password };
const { spawn } = require('child_process');
const c = spawn('psql', ['-h', url.hostname, '-p', url.port || '5432', '-U', url.username, '-d', url.pathname.slice(1)], { stdio: 'inherit', env });
c.on('exit', code => process.exit(code || 0));
"
