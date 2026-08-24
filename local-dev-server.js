const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.otf': 'font/otf',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon'
};

const MOBILE_UA_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS/i;

const server = http.createServer((req, res) => {
  // Normalize URL to remove query strings and decode URI
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  const userAgent = req.headers['user-agent'] || '';
  const isMobileUA = MOBILE_UA_REGEX.test(userAgent);
  const viewParam = parsedUrl.searchParams.get('view');

  if (pathname === '/' || pathname === '/index.html' || pathname === '/indexmobile.html') {
    if (viewParam === 'mobile') {
      pathname = '/indexmobile.html';
    } else if (viewParam === 'desktop') {
      pathname = '/index.html';
    } else if (isMobileUA) {
      pathname = '/indexmobile.html';
    } else {
      pathname = '/index.html';
    }
  }

  const filePath = path.join(__dirname, pathname);

  // Security check: ensure path is within current directory
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Weberseek web server is running at http://localhost:${PORT}`);
});
