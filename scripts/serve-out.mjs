// Serves the static export in /out for local preview (`npm start`).
// Uses only Node built-ins, so it adds no dependencies.
import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..", "out");
const PORT = Number(process.env.PORT) || 3000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const isFile = (path) => {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
};

createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const target = normalize(join(ROOT, urlPath));
  if (!target.startsWith(ROOT)) {
    res.writeHead(403).end();
    return;
  }

  // /contact/ -> /contact/index.html (trailingSlash export layout)
  const candidates = [target, join(target, "index.html"), `${target}.html`];
  const file = candidates.find(isFile);
  const status = file ? 200 : 404;
  const path = file ?? join(ROOT, "404.html");

  res.writeHead(status, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" });
  createReadStream(path).pipe(res);
}).listen(PORT, () => {
  console.log(`Serving ./out at http://localhost:${PORT}`);
});
