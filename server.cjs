'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = fs.realpathSync(path.join(__dirname, 'dist'));
const hostArgument = process.argv.indexOf('--host');
const host = hostArgument >= 0 ? process.argv[hostArgument + 1] : process.env.HOST || '127.0.0.1';
const port = process.env.PORT === undefined ? 4173 : Number(process.env.PORT);
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.txt':'text/plain; charset=utf-8' };
const inside = file => file === root || file.startsWith(root + path.sep);
const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }).end(); return; }
  let file;
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    file = path.resolve(root, '.' + pathname);
    if (!inside(file)) { res.writeHead(403).end(); return; }
    if (pathname.endsWith('/')) file = path.join(file, 'index.html');
  } catch { res.writeHead(400).end(); return; }
  try {
    const actual = await fs.promises.realpath(file);
    if (!inside(actual)) { res.writeHead(403).end(); return; }
    const data = await fs.promises.readFile(actual);
    res.setHeader('Content-Type', types[path.extname(actual)] || 'text/plain; charset=utf-8');
    res.setHeader('Content-Length', data.length);
    res.setHeader('Cache-Control', 'no-cache');
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404).end('No encontrado'); }
});
server.listen(port, host, () => console.log(`Habla local: http://${host}:${server.address().port}`));
