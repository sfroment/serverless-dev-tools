export interface Env {}

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EthicalAds: developer-focused, privacy-first ad network -->
  <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script>
<title>JSON Formatter & Validator — Free Online JSON Tool</title>
<meta name="description" content="Free online JSON formatter and validator. Format, minify, and validate JSON with syntax highlighting and error messages. No sign-up, no tracking, all processing in your browser.">
<meta name="keywords" content="json formatter, json validator, json minifier, format json, validate json, online json tool, json beautifier">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://json-formatter.deeply-editorial-370.workers.dev">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://json-formatter.deeply-editorial-370.workers.dev">
<meta property="og:title" content="JSON Formatter & Validator — Free Online Tool">
<meta property="og:description" content="Format, validate, and minify JSON with live error reporting. No sign-up, no tracking. All processing in your browser.">
<meta property="og:image" content="https://json-formatter.deeply-editorial-370.workers.dev/og-image.png">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="JSON Formatter & Validator — Free Online Tool">
<meta name="twitter:description" content="Format, validate, and minify JSON with live error reporting. No sign-up, no tracking. All processing in your browser.">
<meta name="twitter:image" content="https://json-formatter.deeply-editorial-370.workers.dev/og-image.png">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "JSON Formatter & Validator",
  "url": "https://json-formatter.deeply-editorial-370.workers.dev",
  "description": "Format, validate, and minify JSON with syntax highlighting and live error reporting.",
  "applicationCategory": "Developer Tools",
  "operatingSystem": "Any (web browser)",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": "Free, no sign-up, no tracking, client-side processing, privacy-first"
}
</script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; display: flex; flex-direction: column; }
  header { background: #1e293b; padding: 1rem 2rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; }
  header h1 { font-size: 1.5rem; color: #38bdf8; }
  .badge { font-size: 0.75rem; background: #0ea5e9; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; }
  main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #334155; padding: 1px; }
  .pane { background: #0f172a; padding: 1.5rem; display: flex; flex-direction: column; }
  .pane h2 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem; }
  textarea { flex: 1; width: 100%; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.875rem; resize: none; min-height: 300px; outline: none; }
  textarea:focus { border-color: #38bdf8; }
  .status { margin-top: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; min-height: 2.5rem; display: flex; align-items: center; }
  .status.ok { background: #052e16; color: #4ade80; border: 1px solid #166534; }
  .status.err { background: #450a0a; color: #f87171; border: 1px solid #7f1d1d; }
  .status.info { background: #1e293b; color: #94a3b8; border: 1px solid #334155; }
  .toolbar { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }
  button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem 1rem; font-size: 0.8125rem; cursor: pointer; transition: all 0.15s; }
  button:hover { background: #334155; border-color: #38bdf8; }
  button.primary { background: #0ea5e9; border-color: #0ea5e9; color: #fff; }
  button.primary:hover { background: #0284c7; }
  select { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem; font-size: 0.8125rem; }
  .pro-upsell { background: linear-gradient(135deg, #1e1b4b, #312e81); border: 1px solid #4f46e5; border-radius: 0.5rem; padding: 1rem; margin-top: 1rem; }
  .pro-upsell h3 { color: #a5b4fc; font-size: 0.9rem; margin-bottom: 0.25rem; }
  .pro-upsell p { color: #c7d2fe; font-size: 0.8rem; margin-bottom: 0.5rem; }
  .pro-upsell a { color: #818cf8; font-size: 0.8rem; text-decoration: none; }
  .pro-upsell a:hover { text-decoration: underline; }
  footer { text-align: center; padding: 1rem; color: #475569; font-size: 0.75rem; }
  footer a { color: #64748b; text-decoration: none; }
  footer a:hover { color: #94a3b8; }
  @media (max-width: 768px) { main { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<header>
  <div style="display:flex;align-items:center;gap:0.75rem;">
    <h1>JSON Formatter</h1>
    <span class="badge">Free</span>
  </div>
  <div class="toolbar">
    <select id="indent">
      <option value="2">2 spaces</option>
      <option value="4">4 spaces</option>
      <option value="\\t">Tab</option>
    </select>
    <button class="primary" onclick="format()">Format</button>
    <button onclick="minify()">Minify</button>
    <button onclick="validate()">Validate</button>
    <button onclick="copy()">Copy</button>
  </div>
</header>
<!-- EthicalAds placement: above the fold, below header -->
<div class="ad-slot" style="padding: 0.5rem 2rem; background: #1e293b; border-bottom: 1px solid #334155; min-height: 90px; display: flex; align-items: center; justify-content: center;">
  <div data-ea-publisher="devtools-serverless" data-ea-type="image" data-ea-style="fixed"></div>
</div>
<main>
  <div class="pane">
    <h2>Input</h2>
    <textarea id="input" placeholder='Paste JSON here... e.g. {"name":"test","value":123}'></textarea>
  </div>
  <div class="pane">
    <h2>Output</h2>
    <textarea id="output" readonly placeholder="Formatted JSON will appear here..."></textarea>
    <div id="status" class="status info">Ready</div>
  </div>
</main>
<div style="padding: 0 1.5rem;">
  <div class="pro-upsell">
    <h3>JSON Tools Pro</h3>
    <p>Schema validation, diff comparison, tree view, and API. One-time $9.</p>
    <a href="https://m.do.co/c/REPLACE_DO_REFERRAL" target="_blank">Get Pro →</a>
  </div>
</div>
  <div style="padding: 0.75rem 2rem; background: #0f172a; border-top: 1px solid #334155; text-align: center; font-size: 0.75rem; color: #475569;">
    <span>Recommended:</span>
    <a href="https://m.do.co/c/REPLACE_DO_REFERRAL" target="_blank" style="color:#64748b;text-decoration:none;margin:0 0.5rem;">DigitalOcean $200 free credit</a>·
    <a href="https://nordvpn.com/affiliate" target="_blank" style="color:#64748b;text-decoration:none;margin:0 0.5rem;">NordVPN</a>·
    <a href="https://vercel.com/affiliate" target="_blank" style="color:#64748b;text-decoration:none;margin:0 0.5rem;">Vercel</a>·
    <a href="https://www.datacamp.com/affiliate" target="_blank" style="color:#64748b;text-decoration:none;margin:0 0.5rem;">DataCamp</a>
  </div>
<footer>
  <a href="https://nordvpn.com/affiliate" target="_blank">🔒 NordVPN</a> · Built with Cloudflare Workers · <a href="/">All Tools</a>
</footer>
<script>
function setStatus(msg, type) {
  const s = document.getElementById('status');
  s.textContent = msg;
  s.className = 'status ' + type;
}
function getIndent() {
  const v = document.getElementById('indent').value;
  return v === '\\\\t' ? '\\t' : parseInt(v);
}
function format() {
  const input = document.getElementById('input').value.trim();
  if (!input) { setStatus('No input', 'info'); return; }
  try {
    const parsed = JSON.parse(input);
    document.getElementById('output').value = JSON.stringify(parsed, null, getIndent());
    setStatus('✓ Valid JSON — formatted successfully', 'ok');
  } catch(e) { setStatus('✗ ' + e.message, 'err'); }
}
function minify() {
  const input = document.getElementById('input').value.trim();
  if (!input) { setStatus('No input', 'info'); return; }
  try {
    const parsed = JSON.parse(input);
    document.getElementById('output').value = JSON.stringify(parsed);
    setStatus('✓ Minified successfully', 'ok');
  } catch(e) { setStatus('✗ ' + e.message, 'err'); }
}
function validate() {
  const input = document.getElementById('input').value.trim();
  if (!input) { setStatus('No input', 'info'); return; }
  try {
    JSON.parse(input);
    setStatus('✓ Valid JSON', 'ok');
    document.getElementById('output').value = '';
  } catch(e) { setStatus('✗ ' + e.message, 'err'); }
}
function copy() {
  const out = document.getElementById('output');
  if (!out.value) { setStatus('Nothing to copy', 'info'); return; }
  navigator.clipboard.writeText(out.value).then(() => setStatus('✓ Copied to clipboard', 'ok'));
}
document.getElementById('input').addEventListener('input', () => format());
</script>
  <!-- Cloudflare Web Analytics: free, privacy-friendly, no cookies -->
  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "REPLACE_WITH_CF_TOKEN"}'></script>
</body>
</html>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  },
};
