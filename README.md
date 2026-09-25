# Karaaslan Labs — Corporate Website

Karaaslan Labs kurumsal web sitesi.

## Current architecture

- Next.js 16 App Router
- React 19
- TypeScript
- Motion
- Static export for Cloudflare Pages
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

- Production `main` is not changed without explicit Founder G3.
- Public claims must pass the Legal Fact Gate.
- No fake case studies, logos, metrics or product assets.
- GüvenCheck is a real current product proof, not the full definition of Karaaslan Labs.
