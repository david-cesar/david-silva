# davidsilva.site

Source for my personal website — a technical blog, project portfolio, and
professional hub, served at **[davidsilva.site](https://davidsilva.site)**.

> **Status:** Planning / docs phase. The design is decided and documented; the
> Astro site itself has not been scaffolded yet.

## Overview

| | |
|---|---|
| **Direction** | Minimalist editorial (text-first, tag-driven) |
| **Languages** | Bilingual — English (root `/`) + Brazilian Portuguese (`/pt/`) |
| **Theme** | Light/dark toggle, single accent color |
| **Stack** | [Astro](https://astro.build) (static output; React islands when needed) |
| **Hosting** | GitHub Pages + custom domain `davidsilva.site` (free, auto HTTPS) |
| **Phase 1 scope** | Home + Blog + About |

## Documentation

- **[`guia-implementacao-site.md`](./guia-implementacao-site.md)** — full
  implementation guide: architecture, folder layout, i18n, theming,
  GitHub Pages + DNS setup, deploy workflow, and an ordered build checklist.
- **[`sites-desenvolvedores-ia.md`](./sites-desenvolvedores-ia.md)** — curated
  list of influential AI developer sites used as visual/structural references.

## Getting started (once the site is scaffolded)

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
```

Deploy is automated via GitHub Actions on push to `main` (see guide §8).

## Notes

- The published site is public by nature. **Never commit secrets** (`.env`,
  tokens, internal data) — the `.gitignore` already excludes env files.
- This repo is **private**. Publishing with a custom domain on GitHub Pages
  requires either making the repo public or having GitHub Pro (see guide §8.4).
