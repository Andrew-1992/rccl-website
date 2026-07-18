# RCCL — Rammed Earth Construction Company Limited

Premium corporate website for RCCL, built with Next.js 16 (App Router), TypeScript,
and Tailwind CSS v4. Content is sourced from RCCL's company profile (established
2022, Juba, South Sudan).

## Design system

- **Palette** — white `#FFFFFF` (dominant), ink `#0A0A0A` (structure/text/nav), signal
  red `#C4272B` (accent only). Tokens live in `app/globals.css` under `:root` /
  `@theme inline`.
- **Type** — Spectral (single family, headline and body) — an editorial serif chosen
  to match the refined, high-contrast serif used on premium engineering/holding-company
  reference sites. Loaded via `next/font/google` in `app/layout.tsx`.
- **Signature motif** — `components/RammedEarthLayers.tsx`: an abstract striated-band
  graphic that literalizes rammed earth's compacted-layer construction technique.
  Used as the hero backdrop, section dividers, and footer strip, with a
  scroll-triggered "layers rising" build animation (respects `prefers-reduced-motion`).
- **Grid** — sharp corners everywhere (`* { border-radius: 0 }`), generous margins via
  the `.container-rccl` utility, full-bleed imagery.
- **Nav behavior** — `components/Nav.tsx` hides on scroll-down and reveals on
  scroll-up (past a 120px threshold), always visible near the top of the page and
  while the mobile menu is open.

## Navigation

Home · What We Do (`/services`) · About Us (`/about`) · Portfolio (`/portfolio`) ·
Shop (`/shop`) · Events (`/events`) · Contact Us (`/contact`)

Sustainability and Careers remain live routes, linked from the footer, but aren't in
the primary nav.

## Structure

```
app/
  layout.tsx            Root layout: font, Nav, Footer, WhatsApp button, metadata
  page.tsx               Home
  services/
    page.tsx              Services parent/listing ("What We Do" in nav)
    [slug]/page.tsx        Dynamic service detail (rammed earth, general, design, PM)
  portfolio/
    page.tsx               Filterable project grid
    [slug]/page.tsx        Dynamic project case study
  shop/page.tsx            Construction materials supply enquiry catalogue
  events/page.tsx          Upcoming / past events
  sustainability/page.tsx  Data-forward sustainability case
  about/page.tsx           Our Story / Mission / Vision, leadership, values
  careers/page.tsx         Open roles + apprenticeship narrative
  contact/page.tsx         WhatsApp, form, map, response-time
  api/contact/route.ts    Form submission endpoint (stub — wire to email/WhatsApp API)
  sitemap.ts / robots.ts  SEO
  not-found.tsx           Custom 404

components/               All UI building blocks (Nav, Footer, Hero, section blocks,
                           RammedEarthLayers motif, PhotoPlaceholder, ContactForm, UI.tsx
                           for shared buttons/eyebrows/section wrapper)

content/                  CMS-ready, typed content: services.ts, projects.ts,
                           testimonials.ts, shop.ts, events.ts — edit these arrays to
                           add/update content without touching page templates

lib/whatsapp.ts            Central WhatsApp number + link helper
```

## Content sourcing note

`content/projects.ts` lists RCCL's 12 named portfolio projects (2023–2025) exactly as
given in the company profile: name, location, and year. Fields the profile didn't
include — challenge, approach, size, duration, outcome detail, quotes — are marked
`[X]` rather than invented, so nothing on the live site reads as a fabricated client
quote or statistic attributed to a real project. Same approach in
`content/testimonials.ts`: a single honest placeholder rather than invented reviews.

## Content editing (non-technical staff)

Projects, services, shop categories, events, and testimonials are structured as typed
arrays in `content/`. To add a new project, copy an existing object in
`content/projects.ts` and fill in the fields — it will automatically appear in the
`/portfolio` grid, get its own detail page at `/portfolio/[slug]`, and can be linked
from a service page via `relatedProjectSlugs`. Same pattern for the other content files.

For a non-technical team long-term, wire these files to a headless CMS (Sanity or a
markdown content layer) — the data shape is already CMS-shaped (flat, typed records),
so this is a swap of the import, not a rewrite of the pages.

## Placeholders to fill in before launch

- **Numbers**: every `[X]` in `content/*.ts` and page copy (trust-strip m² figure,
  project details, embodied-carbon and thermal-comfort data sources, budget ranges,
  phone numbers, addresses, certifications, event dates).
- **Photography**: every `<PhotoPlaceholder>` component marks a real photo slot —
  search the codebase for `PhotoPlaceholder` to find every location. Replace with
  `next/image` once real photography is available.
- **WhatsApp number**: `lib/whatsapp.ts`.
- **Social links**: Instagram/Facebook URLs in `components/Footer.tsx`.
- **Map**: `app/contact/page.tsx` — the embedded map query.
- **Contact form backend**: `app/api/contact/route.ts` — currently validates and logs
  the submission; wire it to a transactional email provider and/or the WhatsApp
  Business API.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: `next/font/google` fetches Spectral from Google Fonts at build time. This
> requires outbound network access to `fonts.googleapis.com` / `fonts.gstatic.com` —
> available on Vercel and most normal dev/CI environments.

## Build & deploy

```bash
npm run build
npm start
```

Recommended host: **Vercel** (automatic image optimization, zero-config Next.js
support).

## Performance & accessibility notes

- No client JS beyond what's needed for the nav menu (incl. scroll show/hide),
  project filter, and contact form — everything else is server-rendered.
- `PhotoPlaceholder` components are sized with explicit aspect ratios so real photos
  won't cause layout shift once dropped in; pair with `next/image` for automatic
  responsive sizing/lazy-loading.
- Motion respects `prefers-reduced-motion` (see `app/globals.css`).
- Signal red on white and white on ink both pass WCAG AA for text; verify again once
  the accent is used over real photography.
