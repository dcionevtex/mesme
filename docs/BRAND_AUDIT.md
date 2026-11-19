# MESME brand and website audit

**19 November 2026 · Dubai time**

## What MESME presents today

MESME presents the Diamond Bear as car fragrance jewellery. The homepage features Gold Diamond Bear and Black Diamond Bear cards, a launch notification, bespoke personalisation, early access, a craftsmanship section, and Origin No. 1, its replacement fragrance sachet. The visual identity pairs a condensed MESME wordmark with a black ground, soft white typography, and photography of the jewellery in automotive interiors. Gold and dark metal are prominent in imagery. [Homepage](https://mesmeofficial.com/)

The homepage attributes European jewellery craftsmanship to the object, mentions Dubai luxury as inspiration, and describes the Diamond Bear using 24-karat gold and 61 natural diamonds. Origin No. 1 names sandalwood, vanilla, patchouli and milk. Keep these statements within their existing context until MESME approves the wording, the claim about being first, and how each specification applies to the Gold and Black versions. The available evidence establishes a Dubai-focused design brief. It leaves company location, fulfilment markets and edition availability open. [Diamond Bear](https://mesmeofficial.com/#diamond-bear) · [The Art of Detail](https://mesmeofficial.com/#art) · [Origin No. 1](https://mesmeofficial.com/#origin)

## Public page and content inventory

The homepage and canonical privacy page returned HTTP 200. The homepage runs WordPress with the MESME theme, Rank Math metadata and WPForms. Its public navigation is largely a single-page experience. The inventory covers the reviewed navigation and all five URLs listed in the live sitemap. Routes outside those sources remain unverified. [Sitemap index](https://mesmeofficial.com/index.php/sitemap_index.xml)

| Surface | Current content or behaviour |
| --- | --- |
| [Home](https://mesmeofficial.com/) | Desktop and mobile hero posters with separate autoplay video sources. Hero “More” leads to the enquiry form. |
| [Launch](https://mesmeofficial.com/#launch) and [Notification Form](https://mesmeofficial.com/#notify-form) | Launch announcement and a working anchor to email notification signup. The form shows email, optional phone and a subscription checkbox. |
| [Products](https://mesmeofficial.com/#products) and [Diamond Bear](https://mesmeofficial.com/#diamond-bear) | Gold and Black cards share the generic enquiry destination. The product story appears further down the same page. Individual detail pages were absent from reviewed navigation. |
| [House](https://mesmeofficial.com/#house), [Tailor-Made](https://mesmeofficial.com/#tailor-made), [Early Access](https://mesmeofficial.com/#early-access) | The House call to action returns to the home route. Tailor-Made and Early Access lead to the generic enquiry form. |
| [Craftsmanship](https://mesmeofficial.com/#art), [Essence](https://mesmeofficial.com/#essence), [Origin No. 1](https://mesmeofficial.com/#origin) | Short editorial sections with images and limited product and scent context. |
| [Contact Form](https://mesmeofficial.com/#contact-form) | Name, email, message and privacy acknowledgement. Header links “Inquiry” and “Contact us” share this destination. |
| [Privacy policy](https://mesmeofficial.com/index.php/privacy-policy/) | Separate English policy linked from both forms. The form links redirect to the trailing-slash URL. Preserve access and obtain approved English and Arabic policy copy for the redesign. |
| [Sample Page](https://mesmeofficial.com/index.php/sample-page/) | WordPress sample page. Returned HTTP 200 with an indexable robots meta tag. |
| [Hello world!](https://mesmeofficial.com/index.php/2026/10/27/hello-world/) and [Uncategorized archive](https://mesmeofficial.com/index.php/category/uncategorized/) | Default WordPress post and category archive. Both returned HTTP 200 with indexable robots meta tags. |

The reviewed homepage and privacy page exposed no verified social profile URLs. The privacy policy's contact information should be treated as privacy-specific until MESME supplies a business enquiry channel. The homepage exposes a third form heading in source labelled “Notify Me test.” The rendered accessibility tree and DOM inspection showed two forms. Check whether the test section should be removed when content moves. [Homepage](https://mesmeofficial.com/) · [Privacy policy](https://mesmeofficial.com/index.php/privacy-policy/)

## UX, mobile and accessibility findings

Desktop review used the live browser at roughly 1265 × 720 CSS px. The mobile check used a 390 × 844 viewport override with 375 CSS px available to page content. The review used browser interaction, computed styles, markup and the accessibility tree. Form submission, real devices, screen-reader sessions and a full WCAG conformance audit remain outside this baseline.

| Priority | Evidence | Redesign response |
| --- | --- | --- |
| High | At desktop size, the hero enquiry link started around 889 px from the top. On mobile, it was visible but sat in a roughly 77 × 24 px target and used 12 px text. | Place a clearly named collection or concierge link in the initial content viewport and size core touch targets to at least 44 × 44 CSS px. |
| High | At mobile size, the hero H1 was about 12.6 px and bespoke copy about 10.3 px. The launch text crossed a bright image area with weak visible separation. No horizontal overflow was measured at the checked mobile width. | Use a readable type scale and place text on a controlled scrim or solid surface. Measure contrast for image and video overlays. |
| High | Both desktop and mobile hero video variants played automatically and looped without visible pause controls. The script skips loading when it detects reduced motion or supported data-saving conditions. | Preserve the reduced-motion poster fallback. Give automatically playing motion a visible, keyboard-operable pause mechanism or make playback explicitly user initiated. |
| High | English content is marked `lang="pl-PL"`. Many editorial images, including the jewellery detail and scent imagery, have empty alt attributes. | Set the correct page language and write localized alt text for informative images. Keep genuinely decorative images out of the accessibility tree. |
| Medium | Product CTAs lead to the same generic form. The carousel script contains swipe and keyboard handlers, and offers no visible previous or next buttons. Multiple same-page anchors are marked as the current page. | Give each product a detail URL and preserve the selected product in the enquiry flow. Use an accessible gallery with visible controls and keyboard support. Reserve current-location states for the active item. |
| Medium | Skip link, semantic headings and labelled form controls are present. The mobile menu opened with Enter, set `aria-expanded`, and closed with Escape while focus remained on its toggle. The launch anchor reached the notification form. | Retain and test those patterns in both languages. Add end-to-end checks for focus, validation, status messages and the full keyboard journey. |

Use WCAG 2.2 AA as the target for the redesign. The visual contrast comments above are observations and require measured confirmation on the corresponding surfaces. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

## Search and performance baseline

| Priority | Evidence | Redesign response |
| --- | --- | --- |
| High | The homepage is indexable in its robots meta tag and has a self-canonical. `/robots.txt`, `/sitemap.xml`, `/sitemap_index.xml` and `/wp-sitemap.xml` returned 404. The working `/index.php/sitemap_index.xml` lists page, post and category sitemaps. A 404 at the robots endpoint leaves Google with no crawl rules from that file. | Publish a discoverable robots file and sitemap, verify them in Search Console, and preserve the legacy route and fragment map. |
| High | The linked sitemaps include three indexable WordPress default routes alongside the two brand pages. Their presence in Google's index remains unverified. | Exclude the three routes from the redesigned sitemap. Check traffic and links before deciding whether to return 404 or 410 or redirect a route with a genuine replacement. |
| High | The main title is “Home - Mesme.” No homepage meta description or Open Graph image was present in reviewed HTML. English copy is paired with Polish HTML and Open Graph language declarations. No English and Arabic alternates appeared in reviewed markup. | Add descriptive localized titles, descriptions, canonical URLs, share images and reciprocal alternate-language links. |
| High | Homepage JSON-LD calls the organization “WordPress” and describes the homepage as an article. The inspected homepage graph contains no Product entity. | Use approved MESME Organization and WebSite data and page-specific structured data. Gate product markup on sufficient verified facts. |
| Medium | Responsive posters are in the initial markup, with high fetch priority for the hero image. Supporting imagery is mostly lazy-loaded. The hero script selects a video and starts loading it for playback. Several editorial images lack intrinsic dimensions in page markup. | Keep responsive media, reserve layout space, control video loading, and measure lab and field performance before making comparative claims. |

Search Console, analytics, Core Web Vitals field data, broad index coverage and performance scores remain unverified. [Google robots interpretation](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) · [Google localized page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) · [Core Web Vitals](https://web.dev/articles/vitals)

## Milestone 2 discovery inputs

- Owner-approved identity guide, logo masters, original media and Arabic typography decision.
- Gold and Black edition fact sheets, confirmed materials and gemstone wording, product availability and approved enquiry or purchase model.
- Approved craftsmanship narrative, proof for claims, bespoke options, service areas and a named private concierge inbox or CRM.
- Official social profile URLs, publication rights for social assets, and owner-approved English and Arabic policy and consent copy.
- Read-only sitemap or WordPress export, Search Console data and analytics where available to map legacy URLs and establish a migration baseline.
