# agents.md

Operational guidance for AI agents working in this repository. This is the
**single source of truth** for how to work here. `CLAUDE.md` points to this file.

For deep architecture, i18n, theming, and deploy details, see
**[`guia-implementacao-site.md`](./guia-implementacao-site.md)** — do not duplicate
that content here; link to it.

## What this is

Source for **davidsilva.site** — a personal technical blog, project portfolio, and
professional hub. Minimalist editorial design, bilingual (English at root `/`,
Brazilian Portuguese at `/pt/`), light/dark theme. Built with **Astro** (static
output), hosted on **GitHub Pages** with the custom domain `davidsilva.site`.

**Current status:** docs/planning phase — the Astro site is not scaffolded yet.

## Project docs

- [`README.md`](./README.md) — human entry point / overview.
- [`guia-implementacao-site.md`](./guia-implementacao-site.md) — full build guide
  (architecture, folder layout, i18n, theming, GitHub Pages + DNS, deploy, checklist).
- [`sites-desenvolvedores-ia.md`](./sites-desenvolvedores-ia.md) — visual reference
  list of influential AI developer sites, organized by criterion.

## Commands

> Available only after the Astro project is scaffolded (guide §9).

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

Deploy is automated via GitHub Actions on push to `main` (guide §8). Do not deploy
manually.

## Code conventions

- **No emojis in site pages or content.** Headlines, body text, home, blog
  posts, and UI use clean SVG icons (stroke style) instead of emoji — never
  decorative emoji. This applies to rendered pages; it does not restrict commit
  messages or internal docs.
- **Static content** → `.astro` / `.md`. Reach for a **React island** (`client:*`)
  only for genuinely interactive pieces; never for static layout. Keep JS shipped to
  the browser near zero.
- **Posts** live in `src/content/blog-en/` and `src/content/blog-pt/` as markdown.
  Link an EN↔PT pair with a shared `translationKey` in frontmatter.
- **i18n:** English is the default locale with no prefix (`/`, `/blog/`); Portuguese
  lives under `/pt/`. UI strings go in `src/i18n/ui.ts` — never hardcode user-facing
  text in components.
- **Theme:** colors come from CSS custom properties switched by `data-theme` on
  `<html>`. Add colors as variables in `src/styles/global.css`; never hardcode hex
  values in components.
- Match the structure and conventions already in the guide before inventing new ones.

## Content & security

- The published site is **public**. **Never commit secrets** — no `.env`, tokens,
  API keys, or internal/SAP data. The `.gitignore` already excludes env files.
- Do not commit anything you would not put on a public web page.

## Git

- **Identity is repo-local on purpose.** `user.name` / `user.email` are set with
  `git config --local`. **Never** modify the global git config, and never run git
  commands that would change it.
- **Never commit, push, branch, or deploy unless explicitly asked.** Finish the
  work, report, and wait.
- **Commit format:** `<type>(<scope>): <description>` — e.g. `feat(blog): add post
  layout`, `docs(guide): update deploy section`. Types: `feat`, `fix`, `docs`,
  `style`, `refactor`, `chore`, `test`.
- Group commits semantically (config, source, docs separately).
- Default branch is `main`.

## Before considering work done

- `npm run build` succeeds with no errors.
- If you changed features/structure, update the relevant docs **in the same change**
  (README / guide / this file). Source changes without a matching doc update are a
  smell.
- Theme and language both tested where UI changed.
