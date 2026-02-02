# Physician Monitor

Monitoring service for physician availability and status. Runs a periodic check against the database and records status-change events.

## Prerequisites

- Node.js 18+
- PostgreSQL

## Setup

1. **Clone and install**

   ```bash
   cd physician-monitor
   npm install
   ```

2. **Environment**

   Copy the example env file and set your values:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set at least:

   - `DATABASE_URL` – PostgreSQL connection string (e.g. `postgresql://user:password@localhost:5432/physician_monitor`)
   - `PORT` (optional, default `3000`)

3. **Database**

   Create the schema and tables:

   ```bash
   npm run setup-db
   ```

4. **Run**

   ```bash
   npm start
   ```

   For local development with auto-restart:

   ```bash
   npm run dev
   ```

## Endpoints

- `GET /` – Plain-text service name
- `GET /health` – Health check (used by Railway)

## Environment variables

| Variable               | Description                          | Default   |
|------------------------|--------------------------------------|-----------|
| `DATABASE_URL`         | PostgreSQL connection string         | required  |
| `PORT`                 | HTTP server port                     | `3000`    |
| `MONITOR_INTERVAL_MS`  | Interval between monitor cycles (ms) | `60000`   |
| `HEALTH_CHECK_TIMEOUT_MS` | Treat physician as offline after (ms) | `5000` |

## Railway deployment

1. Create a new project and add a PostgreSQL service.
2. Add this repo as a service; Railway will use `railway.json` for build and deploy.
3. Set `DATABASE_URL` from the PostgreSQL service (or use Railway’s linked variables).
4. Run the database setup once (e.g. via a one-off run or a separate job):

   ```bash
   node src/setup-database.js
   ```

5. Deploy; the service will start with `node src/index.js` and use `/health` for health checks.

## Project layout

```
physician-monitor/
├── railway.json          # Railway deployment config
├── package.json          # Node.js dependencies
├── .env.example          # Environment variables template
├── README.md             # This file
└── src/
    ├── setup-database.js # Database initialization
    ├── monitor.js        # Monitoring logic
    └── index.js          # Main service with web server
```
