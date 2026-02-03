# Physician Monitor

Monitoring service for physician availability and status. Runs periodic checks, sends Telegram alerts on status changes, and runs daily cron jobs for summaries.

## Prerequisites

- Node.js 18+
- PostgreSQL
- Telegram bot (optional, for alerts)

## Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd DR-Base
npm install
```

### 2. Environment

Copy the example env file and set your values:

```bash
cp .env.example .env
```

Edit `.env` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `PORT` | HTTP server port (default `3000`) | No |
| `TELEGRAM_BOT_TOKEN` | Bot token from [@BotFather](https://t.me/BotFather) | For alerts |
| `TELEGRAM_CHAT_ID` | Chat/group ID to receive alerts | For alerts |
| `MONITOR_INTERVAL_MS` | Interval between monitor cycles (default `60000`) | No |
| `HEALTH_CHECK_TIMEOUT_MS` | Treat physician as offline after (ms) (default `5000`) | No |
| `CRON_DAILY` | Daily summary cron (default `0 8 * * *` = 08:00) | No |
| `CRON_CYCLE` | Scheduled full cycle cron (default `0 */6 * * *` = every 6h) | No |

**Telegram setup (for alerts):**

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy the token.
2. Start a chat with your bot or add it to a group.
3. Get your chat ID (e.g. use [@userinfobot](https://t.me/userinfobot) or send a message and call `getUpdates` on the bot API).

### 3. Database

Create tables and seed Dr. Singer:

```bash
npm run setup
```

(or `npm run setup-db`)

### 4. Run

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

## Features

- **Monitoring:** Periodic checks of physician status; physicians go offline when `last_seen_at` is older than `HEALTH_CHECK_TIMEOUT_MS`.
- **Alerts:** Status changes are sent to Telegram when `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set.
- **Daily cron:** At 08:00 (or `CRON_DAILY`) a summary of all physicians is sent to Telegram.
- **Scheduled cycle:** Every 6 hours (or `CRON_CYCLE`) a full monitor cycle runs in addition to the interval-based loop.

## Railway deployment

1. Connect this repo to Railway; Railway uses the **root** of the repo (package.json, railway.json, src/ at root).
2. Add a PostgreSQL service and set `DATABASE_URL` from it (or use Railway linked variables).
3. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` if you want alerts.
4. Link the CLI to your project (one-time, from repo root):

   ```bash
   railway link
   ```
   Select your project and the **splendid-kindness** service (or the service that has `DATABASE_URL`).

5. Run the database setup once. **Option A (recommended on Railway):** In Railway Variables, set `SETUP_SECRET` to a random string (e.g. `openssl rand -hex 16`). Deploy, then run:
   ```bash
   curl -X POST -H "Authorization: Bearer YOUR_SETUP_SECRET" https://YOUR_APP.up.railway.app/setup
   ```
   This runs setup from inside Railway’s network (so the DB is reachable). **Option B (local):** Use the database **public** URL (from Railway PostgreSQL → Connect) as `DATABASE_URL` locally and run `npm run setup` — the internal host `postgres.railway.internal` only works from inside Railway.

7. Deploy; the service starts with `node src/index.js` and uses `/health` for health checks.

## Project layout

```
DR-Base/
├── railway.json          # Railway deployment config
├── package.json          # Node.js dependencies (pg, express, telegram bot, etc.)
├── .env.example          # Environment variables template
├── README.md             # This file
└── src/
    ├── setup-database.js # Creates tables & inserts Dr. Singer
    ├── monitor.js        # Monitoring logic with alerts
    └── index.js          # Web server with daily cron jobs
```
