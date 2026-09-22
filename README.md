# Website Building Toolkit

Reusable website-building material from the Fersace workspace.

## Included

- `engines/cinematic-hero/` — a React/Vite cinematic hero engine and its source configuration.
- `skills/cinematic-hero.skill` — the packaged hero-building skill.
- `docs/` — sanitized architecture and operating notes for a time-limited site-preview platform.
- `templates/landing-page/` — a vendor-neutral checklist for building local-business landing pages.
- `skills/README.md` — the related local skills used during website work.

## Deliberately excluded

Client-branded previews, prospect/contact records, private business documents, admin and payment handlers, database exports, credentials, environment files, and private media are not included.

## Quick start

```bash
cd engines/cinematic-hero
npm install
npm run dev
```

The toolkit is intentionally framework-light. Cloudflare and other deployment-specific material belongs in the deployment environment, with secrets stored in the provider's secret manager.
