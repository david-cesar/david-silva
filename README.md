# davidsilva.site

The source code for David Silva's personal website, a bilingual home for
technical writing, professional information, and tabletop role-playing content.

## Features

- English pages at the root and Brazilian Portuguese pages under `/pt/`
- Technical blog with topic tags and RSS feed
- Home, About, and tabletop RPG pages
- Light and dark themes
- Static site generation with Astro

## Development

Requires Node.js `>=22.23.4`.

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deployment

GitHub Pages is deployed when a stable GitHub Release is published. Pre-releases
do not trigger deployment, and releases whose target is not `main` are skipped.
The workflow builds the commit referenced by the release's tag.
