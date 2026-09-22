# Website Building Toolkit

Reusable website-building material from the Fersace workspace.

## Included

- `engines/cinematic-hero/` — a React/Vite cinematic hero engine and its source configuration.
- `skills/cinematic-hero.skill` — the packaged hero-building skill.
- `docs/` — sanitized architecture and operating notes for a time-limited site-preview platform.
- `templates/landing-page/` — a single-file local-business page with bracketed placeholders.
- `platform/slug.mjs` — slug validation for a time-limited preview host.
- `deploy/cloudflare-pages/` — a Pages deploy example with no account identifiers.
- `skills/README.md` — the related local skills used during website work.

## Deliberately excluded

Client-branded previews, prospect/contact records, private business documents, admin and payment handlers, database exports, credentials, environment files, and private media are not included.

## Quick start

```bash
cd engines/cinematic-hero
npm install
npm run dev
```

Open `templates/landing-page/index.html` in a browser. Replace every bracket before the page is published.

```bash
node --test platform/slug.test.mjs
```

Cloudflare deployment notes are in `deploy/cloudflare-pages/`. Keep secrets in the provider's secret manager, not in this repository.
