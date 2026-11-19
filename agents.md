# agents.md

Operational guidance for AI agents working in this repository. This is the
single source of truth for repository-specific conventions. `CLAUDE.md` points
to this file.

Use this file and the source code for implementation conventions. The README
provides a brief project overview and development commands.

## What this is

Source for **davidsilva.site** — a personal technical blog, project portfolio, and
professional hub. Minimalist editorial design, bilingual (English at root `/`,
Brazilian Portuguese at `/pt/`), light/dark theme. Built with **Astro** (static
output), configured for the `davidsilva.site` domain.

## Commands

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # preview the production build
```

## Design system

Keep new UI consistent with the existing design system.

- **Typography:** serif body (`--font-body`), sans-serif for headings and UI
  (`--font-ui`). Sizes come from the `--text-*` scale, never hardcoded.
- **Spacing:** use the `--space-1`…`--space-7` scale for margins/padding; do not
  invent one-off rem values.
- **Color:** only `--*` CSS variables from `global.css` (theme-aware). No hardcoded
  hex in components. Palette is Tormenta 20 (see `global.css` header comment).
- **Header:** home icon (left) + nav (Blog, RPG, About) + LangToggle + ThemeToggle
  (right). No bottom border — separated by whitespace (`--space-7`). Active nav
  item gets a Copper underline via `.active`.
- **Icons:** stroke-style SVG (`stroke="currentColor"`), never emoji.
- **Transitions:** use `--transition` for hover/color changes (smooth, subtle).
- **Width:** reading column capped at `--measure` (720px).

## Code conventions

- **No emojis in site pages or content.** Headlines, body text, home, blog
  posts, and UI use clean SVG icons (stroke style) instead of emoji — never
  decorative emoji. This applies to rendered pages; it does not restrict commit
  messages or internal docs.
- **Static content** → `.astro` / `.md`. Reach for a **React island** (`client:*`)
  only for genuinely interactive pieces; never for static layout. Keep JS shipped to
  the browser near zero and keep scripts limited to necessary interactions.
- **Posts** live in `src/content/blog-en/` and `src/content/blog-pt/` as markdown.
  Link an EN↔PT pair with a shared `translationKey` in frontmatter. Optional
  `linkedinUrl` adds a "Comment on LinkedIn" button to the post footer. Keep a
  post `draft: true` until ready; drafts are excluded from production builds and
  routes but visible in `npm run dev`.
- **Blog helpers** live in `src/lib/blog.ts` (`getPosts`, `getTags`, `tagSlug`,
  `postHref`, `tagHref`, `blogBase`, `formatDate`). Use these instead of building
  paths or sorting by hand. Tags are clickable and generate `/blog/tag/[tag]/`
  pages (and the PT mirror).
- **Page copy** (About, RPG, home bio) lives as plain markdown in
  `src/content/pages/` named `<page>-<lang>.md` (e.g. `about-en.md`, `about-pt.md`,
  `home-en.md`). The `.astro` page renders it via `getPage(name, lang)` from
  `src/lib/pages.ts`. Edit the prose in the markdown, never in the `.astro`.
  Filenames use a hyphen before the locale (the content loader strips dots from
  ids, so `about.en.md` would collide).
- **PT→EN writing flow:** David writes and edits the Portuguese himself (it is his
  real voice). When the PT of a post or page changes, the agent produces the
  matching EN as an **independent rewrite, not a literal translation**, following
  the writing voice rules below. Do not touch the PT unless asked; the English is
  what the agent maintains.
- **i18n:** English is the default locale with no prefix (`/`, `/blog/`); Portuguese
  lives under `/pt/`. UI strings go in `src/i18n/ui.ts` — never hardcode user-facing
  text in components.
- **Theme:** colors come from CSS custom properties switched by `data-theme` on
  `<html>`. Add colors as variables in `src/styles/global.css`; never hardcode hex
  values in components.
- Follow the established structure and conventions in the source before
  introducing new patterns.

## Content & security

- The published site is **public**. **Never commit secrets** — no `.env`, tokens,
  API keys, or internal/SAP data. The `.gitignore` already excludes env files.
- Do not commit anything you would not put on a public web page.

## Writing voice and copy rules

These are non-negotiable for every user-facing text on the site (home, About,
RPG, blog posts, page copy, UI strings). When writing copy, follow these without
being reminded:

1. **No em-dashes or en-dashes (— –) in prose.** David reads them as a tell of
   LLM-written text and rewrites to avoid them. Use a comma, a colon, a full stop
   (two sentences), or parentheses instead. A hyphen inside a compound word
   (`read-only`, `trade-offs`) is fine.
2. **No emoji in pages or content.** Use clean stroke-style SVG icons, never
   decorative emoji. (Also stated in Code conventions; it applies to copy too.)
3. **No universalist claims about LLMs/AI.** Frame things as "our use case" or "the
   work I do", not as universal law. Decisions are choices under constraints, with
   trade-offs named, not rules that always hold.
4. **No AI-writing clichés.** Avoid "it's worth noting", "in summary", "it's
   important to note", "honestly", "two honesties", labeled lists of "honest
   caveats", and similar filler. Read it aloud: if it sounds like an AI report
   instead of an engineer talking to a colleague, rewrite it.
5. **Conversational but technical.** Plain, precise language. Explain a
   non-obvious domain term on first use by rewriting the sentence in plain words,
   rather than appending "term (explanation)". Universal terms (JSON, SQL, API,
   HTTP, cache, retry, timeout) need no explanation.
6. **No generic engagement endings.** Do not close with a question, a call for
   comments, or a filler sign-off. End on a specific statement that finishes the
   thought.
7. **Portuguese is an independent rewrite, not a literal translation.** Write PT
   so it reads naturally to a Brazilian (pt-BR), keeping the same voice and these
   same rules. EN and PT are two separate pieces of writing, not one translated.
8. **Brand framing.** The site positions three facets, engineer / teacher /
   dungeon master, tied into a narrative (side A professional + side B human that
   explains how David thinks), never a loose list. Employers may be named (SAP,
   Zallpy, Omnibees, HSystem) but never the internal purpose/domain of the systems
   he built.
9. **Argument structure.** Open an essay by presenting its problem or thesis.
   Develop the argument through connected paragraphs, and use headings to mark
   shifts in the reasoning rather than to separate sources. Close by bringing the
   argument to a conclusion, not by introducing another source or topic.
10. **Integrate sources into the argument.** Use sources as evidence for specific
    claims and cite them inline where they support the point. Analyze and connect
    the ideas across sources; do not make a separate section for each reference
    unless the user explicitly asks for a source-by-source review.

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
