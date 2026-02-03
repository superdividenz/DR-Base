#!/usr/bin/env bash
# Deploy physician-monitor-frontend (e.g. to Railway or static host).
# Usage: chmod +x deploy.sh && ./deploy.sh
set -e
cd "$(dirname "$0")"

# Build if package.json has a build script
if [ -f package.json ] && grep -q '"build"' package.json; then
  npm ci --omit=dev 2>/dev/null || npm install
  npm run build
fi

# Deploy via Railway CLI if linked
if command -v railway >/dev/null 2>&1; then
  railway up
else
  echo "Railway CLI not found. Install: npm i -g @railway/cli"
  echo "Then: railway link && ./deploy.sh"
  exit 1
fi
