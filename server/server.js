import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'public');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' };

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ ok: true, app: 'makwa-live', demo: true }));
    return;
  }
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === '/') pathname = '/index.html';
  const safe = normalize(pathname).replace(/^\.\.(\/|\\|$)/, '');
  const file = join(root, safe);
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error('not a file');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream', 'cache-control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=3600' });
    res.end(body);
  } catch {
    const body = await readFile(join(root, 'index.html'));
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' });
    res.end(body);
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Makwa Live listening on ${port}`));
