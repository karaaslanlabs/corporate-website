# Karaaslan Labs — Corporate Website v1.0

Production-ready static build for the Phase 0 Karaaslan Labs corporate website.

## Status

- Build: complete
- Automated QA: 50/50 PASS
- Language: Turkish canonical
- Production deployment: **not performed**
- Founder approval: required before replacing the live site

## Stack

No framework or runtime dependency is required.

- Semantic HTML
- CSS
- Minimal vanilla JavaScript
- Approved Karaaslan Labs SVG brand assets
- Founder-provided GüvenCheck product assets, optimized to WebP

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Production files

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/`

## Real destinations

- GüvenCheck: https://guvencheck.vercel.app/
- GitHub: https://github.com/karaaslanlabs
- Contact: contact@karaaslanlabs.com

## Deployment governance

This build does **not** change Squarespace, hosting, DNS, domain registration, or corporate email configuration.

The current Squarespace site cannot simply be replaced by uploading this folder as a custom Squarespace 7.1 template. A deployment method must therefore be selected before production:

1. Re-implement the approved build inside Squarespace using supported page blocks/custom code; or
2. Approve a hosting/platform change for this static build and update only the required web DNS records.

See `PLATFORM_DECISION.md`.
