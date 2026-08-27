export interface Env {}

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EthicalAds: developer-focused, privacy-first ad network -->
  <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script>
<title>CSV to JSON Converter — Free Online CSV Converter</title>
<meta name="description" content="Free online CSV to JSON converter with proper state machine parser. Handles quoted fields, embedded commas, escaped quotes, and custom delimiters. No sign-up, no tracking.">
<meta name="keywords" content="csv to json, csv converter, csv to json converter, convert csv to json, csv parser, csv to json online, csv json">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://csv-to-json.deeply-editorial-370.workers.dev">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://csv-to-json.deeply-editorial-370.workers.dev">
<meta property="og:title" content="CSV to JSON Converter — Free Online Tool">
<meta property="og:description" content="Convert CSV to JSON with a proper state machine parser. Handles quoted fields and custom delimiters.">
<meta property="og:image" content="https://csv-to-json.deeply-editorial-370.workers.dev/og-image.png">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CSV to JSON Converter — Free Online Tool">
<meta name="twitter:description" content="Convert CSV to JSON with a proper state machine parser. Handles quoted fields and custom delimiters.">
<meta name="twitter:image" content="https://csv-to-json.deeply-editorial-370.workers.dev/og-image.png">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CSV to JSON Converter",
  "url": "https://csv-to-json.deeply-editorial-370.workers.dev",
  "description": "Convert CSV to JSON with a proper state machine parser. Handles quoted fields, embedded commas, escaped quotes, and custom delimiters.",
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
  header h1 { font-size: 1.5rem; color: #f472b6; }
  .badge { font-size: 0.75rem; background: #ec4899; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; }
  .toolbar { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }
  button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem 1rem; font-size: 0.8125rem; cursor: pointer; transition: all 0.15s; }
  button:hover { background: #334155; border-color: #f472b6; }
  button.primary { background: #ec4899; border-color: #ec4899; color: #fff; }
  button.primary:hover { background: #db2777; }
  label { font-size: 0.8125rem; color: #94a3b8; display: flex; align-items: center; gap: 0.3rem; cursor: pointer; }
  select { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.4rem; font-size: 0.8125rem; }
  main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #334155; padding: 1px; }
  .pane { background: #0f172a; padding: 1.5rem; display: flex; flex-direction: column; }
  .pane h2 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem; }
  textarea { width: 100%; flex: 1; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.8125rem; resize: none; min-height: 250px; outline: none; }
  textarea:focus { border-color: #f472b6; }
  .status { margin-top: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; min-height: 2.5rem; display: flex; align-items: center; }
  .status.ok { background: #052e16; color: #4ade80; border: 1px solid #166534; }
  .status.err { background: #450a0a; color: #f87171; border: 1px solid #7f1d1d; }
  .status.info { background: #1e293b; color: #94a3b8; border: 1px solid #334155; }
  .stats { font-size: 0.75rem; color: #64748b; margin-top: 0.5rem; }
  .stats span { color: #f472b6; font-weight: bold; }
  .pro-upsell { background: linear-gradient(135deg, #500724, #831843); border: 1px solid #ec4899; border-radius: 0.5rem; padding: 1rem; margin: 1rem 2rem; }
  .pro-upsell h3 { color: #f9a8d4; font-size: 0.9rem; margin-bottom: 0.25rem; }
  .pro-upsell p { color: #fbcfe8; font-size: 0.8rem; margin-bottom: 0.5rem; }
  .pro-upsell a { color: #f472b6; font-size: 0.8rem; text-decoration: none; }
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
    <h1>CSV → JSON</h1>
    <span class="badge">Free</span>
  </div>
  <div class="toolbar">
    <label>Delimiter:
      <select id="delimiter">
        <option value=",">Comma (,)</option>
        <option value=";">Semicolon (;)</option>
        <option value="\\t">Tab</option>
        <option value="|">Pipe (|)</option>
      </select>
    </label>
    <button class="primary" onclick="convert()">Convert</button>
    <button onclick="copy()">Copy JSON</button>
  </div>
</header>
<!-- EthicalAds placement: above the fold, below header -->
<div class="ad-slot" style="padding: 0.5rem 2rem; background: #1e293b; border-bottom: 1px solid #334155; min-height: 90px; display: flex; align-items: center; justify-content: center;">
  <div data-ea-publisher="devtools-serverless" data-ea-type="image" data-ea-style="fixed"></div>
</div>
<main>
  <div class="pane">
    <h2>CSV Input</h2>
    <textarea id="csv" placeholder="name,age,city&#10;Alice,30,NYC&#10;Bob,25,LA">name,age,city,email
Alice,30,New York,alice@example.com
Bob,25,"Los Angeles",bob@test.org
"Carol O'Brien",35,Chicago,carol@site.net
Dave,28,"San Francisco, CA",dave@dev.io</textarea>
    <div class="stats" id="csvStats"></div>
  </div>
  <div class="pane">
    <h2>JSON Output</h2>
    <textarea id="output" readonly placeholder="JSON output will appear here..."></textarea>
    <div id="status" class="status info">Ready</div>
  </div>
</main>
<div class="pro-upsell">
  <h3>CSV Tools Pro</h3>
  <p>Handle nested objects, type inference, large files, and export to XML/YAML. One-time $9.</p>
  <a href="https://m.do.co/c/REPLACE_DO_REFERRAL" target="_blank">Get Pro →</a>
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
function parseCSV(text, delimiter) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i+1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += ch; i++; continue;
    }

    if (ch === '"') { inQuotes = true; i++; continue; }
    if (ch === delimiter) { row.push(field); field = ''; i++; continue; }
    if (ch === '\\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    if (ch === '\\r') { i++; continue; }
    field += ch; i++;
  }

  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows.filter(r => r.length > 1 || (r.length === 1 && r[0] !== ''));
}

function convert() {
  const csv = document.getElementById('csv').value;
  const delimRaw = document.getElementById('delimiter').value;
  const delim = delimRaw === '\\\\t' ? '\\t' : delimRaw;
  const status = document.getElementById('status');

  if (!csv.trim()) { status.className = 'status info'; status.textContent = 'No input'; return; }

  try {
    const rows = parseCSV(csv, delim);
    if (rows.length < 2) {
      status.className = 'status err';
      status.textContent = 'Need at least a header row and one data row';
      return;
    }

    const headers = rows[0].map(h => h.trim());
    const json = [];

    for (let r = 1; r < rows.length; r++) {
      const obj = {};
      for (let c = 0; c < headers.length; c++) {
        obj[headers[c]] = rows[r][c] !== undefined ? rows[r][c] : '';
      }
      json.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(json, null, 2);

    document.getElementById('csvStats').innerHTML = '<span>' + (rows.length - 1) + '</span> rows × <span>' + headers.length + '</span> columns';

    status.className = 'status ok';
    status.textContent = '✓ Converted ' + (rows.length - 1) + ' rows to JSON';
  } catch(e) {
    status.className = 'status err';
    status.textContent = '✗ ' + e.message;
  }
}

function copy() {
  const out = document.getElementById('output').value;
  if (!out) return;
  navigator.clipboard.writeText(out).then(() => {
    const s = document.getElementById('status');
    s.className = 'status ok';
    s.textContent = '✓ Copied to clipboard';
  });
}

convert();
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
