# Handoff: Rafiandra Widhiansyah — Product Design Portfolio

## Overview
A personal product-design portfolio for **Rafiandra Widhiansyah**. Single-page app feel with four "pages" (Home, Work, About, Contact) plus four case-study detail views, light/dark theming, a custom cursor, scroll-reveal animations, hover image previews, a company logo ticker, and a contact form that opens a pre-filled email.

The positioning line throughout: **"I don't just design screens; I design outcomes."** — i.e. design that drives measurable business value.

## About the Design Files
The bundled files are a **design reference built in HTML** — a fully working prototype showing the intended look, motion, and behavior. They are **not** meant to be shipped verbatim. The task is to **recreate this design in the target environment** (e.g. Next.js/React, Astro, plain Vite, etc.) using that project's established patterns, OR — since this is a standalone personal site with no existing codebase — to pick a suitable modern stack (Next.js + Tailwind is a clean fit) and rebuild it there.

Two ways to view the reference:
- **`Rafiandra Widhiansyah — Portfolio (standalone preview).html`** — self-contained, works offline. Open in any browser to see the finished design (toggle theme, navigate, hover cards).
- **`EXPLORE Portfolio.dc.html` + `support.js`** — the editable source. It is authored as a "Design Component": markup + a `class Component` logic block, rendered by `support.js` (a small React-based runtime). Read it for exact markup, inline styles, and the `renderVals()` data (all copy, project metadata, case-study content live there).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, motion, and copy. Recreate pixel-faithfully, then swap the bespoke runtime for the target framework's idioms (components, router, state).

## Tech notes for the rebuild
- All styling is **inline styles** in the source (no CSS framework). When porting, translate to the target's convention (Tailwind classes, CSS modules, styled-components — whatever the codebase uses).
- It's currently **one component with internal `state`** (`page`, `caseId`, `theme`, form state). In React, model as: a router (or simple `page` state) + a `theme` context + a `projects` data array + a `<CaseStudy>` component keyed by `caseId`.
- Theming is driven by CSS custom properties on `<html data-theme="light|dark">`. Keep that approach — it's clean and framework-agnostic.

## Pages / Views

### 1. Home (`page === 'home'`)
- **Hero band**: full-viewport-height (`100dvh − 68px nav`) section with `background: var(--band)`. Eyebrow row (name + role), huge uppercase headline `Design the *possibility* of impact.` ("possibility" is italic Newsreader serif in `--accent-text`), a subtext paragraph, a primary CTA **"See the work ↓"** that smooth-scrolls to the projects list, and a row of capability chips ("What I do — Product Strategy · Interaction Design · …").
- **Company ticker**: "Trusted by teams at" + an infinite horizontal marquee of monochrome client logos (CSS `mask` tinted with `currentColor`/`--muted`, hover → `--text`). Logos: Cashbac, Sinbad, Purwadhika, Hacktiv8, Telkom Indonesia, Converge, OCX, INA Digital (`logos/*.png`).
- **Selected Work list**: rows (number · title uppercase · tag · year · arrow). Hovering a row shows a floating image preview that follows the cursor (the project's `cover`).

### 2. Work (`page === 'work'`)
- Header (eyebrow, title "Work that earned its place", intro) + a **responsive project-card grid**: 4→2→1 columns via `repeat(auto-fit,minmax(300px,1fr))` with the cap that 4 projects show 2×2. Each card: cover (image or gradient) with number + year overlay, title, tag, arrow, tech chips. Hover lifts the card.

### 3. About (`page === 'about'`)
- Round portrait avatar (`logos/about-portrait.jpg`) + headline + bio paragraphs.
- Stat row, Experience list, Capabilities chip cloud.
- Two CTAs: outline **"View résumé ↗"** (opens `assets/Rafiandra-Resume-2026.pdf` in new tab) and primary **"Work with me →"** (→ Contact).

### 4. Contact (`page === 'contact'`)
- Left: heading + intro + contact links (Email, LinkedIn `linkedin.com/in/rafiandraw`, Medium `medium.com/@widhiandraw`, Dribbble `dribbble.com/Rafiandra`), each with a fill-on-hover row treatment.
- Right: a form (Name, Email, "What are you building?") with hover/focus/filled field states. Submit opens a Gmail compose window pre-filled to `rafiandra.widhiansyah@gmail.com` (subject `[Email] has reached out to you!`, body = the message).

### 5. Case studies (`page === 'case'`, switched by `caseId`)
Four detail pages, same template: back link · breadcrumb · big headline (one word italic-serif accent) · lead paragraph · 3 quick stats · optional live-site CTA · 16:9 hero image · meta grid · stacked content sections (Challenge / Discover / Define / Decisions / Build / Validate / Impact / Reflect) · big impact numbers · italic reflection quotes · "Next project" button (cycles IDDS → OCX → Legion → Pijar → IDDS).
- **IDDS** — INA Digital govtech design system + AI workflow. Live: design.inadigital.go.id. Hero `logos/idds-hero.png`.
- **The OCX** — fraud-proof TCG marketplace (web + Android), AI pre-grading. Hero `logos/ocx-case-hero.jpg`; gallery of framed web/app shots (`logos/ocx-g-*.png`). Live: theocx.com / Play Store.
- **Legion** — Telkom multi-brand design system. Live: legion.digitaltelkom.id. Hero `logos/legion-hero.png`.
- **Pijar** — school onboarding / DAPODIK data migration. Before/After screenshots (`logos/pijar-before.png`, `logos/pijar-after.png`), hero `logos/pijar-hero-wizard.png`. Live: pijarsekolah.id.

## Interactions & Behavior
- **Theme toggle**: pill switch in nav; knob slides + crossfades a sun (light) / crescent-moon (dark) icon. Persisted only in memory; defaults to system preference on load (`prefers-color-scheme`).
- **Custom cursor** (pointer-fine devices only): a small dot + a trailing ring (lerp follow via rAF), `mix-blend-mode:difference`, white fill so it inverts on any bg. Ring scales up over interactive elements (`[data-cursor]`).
- **Magnetic buttons** (`[data-magnet]`): translate toward the cursor on hover.
- **Hover preview** (`[data-preview]` + `[data-grad]`): floating thumbnail box follows cursor over Work rows.
- **Scroll reveal**: elements with `[data-reveal]` fade/slide in via IntersectionObserver (they default to visible so content never hides if JS/observer fails).
- **Smooth scroll**: custom rAF tween (native smooth-scroll was unreliable in the authoring sandbox; in a normal browser you can use `scroll-behavior:smooth`).
- **Bottom nav** (≤820px): the top nav collapses into a floating pill bar (Home · Work · About · Contact) centered at the bottom, full-width with side margins, rounded-full, blurred.
- **Marquee**: CSS `@keyframes marquee` translateX(-50%) over a doubled list.

## Responsive behavior
- `≤900px`: Work grid → 2 cols; case-study "Four moves" strategy grid → 2 cols.
- `≤820px`: desktop nav hidden, floating bottom nav shown; `main` gets bottom padding for the bar.
- `≤560px`: Work grid → 1 col; strategy grid → 1 col; project rows stack; about header stacks; logo shrinks to mini.

## Design Tokens (CSS custom properties)

Light (`:root`):
- `--bg #f6f4f0` · `--surface #fffdfa` · `--text #16140f` · `--muted #75706a` · `--faint #a8a39b`
- `--line #e7e2da` · `--line2 #efebe4` · `--inv #16140f` · `--inv-text #f6f4f0`
- `--band #f1ece2` · `--band-text #16140f` · `--band-line #e4ded3`
- `--accent #e7d44e` · `--accent-ink #1a1808` · `--accent-text #806200` (deep gold for text/headlines)
- `--accent-grad linear-gradient(135deg,#f3e27a 0%,#e6c63c 100%)` (button fills)

Dark (`html[data-theme="dark"]`):
- `--bg #100f0d` · `--surface #191815` · `--text #f0ede7` · `--muted #8f8980` · `--faint #5e594f`
- `--line #272420` · `--line2 #211f1c` · `--inv #f0ede7` · `--inv-text #100f0d`
- `--band #1b1916` · `--band-text #f3efe8` · `--band-line #322e28`
- `--accent #ecda57` · `--accent-ink #1a1808` · `--accent-text #ecda57` · `--accent-grad linear-gradient(135deg,#f6e88a 0%,#e8c845 100%)`

Type:
- Body/UI: **Hanken Grotesk** (Google Fonts; weights 400–800).
- Serif accent (the italic word in each headline): **Newsreader** italic (400/500).
- Logo wordmark + capability/brand bits: **Poppins** (600–800). Logo = "Rafiandra" with a gold "W".
- Hero headline: `clamp(38px,7.6vw,124px)`, weight 800, uppercase, `letter-spacing:-.04em`, `line-height:.94`. Section headings `clamp(19px,1.9vw,25px)` weight 700. Body `clamp(15px,1.4vw,17px)`, `line-height:1.7`.

Shape/motion:
- Radii: cards 16–22px, pills/buttons 100px, small chips 8–12px.
- Card shadow on hover: `0 22px 50px -24px rgba(0,0,0,.4)`.
- Standard ease: `cubic-bezier(.2,.7,.2,1)`; toggle knob `cubic-bezier(.34,1.56,.64,1)`.

## Assets (in `logos/` and `assets/`)
- **Portrait**: `logos/about-portrait.jpg`.
- **Client logos** (monochrome via CSS mask): `cashbac, sinbad, purwadhika, hacktiv8, telkom, converge, ocx, inadigital` (`.png`).
- **Case heroes / shots**: `idds-hero.png`, `idds-cover.png`, `ocx-hero.jpg`, `ocx-case-hero.jpg`, `ocx-g-{market,product,insight,chart}.png`, `legion-hero.png`, `pijar-hero-wizard.png`, `pijar-case-hero.png`, `pijar-before.png`, `pijar-after.png`.
- **Résumé**: `assets/Rafiandra-Resume-2026.pdf`.
- The OCX composites (`ocx-hero.jpg`, `ocx-case-hero.jpg`, `ocx-g-*`) were assembled from raw app/web screenshots into device mockups — treat them as final images.
- All real screenshots are the client's own product UIs.

## Files in this bundle
- `EXPLORE Portfolio.dc.html` — source markup + logic (read for exact copy, project data, case content).
- `support.js` — the runtime that renders the source (only needed if you open the `.dc.html` directly; not part of the rebuild).
- `Rafiandra Widhiansyah — Portfolio (standalone preview).html` — self-contained finished design for offline visual reference.
- `logos/`, `assets/` — all images and the résumé PDF.
