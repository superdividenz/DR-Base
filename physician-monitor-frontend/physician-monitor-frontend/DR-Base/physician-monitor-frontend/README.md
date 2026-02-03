# Physician Monitor Frontend

Simple static frontend for the physician-monitor API (health check, manual check).

## Deploy

```bash
cd physician-monitor-frontend
chmod +x deploy.sh
./deploy.sh
```

Requires [Railway CLI](https://docs.railway.app/develop/cli) (`npm i -g @railway/cli`). Run `railway link` in this directory first if needed.

## Local

Open `index.html` in a browser, or serve with any static server:

```bash
npx serve .
```
