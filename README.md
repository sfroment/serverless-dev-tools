# 🛠️ Serverless Dev Tools

> Five essential developer utilities deployed on Cloudflare Workers. No sign-up. No tracking. No limits. All processing happens in your browser.

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![No Tracking](https://img.shields.io/badge/Privacy-No%20Tracking-brightgreen)](#)
[![Free Forever](https://img.shields.io/badge/Price-Free%20Forever-success)](#)

## 🚀 Live Tools

| # | Tool | Description | URL |
|---|------|-------------|-----|
| 1 | **JSON Formatter & Validator** | Format, validate, and explore JSON with syntax highlighting, error messages with line numbers, and collapsible tree view. | [json-formatter.deeply-editorial-370.workers.dev](https://json-formatter.deeply-editorial-370.workers.dev) |
| 2 | **Regex Tester** | Test regex patterns with real-time match highlighting, capture group display, and flags toggle. | [regex-tester.deeply-editorial-370.workers.dev](https://regex-tester.deeply-editorial-370.workers.dev) |
| 3 | **Base64 Encoder/Decoder** | UTF-8 safe Base64 encoding and decoding. Supports URL-safe Base64. Bidirectional. | [base64-tool.deeply-editorial-370.workers.dev](https://base64-tool.deeply-editorial-370.workers.dev) |
| 4 | **JWT Decoder** | Decode JWT header and payload. Shows expiry status and flags expired tokens. Decode-only — does not verify signatures. | [jwt-decoder.deeply-editorial-370.workers.dev](https://jwt-decoder.deeply-editorial-370.workers.dev) |
| 5 | **CSV-to-JSON Converter** | Convert CSV to JSON with a proper state machine parser. Handles quoted fields, embedded commas, escaped quotes, and custom delimiters. | [csv-to-json.deeply-editorial-370.workers.dev](https://csv-to-json.deeply-editorial-370.workers.dev) |

## ✨ Features

- 🔒 **Privacy-first** — All processing happens client-side in your browser. Your data never touches a server. No analytics, no cookies, no tracking.
- ⚡ **Globally fast** — Served from Cloudflare's 300+ edge locations. Sub-50ms load time anywhere in the world.
- 🆓 **No limits** — No sign-up, no API keys, no rate limits, no paywalls. Ever.
- 🪶 **Zero dependencies** — Each tool is built with vanilla JavaScript. No frameworks, no npm packages, no build step.
- 🌙 **Dark theme** — Easy on the eyes during those late-night debugging sessions.

## 🏗️ Architecture

Each tool is a static single-page app served by a Cloudflare Worker. The Worker returns the HTML/CSS/JS bundle and Cloudflare's edge cache handles the rest. All tool logic (JSON parsing, regex matching, Base64 encoding, JWT decoding, CSV parsing) runs entirely in the browser.

```
Browser (client-side processing)
    ↕
Cloudflare Worker (serves static bundle)
    ↕
Cloudflare Edge Cache (300+ locations)
```

**Why this architecture?**

- **Privacy:** Developer tools receive sensitive input (production JWTs, private JSON, customer CSVs). Client-side-only means there's no server that *could* log your data.
- **Cost:** Zero server compute means the Cloudflare free tier (100k requests/day) is effectively unlimited.
- **Latency:** No round trips. Everything happens instantly in the browser.
- **Simplicity:** No API, no database, no auth, no rate limiting.

## 📦 Tech Stack

| Component | Technology |
|-----------|-----------|
| Language | Vanilla JavaScript (ES modules) |
| Framework | None |
| CSS | Custom properties (no framework) |
| Build tool | Wrangler (deployment only) |
| npm packages | Zero |
| Hosting | Cloudflare Workers (free tier) |
| Analytics | None |
| Database | None |
| Auth | None |

## 🚀 Quick Start

### Use the tools

Just visit the URLs above. That's it. No installation, no sign-up.

### Deploy your own

```bash
# Clone the repo
git clone https://github.com/sfroment/serverless-dev-tools.git
cd serverless-dev-tools

# Install Wrangler
npm install -g wrangler

# Deploy a tool
cd tools/json-formatter
wrangler deploy

# Repeat for each tool
cd ../regex-tester && wrangler deploy
cd ../base64-tool && wrangler deploy
cd ../jwt-decoder && wrangler deploy
cd ../csv-to-json && wrangler deploy
```

### Project structure

```
serverless-dev-tools/
├── tools/
│   ├── json-formatter/
│   │   ├── src/
│   │   │   └── index.js
│   │   ├── wrangler.toml
│   │   └── README.md
│   ├── regex-tester/
│   ├── base64-tool/
│   ├── jwt-decoder/
│   └── csv-to-json/
├── landing/
│   └── index.html
└── README.md
```

## 🔧 Tool Details

### JSON Formatter & Validator

- Syntax highlighting with color-coded keys, strings, numbers, booleans, and null
- Error messages with line and column numbers
- Collapsible tree view for large payloads
- Minify / format toggle
- Handles deeply nested structures

### Regex Tester

- Real-time match highlighting as you type
- Capture group display in a table
- Toggle flags: `g`, `i`, `m`, `s`, `u`, `y`
- Match count and indices
- Error display for invalid patterns

### Base64 Encoder/Decoder

- UTF-8 safe (handles emoji, CJK, and all Unicode)
- Bidirectional — encode and decode
- URL-safe Base64 support
- Handles malformed input gracefully

### JWT Decoder

- Decodes header and payload from any JWT
- Displays expiry date and flags expired tokens
- Shows standard claims (iss, sub, aud, exp, iat, nbf) in a readable format
- Decode-only — does NOT verify signatures (clearly labeled in UI)

### CSV-to-JSON Converter

- Proper state machine parser (not naive `split(',')`)
- Handles quoted fields with embedded commas
- Handles escaped double-quotes (`""`)
- Handles embedded newlines in quoted fields
- Custom delimiters (comma, tab, semicolon, pipe)
- First row used as JSON keys

## 🗺️ Roadmap

- [ ] URL Encoder/Decoder
- [ ] UUID Generator (v4 and v7)
- [ ] Hash Generator (SHA-1, SHA-256, SHA-512 via Web Crypto API)
- [ ] JSON-to-YAML Converter
- [ ] Color Converter (hex ↔ RGB ↔ HSL)
- [ ] Hash Generator
- [ ] URL Parser / Query String Decoder
- [ ] Timestamp Converter (Unix ↔ ISO 8601)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/new-tool`)
3. Commit your changes (`git commit -m 'Add URL encoder tool'`)
4. Push to the branch (`git push origin feature/new-tool`)
5. Open a Pull Request

### Ideas for new tools

- URL Encoder/Decoder
- UUID Generator
- Hash Generator
- JSON-to-YAML Converter
- Color Converter
- Timestamp Converter
- Markdown Preview
- HTML Encoder/Decoder
- Hash Generator
- Cron Expression Builder

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 💬 Community

- 🐦 [Twitter/X](https://twitter.com/) — Updates and new tool announcements
- 💬 [Reddit](https://reddit.com/) — Join discussions in r/webdev, r/programming, r/javascript
- 📝 [dev.to](https://dev.to/) — Technical deep-dive articles
- 🚀 [Product Hunt](https://www.producthunt.com/) — Launch coming soon

---

⭐ **Star this repo if these tools saved you a tab today!**

Made with ☕ by [Sacha](https://github.com/sfroment) · Deployed on [Cloudflare Workers](https://workers.cloudflare.com)