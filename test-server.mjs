import { chromium } from 'node:child_process';
import http from 'node:http';

console.log("Checking dev server...");
const req = http.get('http://localhost:5173/src/components/StarScene.tsx', (res) => {
  console.log("StarScene status:", res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log("Length:", data.length));
});
req.on('error', (e) => console.error(e));
