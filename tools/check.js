// چک ساده سلامت www/index.html — بدون نیاز به مرورگر
// ۱) استخراج اسکریپت inline و بررسی سینتکس با node --check
// ۲) همه هندلرهای onclick به توابع تعریف‌شده اشاره کنند
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const os = require('os');

const html = fs.readFileSync(path.join(__dirname, '..', 'www', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (scripts.length !== 1) { console.error('expected exactly 1 inline script, got', scripts.length); process.exit(1); }

// 1) syntax check
const tmp = path.join(os.tmpdir(), 'gamenet-inline-' + Date.now() + '.js');
fs.writeFileSync(tmp, scripts[0]);
try {
  execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
  console.log('✓ inline JS syntax OK');
} catch (e) {
  console.error('✗ syntax error:\n' + e.stderr?.toString() || e.message);
  process.exit(1);
} finally { fs.unlinkSync(tmp); }

// 2) onclick handlers point to defined functions
const defined = new Set([...scripts[0].matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].map(m => m[1]));
let bad = 0;
for (const m of html.matchAll(/onclick="([a-zA-Z_$][\w$.]*)\(/g)) {
  const fn = m[1].split('.')[0];
  if (fn === 'document') continue; // مثلاً document.getElementById(...).click()
  if (!defined.has(fn)) { console.error('✗ onclick references undefined function:', fn); bad++; }
}
if (bad) process.exit(1);
console.log('✓ all onclick handlers defined');

// 3) no unescaped user-data injections in innerHTML templates (بازبینی سبک)
const risky = [...scripts[0].matchAll(/\$\{(?:c|s|r|client|conflict|reserved|up)\.(name|customerName|clientName|notes|phone|email|telegram|rubika)\}/g)]
  .filter(m => {
    const ctx = scripts[0].slice(Math.max(0, m.index - 160), m.index);
    return /(innerHTML|<b>|<td|<h[1-4]|<option|<p style)/.test(ctx) && !/textContent|confirm\(|showToast|Notification|buildShareText/.test(ctx);
  });
if (risky.length) { console.error('✗ possible unescaped injection(s):'); risky.forEach(m => console.error('  ', m[0])); process.exit(1); }
console.log('✓ no obvious unescaped injections');
