#!/usr/bin/env bash
# Create database tables (physicians, monitor_events, payments, monitoring_alerts, monitoring_logs)
# and seed Dr. Singer. Loads .env from repo root.
# Usage: ./scripts/create-tables.sh   or   npm run create-tables
set -e
cd "$(dirname "$0")/.."
node src/setup-database.js
