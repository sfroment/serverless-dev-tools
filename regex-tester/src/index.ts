export interface Env {}

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- EthicalAds: developer-focused, privacy-first ad network -->
  <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script>
<title>Regex Tester — Live Regex Matching & Testing Tool</title>
<meta name="description" content="Free online regex tester with real-time match highlighting, capture group display, and flags toggle. Test JavaScript regex patterns instantly. No sign-up, no tracking.">
<meta name="keywords" content="regex tester, regex tester online, regular expression tester, regex matcher, test regex, regex pattern tester, javascript regex">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://regex-tester.deeply-editorial-370.workers.dev">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://regex-tester.deeply-editorial-370.workers.dev">
<meta property="og:title" content="Regex Tester — Live Regex Matching Tool">
<meta property="og:description" content="Test regex patterns with real-time match highlighting and capture group display. No sign-up, no tracking.">
<meta property="og:image" content="https://regex-tester.deeply-editorial-370.workers.dev/og-image.png">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Regex Tester — Live Regex Matching Tool">
<meta name="twitter:description" content="Test regex patterns with real-time match highlighting and capture group display. No sign-up, no tracking.">
<meta name="twitter:image" content="https://regex-tester.deeply-editorial-370.workers.dev/og-image.png">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Regex Tester",
  "url": "https://regex-tester.deeply-editorial-370.workers.dev",
  "description": "Test regex patterns with real-time match highlighting, capture group display, and flags toggle.",
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
  header h1 { font-size: 1.5rem; color: #a78bfa; }
  .badge { font-size: 0.75rem; background: #8b5cf6; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; }
  .regex-bar { background: #1e293b; padding: 1rem 2rem; border-bottom: 1px solid #334155; display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }
  .regex-input { flex: 1; min-width: 250px; background: #0f172a; color: #c4b5fd; border: 2px solid #334155; border-radius: 0.375rem; padding: 0.6rem 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 1rem; outline: none; }
  .regex-input:focus { border-color: #a78bfa; }
  .flags-input { width: 80px; background: #0f172a; color: #c4b5fd; border: 2px solid #334155; border-radius: 0.375rem; padding: 0.6rem 0.5rem; font-family: 'SF Mono', monospace; font-size: 0.875rem; outline: none; text-align: center; }
  .flags-input:focus { border-color: #a78bfa; }
  .delim { color: #64748b; font-size: 1.5rem; font-family: monospace; }
  main { flex: 1; display: grid; grid-template-rows: auto 1fr 1fr; gap: 1px; background: #334155; }
  .pane { background: #0f172a; padding: 1.5rem; display: flex; flex-direction: column; min-height: 0; }
  .pane h2 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem; }
  textarea { width: 100%; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.875rem; resize: vertical; outline: none; flex: 1; min-height: 120px; }
  textarea:focus { border-color: #a78bfa; }
  .matches-info { padding: 0.75rem 1rem; background: #1e293b; border-radius: 0.375rem; margin-top: 0.75rem; font-size: 0.875rem; color: #94a3b8; }
  .match-count { color: #a78bfa; font-weight: bold; }
  #output { white-space: pre-wrap; word-break: break-all; overflow-y: auto; max-height: 400px; }
  .highlight { background: #581c87; color: #f3e8ff; border-radius: 2px; padding: 1px 2px; }
  .match-row { background: #1e293b; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem 0.75rem; margin-bottom: 0.4rem; font-family: monospace; font-size: 0.85rem; }
  .match-row .idx { color: #8b5cf6; font-weight: bold; }
  .match-row .grp { color: #fbbf24; }
  .status { margin-top: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; }
  .status.ok { background: #052e16; color: #4ade80; border: 1px solid #166534; }
  .status.err { background: #450a0a; color: #f87171; border: 1px solid #7f1d1d; }
  .pro-upsell { background: linear-gradient(135deg, #1e1b4b, #312e81); border: 1px solid #4f46e5; border-radius: 0.5rem; padding: 1rem; margin: 1rem 2rem; }
  .pro-upsell h3 { color: #a5b4fc; font-size: 0.9rem; margin-bottom: 0.25rem; }
  .pro-upsell p { color: #c7d2fe; font-size: 0.8rem; margin-bottom: 0.5rem; }
  .pro-upsell a { color: #818cf8; font-size: 0.8rem; text-decoration: none; }
  .pro-upsell a:hover { text-decoration: underline; }
  footer { text-align: center; padding: 1rem; color: #475569; font-size: 0.75rem; }
  footer a { color: #64748b; text-decoration: none; }
  footer a:hover { color: #94a3b8; }
  @media (max-width: 768px) { .regex-bar { flex-direction: column; } }
</style>
</head>
<body>
<header>
  <div style="display:flex;align-items:center;gap:0.75rem;">
    <h1>Regex Tester</h1>
    <span class="badge">Free</span>
  </div>
</header>
<!-- EthicalAds placement: above the fold, below header -->
<div class="ad-slot" style="padding: 0.5rem 2rem; background: #1e293b; border-bottom: 1px solid #334155; min-height: 90px; display: flex; align-items: center; justify-content: center;">
  <div data-ea-publisher="devtools-serverless" data-ea-type="image" data-ea-style="fixed"></div>
</div>
<div class="regex-bar">
  <span class="delim">/</span>
  <input class="regex-input" id="pattern" placeholder="Enter regex pattern..." value="\\b(\\w+@\\w+\\.\\w+)\\b">
  <span class="delim">/</span>
  <input class="flags-input" id="flags" value="gi" title="Flags (g=global, i=insensitive, m=m multiline, s=dotall, u=unicode)">
  <button style="background:#1e293b;color:#e2e8f0;border:1px solid #334155;border-radius:0.375rem;padding:0.5rem 1rem;cursor:pointer;font-size:0.8125rem;" onclick="test()">Test</button>
</div>
<main>
  <div class="pane">
    <h2>Test String</h2>
    <textarea id="teststr" placeholder="Enter test string here...">Contact us at hello@example.com or support@test.org for help.</textarea>
    <div id="status" class="status" style="display:none;"></div>
  </div>
  <div class="pane">
    <h2>Highlighted Result</h2>
    <div id="output" style="background:#1e293b;border:1px solid #334155;border-radius:0.5rem;padding:1rem;font-family:monospace;font-size:0.875rem;white-space:pre-wrap;word-break:break-all;overflow-y:auto;flex:1;min-height:120px;"></div>
    <div class="matches-info" id="info">Enter a pattern to see matches.</div>
  </div>
  <div class="pane">
    <h2>Match Details</h2>
    <div id="details" style="overflow-y:auto;flex:1;"></div>
  </div>
</main>
<div class="pro-upsell">
  <h3>Regex Pro</h3>
  <p>Cheat sheet, pattern library, shareable links, and explain-mode. One-time $9.</p>
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
function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function test() {
  const pattern = document.getElementById('pattern').value;
  const flags = document.getElementById('flags').value;
  const teststr = document.getElementById('teststr').value;
  const output = document.getElementById('output');
  const info = document.getElementById('info');
  const details = document.getElementById('details');
  const status = document.getElementById('status');

  if (!pattern) {
    output.textContent = teststr;
    info.textContent = 'No pattern entered.';
    details.innerHTML = '';
    status.style.display = 'none';
    return;
  }

  let regex;
  try {
    regex = new RegExp(pattern, flags);
  } catch(e) {
    output.textContent = teststr;
    info.textContent = '⚠ ' + e.message;
    details.innerHTML = '';
    status.style.display = 'block';
    status.className = 'status err';
    status.textContent = e.message;
    return;
  }

  status.style.display = 'none';

  // Highlight matches
  const global = flags.includes('g');
  let highlighted = '';
  let lastIdx = 0;
  let matches = [];

  if (global) {
    let m;
    while ((m = regex.exec(teststr)) !== null) {
      matches.push(m);
      highlighted += escapeHtml(teststr.slice(lastIdx, m.index)) + '<span class="highlight">' + escapeHtml(m[0]) + '</span>';
      lastIdx = m.index + m[0].length;
      if (m.index === regex.lastIndex) regex.lastIndex++;
    }
    highlighted += escapeHtml(teststr.slice(lastIdx));
  } else {
    const m = regex.exec(teststr);
    if (m) {
      matches.push(m);
      highlighted = escapeHtml(teststr.slice(0, m.index)) + '<span class="highlight">' + escapeHtml(m[0]) + '</span>' + escapeHtml(teststr.slice(m.index + m[0].length));
    } else {
      highlighted = escapeHtml(teststr);
    }
  }

  output.innerHTML = highlighted || escapeHtml(teststr);
  info.innerHTML = '<span class="match-count">' + matches.length + '</span> match' + (matches.length !== 1 ? 'es' : '') + ' found';

  // Match details
  if (matches.length === 0) {
    details.innerHTML = '<div style="color:#64748b;font-size:0.875rem;">No matches.</div>';
  } else {
    let html = '';
    matches.forEach((m, i) => {
      html += '<div class="match-row"><span class="idx">#' + (i+1) + '</span> "' + escapeHtml(m[0]) + '" at index ' + m.index;
      if (m.length > 1) {
        for (let g = 1; g < m.length; g++) {
          html += '<br><span class="grp">Group ' + g + ':</span> ' + (m[g] !== undefined ? '"' + escapeHtml(m[g]) + '"' : '(undefined)');
        }
      }
      html += '</div>';
    });
    details.innerHTML = html;
  }
}
document.getElementById('pattern').addEventListener('input', test);
document.getElementById('flags').addEventListener('input', test);
document.getElementById('teststr').addEventListener('input', test);
test();
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
