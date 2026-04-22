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
- Vercel-ready deployment

## Local development

```bash
npm install
npm run dev
```

## Before publishing

Replace the placeholder values in `site-config.ts`:

- `supportEmail`
- `privacyEmail`

Then connect the repo to Vercel and use the deployed URLs from this site in the mobile app legal-link environment variables.
