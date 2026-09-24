# Karaaslan Labs — Corporate Website v2

From-scratch rebuild of the Karaaslan Labs corporate website under Company decisions **KL-DEC-031** and **KL-DEC-032**.

## Branch status

- Implementation branch: `feat/corporate-site-v2-rebuild`
- Production authority: `main` remains live until Founder G3
- Live site: https://karaaslanlabs.com/
- Delivery: **GitHub → Cloudflare Pages → karaaslanlabs.com**
- Language: **Turkish canonical / Türkiye-first**
- Public umbrella: **technology company**
- Current product proof: **GüvenCheck**
- Revenue pilot route: `/pilot/water-process-radar/` remains bounded and `noindex,nofollow`

## Architecture

Buildless static-first implementation:

- semantic HTML5
- modern CSS split into tokens / base / layout / components / motion
- minimal ES-module JavaScript
- approved Karaaslan Labs brand assets
- real GüvenCheck product assets
- no CMS
- no database
- no analytics/cookie layer by default
- no runtime framework dependency

## Source layout

- `index.html`
- `styles/tokens.css`
- `styles/base.css`
- `styles/layout.css`
- `styles/components.css`
- `styles/motion.css`
- `scripts/main.js`
- `assets/brand/`
- `assets/guvencheck/`
- `assets/meta/`
- `pilot/water-process-radar/`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `_headers`

## Local preview

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Governance

- No direct push to `main`.
- Feature branch → checks → Cloudflare preview → Founder G2 → Founder G3 → squash merge.
- Corporate identity remains locked; this rebuild changes positioning, IA, copy, layout, component system and motion.
- DNS, domain registration and corporate email configuration are out of scope.
- Public claims remain evidence-bounded; no fake customer, partner, certification, scale or market-leadership claims.
- Legal/footer entity details require the Legal Fact Gate before production.
