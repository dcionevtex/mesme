# MESME

This Next.js App Router project contains the bilingual MESME homepage, Gold and Black Diamond Bear detail pages, and a private concierge entry page.

## Preview on your computer

Use Node.js 20.9 or newer and npm. From the repository folder, run these commands:

```sh
npm ci
npm run dev
```

Open [English](http://localhost:3000/en) or [العربية](http://localhost:3000/ar). The root URL redirects to English. To run the same build used for deployment, run:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Preview on Vercel

The repo uses Vercel's Next.js defaults. A Vercel project can build this branch as a Preview deployment. Local and preview builds default to `noindex` and deny crawling. The SEO origin defaults to `https://mesmeofficial.com` for canonical and alternate URLs. Set `SITE_URL` if a different approved canonical origin is needed. Set `SITE_INDEXABLE=true` only for an approved production launch. Vercel Preview remains non-indexable with that flag set.

The npm scripts use Next.js with Webpack so the same commands work on the Windows development checkout and in a Vercel build.

## Content and media

- Edit the English and Arabic page text in [messages](messages). Review both languages whenever a page changes.
- [Source assets](assets/source) hold the Milestone 1 archive. [Public media](public/media) contains separately generated WebP crops and size variants, H.264 hero clips optimized for streaming, and copies of the original wordmark and site icons. Next Image serves responsive sizes for editorial and product imagery.
- English uses MESME’s original DM Sans files. Arabic uses self-hosted Noto Sans Arabic. [Font notices](public/licenses)
- Product and bespoke journeys carry their context into the localized concierge page. The final enquiry and privacy links lead to the existing MESME website. The World of MESME uses the authorized image archive.

See the [discovery documentation](docs) for product evidence, asset provenance and the design system.
