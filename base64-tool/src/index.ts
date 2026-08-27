export interface Env {}

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EthicalAds: developer-focused, privacy-first ad network -->
  <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script>
<title>Base64 Encoder/Decoder — Free Online Base64 Tool</title>
<meta name="description" content="Free online Base64 encoder and decoder with UTF-8 support and URL-safe mode. Encode or decode Base64 instantly in your browser. No sign-up, no tracking.">
<meta name="keywords" content="base64 encoder, base64 decoder, base64 converter, encode base64, decode base64, url-safe base64, base64 online tool">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://base64-tool.deeply-editorial-370.workers.dev">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://base64-tool.deeply-editorial-370.workers.dev">
<meta property="og:title" content="Base64 Encoder/Decoder — Free Online Tool">
<meta property="og:description" content="UTF-8 safe Base64 encoding and decoding with URL-safe support. No sign-up, no tracking.">
<meta property="og:image" content="https://base64-tool.deeply-editorial-370.workers.dev/og-image.png">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Base64 Encoder/Decoder — Free Online Tool">
<meta name="twitter:description" content="UTF-8 safe Base64 encoding and decoding with URL-safe support. No sign-up, no tracking.">
<meta name="twitter:image" content="https://base64-tool.deeply-editorial-370.workers.dev/og-image.png">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Base64 Encoder/Decoder",
  "url": "https://base64-tool.deeply-editorial-370.workers.dev",
  "description": "Encode and decode Base64 with UTF-8 support and URL-safe mode.",
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
  header h1 { font-size: 1.5rem; color: #34d399; }
  .badge { font-size: 0.75rem; background: #10b981; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; }
  .toolbar { display: flex; gap: 0.5rem; align-items: center; }
  button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem 1rem; font-size: 0.8125rem; cursor: pointer; transition: all 0.15s; }
  button:hover { background: #334155; border-color: #34d399; }
  button.primary { background: #10b981; border-color: #10b981; color: #fff; }
  button.primary:hover { background: #059669; }
  label { font-size: 0.8125rem; color: #94a3b8; display: flex; align-items: center; gap: 0.3rem; cursor: pointer; }
  main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #334155; padding: 1px; }
  .pane { background: #0f172a; padding: 1.5rem; display: flex; flex-direction: column; }
  .pane h2 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem; }
  textarea { width: 100%; flex: 1; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.875rem; resize: none; min-height: 250px; outline: none; }
  textarea:focus { border-color: #34d399; }
  .status { margin-top: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; min-height: 2.5rem; display: flex; align-items: center; }
  .status.ok { background: #052e16; color: #4ade80; border: 1px solid #166534; }
  .status.err { background: #450a0a; color: #f87171; border: 1px solid #7f1d1d; }
  .status.info { background: #1e293b; color: #94a3b8; border: 1px solid #334155; }
  .pro-upsell { background: linear-gradient(135deg, #052e16, #064e3b); border: 1px solid #10b981; border-radius: 0.5rem; padding: 1rem; margin: 1rem 2rem; }
  .pro-upsell h3 { color: #6ee7b7; font-size: 0.9rem; margin-bottom: 0.25rem; }
  .pro-upsell p { color: #a7f3d0; font-size: 0.8rem; margin-bottom: 0.5rem; }
  .pro-upsell a { color: #34d399; font-size: 0.8rem; text-decoration: none; }
  .pro-upsell a:hover { text-decoration: underline; }
  footer { text-align: center; padding: 1rem; color: #475569; font-size: 0.75rem; }
  footer a { color: #64748b; text-decoration: none; }
  footer a:hover { color: #94a3b8; }
  .info-strip { padding: 0.5rem 1.5rem; background: #1e293b; border-bottom: 1px solid #334155; font-size: 0.75rem; color: #64748b; }
  @media (max-width: 768px) { main { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<header>
  <div style="display:flex;align-items:center;gap:0.75rem;">
    <h1>Base64 Encoder / Decoder</h1>
    <span class="badge">Free</span>
  </div>
  <div class="toolbar">
    <label><input type="checkbox" id="urlsafe"> URL-safe</label>
    <button onclick="encode()">Encode →</button>
    <button onclick="decode()">← Decode</button>
    <button onclick="swap()">⇄ Swap</button>
    <button onclick="copyOutput()">Copy</button>
  </div>
</header>
<!-- EthicalAds placement: above the fold, below header -->
<div class="ad-slot" style="padding: 0.5rem 2rem; background: #1e293b; border-bottom: 1px solid #334155; min-height: 90px; display: flex; align-items: center; justify-content: center;">
  <div data-ea-publisher="devtools-serverless" data-ea-type="image" data-ea-style="fixed"></div>
</div>
<div class="info-strip">Supports UTF-8 text. URL-safe mode uses - and _ instead of + and /.</div>
<main>
  <div class="pane">
    <h2>Plain Text</h2>
    <textarea id="plaintext" placeholder="Enter text to encode..."></textarea>
  </div>
  <div class="pane">
    <h2>Base64</h2>
    <textarea id="base64" placeholder="Enter base64 to decode..."></textarea>
    <div id="status" class="status info">Ready</div>
  </div>
</main>
<div class="pro-upsell">
  <h3>Base64 Pro</h3>
  <p>Bulk file encoding, hex/binary views, and API access. One-time $9.</p>
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
function setStatus(msg, type) {
  const s = document.getElementById('status');
  s.textContent = msg;
  s.className = 'status ' + type;
}
function encode() {
  const text = document.getElementById('plaintext').value;
  if (!text) { setStatus('No input', 'info'); return; }
  try {
    const bytes = new TextEncoder().encode(text);
    let bin = '';
    bytes.forEach(b => bin += String.fromCharCode(b));
    let encoded = btoa(bin);
    if (document.getElementById('urlsafe').checked) {
      encoded = encoded.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');
    }
    document.getElementById('base64').value = encoded;
    setStatus('✓ Encoded (' + encoded.length + ' chars)', 'ok');
  } catch(e) { setStatus('✗ ' + e.message, 'err'); }
}
function decode() {
  const b64 = document.getElementById('base64').value.trim();
  if (!b64) { setStatus('No input', 'info'); return; }
  try {
    let decoded = b64;
    if (document.getElementById('urlsafe').checked) {
      decoded = decoded.replace(/-/g, '+').replace(/_/g, '/');
      while (decoded.length % 4) decoded += '=';
    }
    const bin = atob(decoded);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const text = new TextDecoder().decode(bytes);
    document.getElementById('plaintext').value = text;
    setStatus('✓ Decoded (' + text.length + ' chars)', 'ok');
  } catch(e) { setStatus('✗ Invalid base64: ' + e.message, 'err'); }
}
function swap() {
  const a = document.getElementById('plaintext').value;
  const b = document.getElementById('base64').value;
  document.getElementById('plaintext').value = b;
  document.getElementById('base64').value = a;
}
function copyOutput() {
  const b64 = document.getElementById('base64').value;
  if (!b64) { setStatus('Nothing to copy', 'info'); return; }
  navigator.clipboard.writeText(b64).then(() => setStatus('✓ Copied', 'ok'));
}
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
