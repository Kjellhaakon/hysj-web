# hysj-web

Public website and support pages for Hysj.

## Scope

This repo holds the public web pages needed for the Hysj rollout:

- home page
- privacy policy
- account deletion instructions
- support page

## Stack

- Next.js with the App Router
- TypeScript
- GitHub Pages deployment through GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

This site is configured for static export and GitHub Pages deployment.

- repository URL: `https://github.com/Kjellhaakon/hysj-web`
- default Pages URL: `https://kjellhaakon.github.io/hysj-web/`

The repository must be public on GitHub Free for Pages to publish.

## Before publishing

Replace the placeholder values in `site-config.ts`:

- `supportEmail`
- `privacyEmail`

Then use the deployed GitHub Pages URLs from this site in the mobile app legal-link environment variables.
