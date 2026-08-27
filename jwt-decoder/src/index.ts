export interface Env {}

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EthicalAds: developer-focused, privacy-first ad network -->
  <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script>
<title>JWT Decoder — Free Online JSON Web Token Inspector</title>
<meta name="description" content="Free online JWT decoder. Decode JSON Web Token header and payload, check expiry status, and inspect claims. Decode-only (no signature verification). No sign-up, no tracking.">
<meta name="keywords" content="jwt decoder, jwt inspector, decode jwt, json web token decoder, jwt decoder online, jwt parser, jwt debug">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://jwt-decoder.deeply-editorial-370.workers.dev">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://jwt-decoder.deeply-editorial-370.workers.dev">
<meta property="og:title" content="JWT Decoder — Free Online Token Inspector">
<meta property="og:description" content="Decode JWT header and payload. Check expiry status and inspect claims. No sign-up, no tracking.">
<meta property="og:image" content="https://jwt-decoder.deeply-editorial-370.workers.dev/og-image.png">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="JWT Decoder — Free Online Token Inspector">
<meta name="twitter:description" content="Decode JWT header and payload. Check expiry status and inspect claims. No sign-up, no tracking.">
<meta name="twitter:image" content="https://jwt-decoder.deeply-editorial-370.workers.dev/og-image.png">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "JWT Decoder",
  "url": "https://jwt-decoder.deeply-editorial-370.workers.dev",
  "description": "Decode JWT header and payload with expiry checking and claim inspection.",
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
  header h1 { font-size: 1.5rem; color: #fb923c; }
  .badge { font-size: 0.75rem; background: #f97316; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; }
  .toolbar { display: flex; gap: 0.5rem; }
  button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem 1rem; font-size: 0.8125rem; cursor: pointer; transition: all 0.15s; }
  button:hover { background: #334155; border-color: #fb923c; }
  button.primary { background: #f97316; border-color: #f97316; color: #fff; }
  button.primary:hover { background: #ea580c; }
  .input-section { padding: 1.5rem 2rem; }
  textarea { width: 100%; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.8125rem; resize: vertical; outline: none; min-height: 80px; }
  textarea:focus { border-color: #fb923c; }
  main { flex: 1; padding: 0 2rem 1rem; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
  .card { background: #1e293b; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; overflow: auto; }
  .card h2 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem; }
  .card pre { font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.8125rem; color: #e2e8f0; white-space: pre-wrap; word-break: break-all; }
  .card .decoded { color: #fb923c; font-weight: 600; }
  .status { padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; margin-top: 0.75rem; }
  .status.ok { background: #052e16; color: #4ade80; border: 1px solid #166534; }
  .status.err { background: #450a0a; color: #f87171; border: 1px solid #7f1d1d; }
  .status.info { background: #1e293b; color: #94a3b8; border: 1px solid #334155; }
  .status.warn { background: #422006; color: #fbbf24; border: 1px solid #78350f; }
  .token-parts { display: flex; gap: 4px; margin-top: 0.5rem; font-family: monospace; font-size: 0.75rem; word-break: break-all; }
  .token-parts .p1 { color: #fb923c; }
  .token-parts .p2 { color: #a78bfa; }
  .token-parts .p3 { color: #94a3b8; }
  .token-parts .dot { color: #475569; }
  .field { margin-bottom: 0.5rem; }
  .field .key { color: #fb923c; font-weight: 600; }
  .field .val { color: #e2e8f0; }
  .exp-warning { color: #f87171; font-weight: bold; }
  .exp-ok { color: #4ade80; font-weight: bold; }
  .pro-upsell { background: linear-gradient(135deg, #431407, #7c2d12); border: 1px solid #f97316; border-radius: 0.5rem; padding: 1rem; margin: 0 2rem 1rem; }
  .pro-upsell h3 { color: #fdba74; font-size: 0.9rem; margin-bottom: 0.25rem; }
  .pro-upsell p { color: #fed7aa; font-size: 0.8rem; margin-bottom: 0.5rem; }
  .pro-upsell a { color: #fb923c; font-size: 0.8rem; text-decoration: none; }
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
    <h1>JWT Decoder</h1>
    <span class="badge">Free</span>
  </div>
  <div class="toolbar">
    <button onclick="decode()">Decode</button>
    <button onclick="copyJson()">Copy JSON</button>
  </div>
</header>
<!-- EthicalAds placement: above the fold, below header -->
<div class="ad-slot" style="padding: 0.5rem 2rem; background: #1e293b; border-bottom: 1px solid #334155; min-height: 90px; display: flex; align-items: center; justify-content: center;">
  <div data-ea-publisher="devtools-serverless" data-ea-type="image" data-ea-style="fixed"></div>
</div>
<div class="input-section">
  <textarea id="jwt" placeholder="Paste JWT here (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)" spellcheck="false">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5OTk5OTk5OTl9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</textarea>
  <div id="status" class="status info">Paste a JWT token above and click Decode</div>
</div>
<main>
  <div class="card">
    <h2>Header</h2>
    <pre id="header">—</pre>
  </div>
  <div class="card">
    <h2>Payload</h2>
    <pre id="payload">—</pre>
  </div>
  <div class="card">
    <h2>Signature & Info</h2>
    <pre id="signature">—</pre>
  </div>
</main>
<div class="pro-upsell">
  <h3>JWT Pro</h3>
  <p>Signature verification with secret/public key, token generation, and algorithm debugging. One-time $9.</p>
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
function base64UrlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  const bin = atob(str);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
function formatJson(obj) {
  return JSON.stringify(obj, null, 2);
}
function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function decode() {
  const token = document.getElementById('jwt').value.trim();
  const status = document.getElementById('status');
  const headerEl = document.getElementById('header');
  const payloadEl = document.getElementById('payload');
  const sigEl = document.getElementById('signature');

  if (!token) {
    status.className = 'status info';
    status.textContent = 'Paste a JWT token above';
    headerEl.textContent = '—';
    payloadEl.textContent = '—';
    sigEl.textContent = '—';
    return;
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    status.className = 'status err';
    status.textContent = '✗ Invalid JWT: expected 3 parts separated by dots, got ' + parts.length;
    return;
  }

  try {
    // Header
    const header = JSON.parse(base64UrlDecode(parts[0]));
    headerEl.innerHTML = '<span class="decoded">' + escapeHtml(formatJson(header)) + '</span>';

    // Payload
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    let payloadHtml = '<span class="decoded">' + escapeHtml(formatJson(payload)) + '</span>';

    // Check exp
    if (payload.exp) {
      const expDate = new Date(payload.exp * 1000);
      const now = new Date();
      const expired = expDate < now;
      payloadHtml += '\\n\\n<span class="' + (expired ? 'exp-warning' : 'exp-ok') + '">' +
        (expired ? '⚠ EXPIRED' : '✓ VALID') + ' — expires: ' + expDate.toISOString() + '</span>';
    }
    if (payload.iat) {
      payloadHtml += '\\n<span class="val">Issued: ' + new Date(payload.iat * 1000).toISOString() + '</span>';
    }
    if (payload.nbf) {
      payloadHtml += '\\n<span class="val">Not before: ' + new Date(payload.nbf * 1000).toISOString() + '</span>';
    }
    payloadEl.innerHTML = payloadHtml;

    // Signature
    let sigInfo = 'Algorithm: ' + (header.alg || 'unknown') + '\\n';
    sigInfo += 'Type: ' + (header.typ || 'JWT') + '\\n';
    sigInfo += 'Token type: ' + (parts[2].length > 0 ? 'Signed' : 'Unsigned') + '\\n\\n';
    sigInfo += 'Signature (base64url):\\n' + parts[2] + '\\n\\n';
    sigInfo += '⚠ Signature not verified\\n';
    sigInfo += 'Pro version verifies with your secret/key';
    sigEl.textContent = sigInfo;

    status.className = 'status ok';
    status.textContent = '✓ Decoded successfully — ' + header.alg + ' / ' + (header.typ || 'JWT');
  } catch(e) {
    status.className = 'status err';
    status.textContent = '✗ Failed to decode: ' + e.message;
  }
}
function copyJson() {
  const payload = document.getElementById('payload').textContent;
  if (payload === '—') return;
  navigator.clipboard.writeText(payload).then(() => {
    const s = document.getElementById('status');
    s.className = 'status ok';
    s.textContent = '✓ Copied payload to clipboard';
  });
}
decode();
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
