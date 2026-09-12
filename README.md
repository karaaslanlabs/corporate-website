# Karaaslan Labs — Corporate Website v1.1

Current static source for the live Karaaslan Labs corporate website. Public positioning remains: **AI-native product company building useful, trustworthy and scalable digital products**.

## Status

- Main production site: **LIVE** at `https://karaaslanlabs.com/`
- Current delivery path: **GitHub → Cloudflare Pages → karaaslanlabs.com**
- Language: **Turkish canonical / Türkiye-first**
- Homepage positioning: aligned with current Karaaslan Labs company identity
- Revenue pilot proof page: live at `/pilot/water-process-radar/` and intentionally `noindex,nofollow`
- Future public copy/design changes and production releases remain Founder-gated

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

The accepted production delivery architecture is:

`GitHub main → Cloudflare Pages → karaaslanlabs.com`

This repository is the code source of truth for the public corporate website. Brand/copy authority remains in the Karaaslan Labs Brand canonical workspace; the hosting provider is not Brand authority.

- Use feature branch + pull request; do not push directly to `main`.
- Material visual/copy changes require Founder review.
- Production-impacting changes retain the Founder production gate.
- DNS, domain registration, and corporate email configuration are separate infrastructure concerns and must not be changed incidentally during website work.
