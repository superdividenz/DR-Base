/**
 * Main service: web server and physician monitoring.
 */

const { createPool, startMonitor } = require('./monitor.js');

const PORT = Number(process.env.PORT) || 3000;

const pool = createPool();
const intervalId = startMonitor(pool);

const server = require('http').createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);
  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'physician-monitor' }));
    return;
  }
  if (url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Physician Monitor Service');
    return;
  }
  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Physician monitor listening on port ${PORT}`);
});

function shutdown() {
  clearInterval(intervalId);
  server.close();
  pool.end();
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
