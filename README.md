# Karaaslan Labs — Corporate Website

Karaaslan Labs kurumsal web sitesi.

## Current architecture

- Next.js 16 App Router
- React 19
- TypeScript
- Motion
- Static export for Cloudflare Pages
- Turkish `/` + English `/en/` routes with manual TR/EN switching
- Browser-language auto routing to `/en/` for first-time English-language visitors
- Canonical + hreflang metadata for both languages
- Custom Canvas-based KL Signal Field
- No CMS
- No database
- No analytics/cookie layer by default

## Brand baseline

- Inter
- #0B121D
- #2563EB
- #334155
- #E5E7EB
- #F8FAFC
- approved Structural KL assets only

## Source layout

- `app/` — routes, metadata and global design system
- `components/` — interactive React components
- `public/assets/brand/` — approved brand assets
- `public/assets/guvencheck/` — real GüvenCheck product proof
- `public/pilot/water-process-radar/` — preserved bounded pilot
- `public/_headers` — Cloudflare security headers baseline
- `public/robots.txt`
- `public/sitemap.xml`

## Local development

```bash
npm install
npm run dev
```

## Production build / static export

```bash
npm run lint:type
npm run build
```

Static output is generated into `out/`.

## Governance

- Production changes require explicit Founder approval.
- Public claims must be supported by verifiable facts.
- No fake case studies, logos, metrics or product assets.
- GüvenCheck is a real current product proof, not the full definition of Karaaslan Labs.

## Source availability

This repository is public for engineering transparency and review. It does not currently declare an open-source license; treat the code as source-visible rather than open-source unless a license is added later.
