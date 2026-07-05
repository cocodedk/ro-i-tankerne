# Ro i Tankerne

One-page website for **Ro i Tankerne** — samtaler for unge og forældrevejledning i Roskilde (youth counseling and parent guidance by an educated socialpædagog).

Calm, mobile-first, Danish. Vite + React + TypeScript, self-hosted fonts, parallax that respects `prefers-reduced-motion`. No cookies, no analytics, no forms.

**Live preview:** https://cocodedk.github.io/ro-i-tankerne/

> Preview build — some content is still placeholder (`[mail følger]`, `[telefonnummer følger]`, the portrait photo, social links) pending the practitioner's details, and will move to its own domain later.

## Develop

```bash
npm ci
npm run dev      # local dev server
npm test         # Vitest suite
npm run build    # production build → dist/
```

## Structure

All Danish copy lives in one place — `src/content/site.ts`. Each page section is a component under `src/components/` with its own CSS module. Design tokens are in `src/styles/global.css`.

## Deploy

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
