# MESME implementation plan

This is a proposal for a subsequent milestone. Milestone 1 delivers the audit, source asset inventory and implementation decisions for review.

## Platform

| Technology | Proposed role |
| --- | --- |
| [Next.js App Router](https://nextjs.org/docs/app) | Server-rendered locale routes and metadata. Statically render public editorial pages where practical. Limit client-side code to galleries, navigation, video and forms. |
| [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) | Strict types for localized content, stable product identifiers, asset metadata and lead form inputs. Add runtime validation at ingestion and server boundaries. |
| [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes) | Responsive layout and accessible component state styles backed by the verified palette, with logical spacing and alignment. |
| [next-intl](https://next-intl.dev/docs/routing/setup) | App Router locale routing, typed messages, locale-aware links and localized formatting. Keep page copy in a reviewed content source. |
| [Vercel](https://vercel.com/docs/deployments/environments) | Git-based preview deployments with preview protection and isolated test integrations. Add production hosting and domain cutover only after approval. |

Start with versioned, validated content for the known collection. Decide with MESME whether a CMS is needed after confirming editorial ownership and update cadence. Confirm the enquiry and sales model before adding checkout, availability or payment integrations.

## Proposed site map

Routes below are public route templates. Both languages get equivalent content and actions. Use a stable product ID to pair translations even if URL slugs differ. Confirm slugs and navigation labels with MESME and a native Arabic reviewer.

| Route | Page requirements |
| --- | --- |
| `/{locale}` | Product-led hero, direct collection entry, craftsmanship and scent previews, bespoke invitation and private concierge. |
| `/{locale}/collection` | Gold and Black cards with verified naming, product imagery and links to individual pages. |
| `/{locale}/collection/{product-slug}` | Premium gallery with macro details, approved specifications and variant information, optional care or fulfilment details when supplied, and a product-specific enquiry. |
| `/{locale}/craftsmanship` | The house, making process and material story, using approved imagery and claims. |
| `/{locale}/fragrance/origin-no-1` | The scent story and relationship between the sachet and the Diamond Bear, with approved usage and availability details. |
| `/{locale}/bespoke` | Personalisation options and consultation flow, with lead times and service scope only when verified. |
| `/{locale}/concierge` | Private enquiry with product or service context. Support a verified direct contact link when the owner supplies one. |
| `/{locale}/privacy` | Localized approved policy and access from all forms and the footer. |

Keep launch notifications as an optional, separately consented flow once MESME confirms launch timing and the mailing provider. Start social integration with approved profile links and permitted static imagery. Load any external embed on demand after reviewing accessibility, privacy and performance. Confirm official URLs and any intended WhatsApp account with MESME before adding them.

## English, Arabic and full RTL

- Use stable `/en` and `/ar` routes. Set document-level `lang="en" dir="ltr"` and `lang="ar" dir="rtl"` on their respective pages. Keep a visible “English” and “العربية” switch that takes the visitor to the same content in the other language. Respect an explicit locale choice and keep locale URLs stable for visitors and crawlers.
- Build layout with logical properties and direction-aware icons and transitions. Mirror directional arrows, breadcrumbs, drawer entry and gallery progression. Keep wordmarks, product imagery, playback symbols and the underlying DOM reading order appropriate to their content.
- Isolate Latin product names, phone numbers and emails within Arabic with `bdi` or an explicit inline direction. Use `dir="auto"` for mixed-script free text and email or telephone input modes as appropriate. Verify Arabic punctuation, dates, units and currency formatting when those facts are supplied.
- Use separate messages and localized content fields for all page text, forms, accessibility labels, media alternatives, error pages, metadata and confirmations. Have a native Arabic editor review terminology, product names, typography and the entire concierge flow before publishing a paired route. Missing translations should be flagged in preview and kept out of the public locale sitemap.

[W3C text direction](https://www.w3.org/International/questions/qa-html-dir) · [W3C inline bidirectional text](https://www.w3.org/International/articles/inline-bidi-markup/) · [next-intl routing](https://next-intl.dev/docs/routing/setup)

## Concierge and consent

Collect only the fields needed for a reply. Propose name, email, reason for enquiry and message, with optional phone, selected product and preferred language. Validate client and server inputs, apply rate limiting and spam controls, protect provider credentials and avoid recording message content in analytics. Confirm delivery before showing success and preserve the user's input after a recoverable failure. Use a configured test recipient until the owner approves the production inbox or CRM and the handling policy. Establish a separate marketing consent and unsubscribe flow for launch notifications.

## SEO and migration

1. Start with the five routes in the live sitemap and the [brand audit](BRAND_AUDIT.md). Cross-check against a WordPress export, Search Console data and analytics if provided. Record indexable pages, canonical URLs, backlinks or entry pages, media links and critical SEO metadata. Review privacy and both form targets with MESME. Check traffic and links to the sample page, sample post and category archive before assigning each route an appropriate retirement response.
2. Map `/index.php/privacy-policy/` and its slashless form to the approved English policy using a permanent redirect. Select the root behaviour during implementation. If `/` redirects to `/en`, keep working legacy fragment targets such as `#diamond-bear`, `#launch`, `#art`, `#origin`, `#contact-form` and `#notify-form` where people land. Browsers handle fragments, so server-side redirects cannot map individual hashes. Test linked sections or a deliberate client-side bridge for each old fragment.
3. Generate locale-specific titles, descriptions, share media, self-canonicals and reciprocal `hreflang` for paired indexable routes. Use `en` and `ar` unless regional targeting is approved. Choose `x-default` only for the agreed neutral or default entry. Include canonical indexable routes in the XML sitemap and publish a production robots file pointing to it.
4. Use brand-approved Organization, WebSite and BreadcrumbList data where appropriate. Add Product schema only where sufficient verified data is visible. Emit offer, availability and review fields only when supported by the site and MESME. Validate the result and check eligibility separately.
5. Protect preview environments from indexing. Before launch, test status codes, redirects, canonicals, alternates and social previews. After an authorized cutover, submit the sitemap and monitor crawling, indexing, redirects, 404s and field performance.

[Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) · [Google localized page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) · [Google Product data guidance](https://developers.google.com/search/docs/appearance/structured-data/product)

## Delivery sequence and acceptance

| Stage | Work and exit checks |
| --- | --- |
| 1. Content and design approval | Confirm master assets, font choices, Arabic reviewer, product facts, claims, service boundaries, social links, concierge ownership and consent copy. Review desktop and mobile compositions in both directions. |
| 2. Preview foundation | Initialize the stack, locale route shells, tokens, metadata, fonts and responsive media. Demonstrate route parity, direct locale navigation, correct document direction and keyboard navigation. |
| 3. Content and integration | Complete product, craftsmanship, scent, bespoke and concierge templates. Validate product prefill, enquiry delivery to a test destination, error recovery, and independent notification consent. |
| 4. Quality and cutover rehearsal | Run type checks, production build and cross-browser E2E tests. Test real iOS and Android, 320–430 px layouts, wide desktop, zoom and keyboard-only use. Run axe and manually verify focus, screen-reader announcements, reading order, RTL interactions, form errors, motion controls and contrast. Rehearse SEO redirects and rollback on preview. |
| 5. Launch and monitoring | Seek launch sign-off and schedule changeover. Verify critical paths in both locales, delivery, Search Console, redirects and observation data. Keep rollback available until the new site is stable. |

For performance, specify responsive sizes and intrinsic dimensions, defer below-fold media, and load hero video after the poster and only where the motion policy permits. Measure home, product detail and concierge in both locales on mobile and desktop. Use field targets at the 75th percentile of LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1 when sufficient field data exists. Track lab baselines in preview and keep lab and field results labelled by source. [Core Web Vitals](https://web.dev/articles/vitals)
