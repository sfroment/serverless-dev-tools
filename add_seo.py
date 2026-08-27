#!/usr/bin/env python3
"""Add SEO meta tags, Open Graph, JSON-LD structured data to all 5 tools' HTML."""
import os
import re

BASE = "https://serverless-dev-tools.pages.dev"  # GitHub Pages URL (will be set after repo creation)

TOOLS = {
    "json-formatter": {
        "title": "JSON Formatter & Validator — Free Online JSON Tool",
        "description": "Free online JSON formatter and validator. Format, minify, and validate JSON with syntax highlighting and error messages. No sign-up, no tracking, all processing in your browser.",
        "keywords": "json formatter, json validator, json minifier, format json, validate json, online json tool, json beautifier",
        "og_title": "JSON Formatter & Validator — Free Online Tool",
        "og_description": "Format, validate, and minify JSON with live error reporting. No sign-up, no tracking. All processing in your browser.",
        "tool_name": "JSON Formatter & Validator",
        "tool_description": "Format, validate, and minify JSON with syntax highlighting and live error reporting.",
        "tool_category": "Developer Tools",
    },
    "regex-tester": {
        "title": "Regex Tester — Live Regex Matching & Testing Tool",
        "description": "Free online regex tester with real-time match highlighting, capture group display, and flags toggle. Test JavaScript regex patterns instantly. No sign-up, no tracking.",
        "keywords": "regex tester, regex tester online, regular expression tester, regex matcher, test regex, regex pattern tester, javascript regex",
        "og_title": "Regex Tester — Live Regex Matching Tool",
        "og_description": "Test regex patterns with real-time match highlighting and capture group display. No sign-up, no tracking.",
        "tool_name": "Regex Tester",
        "tool_description": "Test regex patterns with real-time match highlighting, capture group display, and flags toggle.",
        "tool_category": "Developer Tools",
    },
    "base64-tool": {
        "title": "Base64 Encoder/Decoder — Free Online Base64 Tool",
        "description": "Free online Base64 encoder and decoder with UTF-8 support and URL-safe mode. Encode or decode Base64 instantly in your browser. No sign-up, no tracking.",
        "keywords": "base64 encoder, base64 decoder, base64 converter, encode base64, decode base64, url-safe base64, base64 online tool",
        "og_title": "Base64 Encoder/Decoder — Free Online Tool",
        "og_description": "UTF-8 safe Base64 encoding and decoding with URL-safe support. No sign-up, no tracking.",
        "tool_name": "Base64 Encoder/Decoder",
        "tool_description": "Encode and decode Base64 with UTF-8 support and URL-safe mode.",
        "tool_category": "Developer Tools",
    },
    "jwt-decoder": {
        "title": "JWT Decoder — Free Online JSON Web Token Inspector",
        "description": "Free online JWT decoder. Decode JSON Web Token header and payload, check expiry status, and inspect claims. Decode-only (no signature verification). No sign-up, no tracking.",
        "keywords": "jwt decoder, jwt inspector, decode jwt, json web token decoder, jwt decoder online, jwt parser, jwt debug",
        "og_title": "JWT Decoder — Free Online Token Inspector",
        "og_description": "Decode JWT header and payload. Check expiry status and inspect claims. No sign-up, no tracking.",
        "tool_name": "JWT Decoder",
        "tool_description": "Decode JWT header and payload with expiry checking and claim inspection.",
        "tool_category": "Developer Tools",
    },
    "csv-to-json": {
        "title": "CSV to JSON Converter — Free Online CSV Converter",
        "description": "Free online CSV to JSON converter with proper state machine parser. Handles quoted fields, embedded commas, escaped quotes, and custom delimiters. No sign-up, no tracking.",
        "keywords": "csv to json, csv converter, csv to json converter, convert csv to json, csv parser, csv to json online, csv json",
        "og_title": "CSV to JSON Converter — Free Online Tool",
        "og_description": "Convert CSV to JSON with a proper state machine parser. Handles quoted fields and custom delimiters.",
        "tool_name": "CSV to JSON Converter",
        "tool_description": "Convert CSV to JSON with a proper state machine parser. Handles quoted fields, embedded commas, escaped quotes, and custom delimiters.",
        "tool_category": "Developer Tools",
    },
}

def generate_seo_head(tool_slug, meta):
    """Generate SEO meta tags to insert after <title>...</title>"""
    url = f"https://{tool_slug}.deeply-editorial-370.workers.dev"
    og_image = f"https://{tool_slug}.deeply-editorial-370.workers.dev/og-image.png"
    
    # JSON-LD structured data (WebApplication schema)
    json_ld = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": meta["tool_name"],
        "url": url,
        "description": meta["tool_description"],
        "applicationCategory": meta["tool_category"],
        "operatingSystem": "Any (web browser)",
        "browserRequirements": "Requires JavaScript",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": "Free, no sign-up, no tracking, client-side processing, privacy-first",
    }
    
    tags = f'''
<meta name="description" content="{meta["description"]}">
<meta name="keywords" content="{meta["keywords"]}">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="{url}">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{meta["og_title"]}">
<meta property="og:description" content="{meta["og_description"]}">
<meta property="og:image" content="{og_image}">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{meta["og_title"]}">
<meta name="twitter:description" content="{meta["og_description"]}">
<meta name="twitter:image" content="{og_image}">
<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{__import__('json').dumps(json_ld, indent=2)}
</script>'''
    
    return tags

def patch_tool(tool_slug, meta):
    """Patch a tool's index.ts to add SEO meta tags after the <title> tag."""
    filepath = os.path.join(os.path.dirname(__file__), tool_slug, "src", "index.ts")
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find the <title>...</title> tag and insert SEO tags after it
    # The title tag looks like: <title>Some Title</title>
    title_pattern = re.compile(r'(<title>[^<]+</title>)')
    
    seo_tags = generate_seo_head(tool_slug, meta)
    
    # Check if already patched
    if 'og:title' in content:
        print(f"  {tool_slug}: already has SEO tags, skipping")
        return False
    
    match = title_pattern.search(content)
    if not match:
        print(f"  {tool_slug}: WARNING - no <title> tag found")
        return False
    
    # Also update the title tag itself with the SEO-optimized title
    old_title = match.group(1)
    new_title = f'<title>{meta["title"]}</title>'
    content = content.replace(old_title, new_title, 1)
    
    # Insert SEO tags after the title
    content = content.replace(new_title, new_title + seo_tags, 1)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"  {tool_slug}: SEO tags added")
    return True

def create_landing_page():
    """Create a landing page that links all 5 tools."""
    landing_html = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Serverless Dev Tools — 5 Free Developer Utilities on Cloudflare Workers</title>
<meta name="description" content="Five free developer utility tools: JSON Formatter, Regex Tester, Base64 Encoder/Decoder, JWT Decoder, and CSV to JSON Converter. No sign-up, no tracking, no limits. Deployed on Cloudflare Workers at the edge.">
<meta name="keywords" content="developer tools, free developer tools, json formatter, regex tester, base64 encoder, jwt decoder, csv to json, serverless tools, cloudflare workers, web developer utilities">
<meta name="author" content="Sacha Froment">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0f172a">
<link rel="canonical" href="https://serverless-dev-tools.pages.dev/">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://serverless-dev-tools.pages.dev/">
<meta property="og:title" content="Serverless Dev Tools — 5 Free Developer Utilities">
<meta property="og:description" content="Five free developer tools on Cloudflare Workers. No sign-up, no tracking, no limits. All processing in your browser.">
<meta property="og:site_name" content="Serverless Dev Tools">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Serverless Dev Tools — 5 Free Developer Utilities">
<meta name="twitter:description" content="Five free developer tools on Cloudflare Workers. No sign-up, no tracking, no limits.">
<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Serverless Dev Tools",
  "description": "Five free developer utility tools deployed on Cloudflare Workers.",
  "url": "https://serverless-dev-tools.pages.dev/",
  "hasPart": [
    {"@type": "WebApplication", "name": "JSON Formatter & Validator", "url": "https://json-formatter.deeply-editorial-370.workers.dev"},
    {"@type": "WebApplication", "name": "Regex Tester", "url": "https://regex-tester.deeply-editorial-370.workers.dev"},
    {"@type": "WebApplication", "name": "Base64 Encoder/Decoder", "url": "https://base64-tool.deeply-editorial-370.workers.dev"},
    {"@type": "WebApplication", "name": "JWT Decoder", "url": "https://jwt-decoder.deeply-editorial-370.workers.dev"},
    {"@type": "WebApplication", "name": "CSV to JSON Converter", "url": "https://csv-to-json.deeply-editorial-370.workers.dev"}
  ]
}
</script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; }
  .hero { text-align: center; padding: 4rem 2rem 3rem; }
  .hero h1 { font-size: 2.5rem; color: #38bdf8; margin-bottom: 0.5rem; }
  .hero p { font-size: 1.125rem; color: #94a3b8; max-width: 600px; margin: 0 auto 1rem; }
  .badges { display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
  .badge { font-size: 0.8rem; padding: 0.4rem 1rem; border-radius: 999px; border: 1px solid #334155; background: #1e293b; color: #94a3b8; }
  .tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 2rem auto; padding: 0 2rem; }
  .tool-card { background: #1e293b; border: 1px solid #334155; border-radius: 1rem; padding: 2rem; transition: all 0.2s; text-decoration: none; color: inherit; display: block; }
  .tool-card:hover { border-color: #38bdf8; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(56, 189, 248, 0.1); }
  .tool-card .icon { font-size: 2rem; margin-bottom: 1rem; }
  .tool-card h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
  .tool-card p { font-size: 0.875rem; color: #94a3b8; line-height: 1.5; }
  .tool-card .link { display: inline-block; margin-top: 1rem; font-size: 0.875rem; color: #38bdf8; }
  footer { text-align: center; padding: 3rem 2rem; color: #475569; font-size: 0.875rem; }
  footer a { color: #64748b; text-decoration: none; }
  footer a:hover { color: #94a3b8; }
  .features { display: flex; justify-content: center; gap: 2rem; margin: 2rem auto; flex-wrap: wrap; max-width: 800px; padding: 0 2rem; }
  .feature { text-align: center; }
  .feature .emoji { font-size: 2rem; }
  .feature .label { font-size: 0.8rem; color: #64748b; margin-top: 0.5rem; }
  @media (max-width: 768px) { .hero h1 { font-size: 1.75rem; } .tools { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<div class="hero">
  <h1>Serverless Dev Tools</h1>
  <p>Five essential developer utilities deployed on Cloudflare Workers. No sign-up. No tracking. No limits. All processing happens in your browser.</p>
  <div class="badges">
    <span class="badge">No sign-up</span>
    <span class="badge">No tracking</span>
    <span class="badge">No rate limits</span>
    <span class="badge">Edge-deployed</span>
    <span class="badge">Open source</span>
  </div>
</div>
<div class="features">
  <div class="feature"><div class="emoji">🔒</div><div class="label">Privacy-first</div></div>
  <div class="feature"><div class="emoji">⚡</div><div class="label">Sub-50ms global</div></div>
  <div class="feature"><div class="emoji">🆓</div><div class="label">Free forever</div></div>
  <div class="feature"><div class="emoji">🪶</div><div class="label">Zero dependencies</div></div>
  <div class="feature"><div class="emoji">🌙</div><div class="label">Dark theme</div></div>
</div>
<div class="tools">
  <a class="tool-card" href="https://json-formatter.deeply-editorial-370.workers.dev">
    <div class="icon">📋</div>
    <h2>JSON Formatter & Validator</h2>
    <p>Format, validate, and minify JSON with syntax highlighting and error messages with line numbers.</p>
    <span class="link">Open tool →</span>
  </a>
  <a class="tool-card" href="https://regex-tester.deeply-editorial-370.workers.dev">
    <div class="icon">🔍</div>
    <h2>Regex Tester</h2>
    <p>Test regex patterns with real-time match highlighting, capture group display, and flags toggle.</p>
    <span class="link">Open tool →</span>
  </a>
  <a class="tool-card" href="https://base64-tool.deeply-editorial-370.workers.dev">
    <div class="icon">🔐</div>
    <h2>Base64 Encoder/Decoder</h2>
    <p>UTF-8 safe Base64 encoding and decoding with URL-safe support. Bidirectional.</p>
    <span class="link">Open tool →</span>
  </a>
  <a class="tool-card" href="https://jwt-decoder.deeply-editorial-370.workers.dev">
    <div class="icon">🔑</div>
    <h2>JWT Decoder</h2>
    <p>Decode JWT header and payload. Shows expiry status and flags expired tokens.</p>
    <span class="link">Open tool →</span>
  </a>
  <a class="tool-card" href="https://csv-to-json.deeply-editorial-370.workers.dev">
    <div class="icon">📊</div>
    <h2>CSV to JSON Converter</h2>
    <p>Convert CSV to JSON with a proper state machine parser. Handles quoted fields and custom delimiters.</p>
    <span class="link">Open tool →</span>
  </a>
</div>
<footer>
  <p>Built by <a href="https://github.com/sfroment">Sacha Froment</a> · Deployed on <a href="https://workers.cloudflare.com">Cloudflare Workers</a></p>
  <p style="margin-top:0.5rem;"><a href="https://github.com/sfroment/serverless-dev-tools">Source on GitHub</a> · MIT License</p>
</footer>
</body>
</html>'''
    
    landing_path = os.path.join(os.path.dirname(__file__), "landing", "index.html")
    os.makedirs(os.path.dirname(landing_path), exist_ok=True)
    with open(landing_path, 'w') as f:
        f.write(landing_html)
    print("  Landing page created at landing/index.html")

def create_sitemap():
    """Create sitemap.xml for SEO crawling."""
    urls = [
        ("https://serverless-dev-tools.pages.dev/", "1.0", "weekly"),
        ("https://json-formatter.deeply-editorial-370.workers.dev", "0.9", "weekly"),
        ("https://regex-tester.deeply-editorial-370.workers.dev", "0.9", "weekly"),
        ("https://base64-tool.deeply-editorial-370.workers.dev", "0.9", "weekly"),
        ("https://jwt-decoder.deeply-editorial-370.workers.dev", "0.9", "weekly"),
        ("https://csv-to-json.deeply-editorial-370.workers.dev", "0.9", "weekly"),
    ]
    
    xml = '<?xml version="1.0" encoding="UTF-8"?>\\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n'
    for url, priority, freq in urls:
        xml += f'  <url>\\n'
        xml += f'    <loc>{url}</loc>\\n'
        xml += f'    <changefreq>{freq}</changefreq>\\n'
        xml += f'    <priority>{priority}</priority>\\n'
        xml += f'  </url>\\n'
    xml += '</urlset>\\n'
    
    sitemap_path = os.path.join(os.path.dirname(__file__), "landing", "sitemap.xml")
    with open(sitemap_path, 'w') as f:
        f.write(xml)
    print("  sitemap.xml created at landing/sitemap.xml")

def create_robots():
    """Create robots.txt for SEO crawling."""
    content = "User-agent: *\\nAllow: /\\n\\n"
    content += "Sitemap: https://serverless-dev-tools.pages.dev/sitemap.xml\\n"
    
    robots_path = os.path.join(os.path.dirname(__file__), "landing", "robots.txt")
    with open(robots_path, 'w') as f:
        f.write(content)
    print("  robots.txt created at landing/robots.txt")

if __name__ == "__main__":
    print("Adding SEO meta tags to all 5 tools...")
    for slug, meta in TOOLS.items():
        patch_tool(slug, meta)
    
    print("\\nCreating landing page...")
    create_landing_page()
    
    print("\\nCreating sitemap.xml...")
    create_sitemap()
    
    print("\\nCreating robots.txt...")
    create_robots()
    
    print("\\nDone! All SEO assets created.")
