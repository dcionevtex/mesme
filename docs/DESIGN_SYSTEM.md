# MESME design system

## Design direction

Build an editorial experience around the Diamond Bear. Start with a close, precisely framed view of the object against black, then reveal its scale in an automotive interior. Follow with a clearly labelled Gold and Black collection, close views of the jewellery, Origin No. 1, and an invitation to contact a private concierge. Use the Dubai brief to guide the sense of service and presentation. The existing photography supplies the metallic colour and texture. [Source homepage](https://mesmeofficial.com/)

On wide screens, use an asymmetric composition with a stable text column and room for the photography to extend across the grid. On mobile, give each image a deliberate crop and keep headings and core actions readable without a video playing. Use one invitation per section and descriptive action labels such as “Explore the collection” and “Request a private consultation.” Button and page labels here are proposed editorial copy.

## Verified identity

These values come from the public theme stylesheet, logo or form styles and were cross-checked against computed styles where applicable. The site offers no public brand guide in the reviewed pages. [Theme CSS](https://mesmeofficial.com/wp-content/themes/mesme-theme-v1-1/assets/css/main.css?ver=1.1.0) · [Original wordmark](https://mesmeofficial.com/wp-content/uploads/2026/10/MESME-logo-transparent.svg)

| Role | Observed exact value | Use in the redesign |
| --- | --- | --- |
| Background | `#000000` | Base canvas and dark navigation. |
| Primary text | `#E8E8E8` | Body copy, headlines and solid control contrast. |
| Muted text | `#9B9B9B` | Secondary copy on black or a verified solid surface. |
| Divider | `rgba(232, 232, 232, 0.24)` | Decorative rules. Use a stronger stroke for boundaries essential to identify a control. |
| Form surface | `#171717` | Dark field surface, with a visible boundary and focus ring. |
| Wordmark path fill | `#FFFFFF` | Original SVG fill. Retain its 1150 × 410 view box proportions and use the intact mark in both languages. |
| Current form error | `#D00E08` | Existing functional colour. Proposed production error treatment needs a tested light text treatment, visible error copy and a programmatic association with the field. |

Use the unchanged white wordmark on solid black or a controlled dark part of an image. Let the product photography carry gold. An owner-supplied accent specification can be added when approved. Keep the palette and typography roles in shared CSS custom properties consumed by Tailwind. [Asset manifest](ASSET_MANIFEST.md)

### Typography

The theme declares `"DM Sans", "Montserrat", Arial, sans-serif` for the body and form controls. The inspected homepage uses 400 for body and hero H1, 600 for prominent titles and actions, and 300 for desktop navigation. Inline CSS exposes DM Sans 200–700 in six static weights, Montserrat 400 and 700 as fallback, and Manrope 400 and 700. Manrope was present as a font-face declaration and was absent from the sampled theme font stack. The source font declarations use HTTP URLs inside an HTTPS page. Serve approved fonts over HTTPS in the redesign and verify which font files actually render. [Theme CSS](https://mesmeofficial.com/wp-content/themes/mesme-theme-v1-1/assets/css/main.css?ver=1.1.0) · [Homepage](https://mesmeofficial.com/)

| Role | Proposed English range | Arabic treatment |
| --- | --- | --- |
| Display | DM Sans 600, 36–88 px, roughly 1.04–1.14 line height | Match optical size against the photography and allow roughly 1.25–1.45 line height. |
| Section heading | DM Sans 600, 28–52 px | Review natural line breaks and punctuation, especially next to the Latin product name. |
| Body and form controls | DM Sans 400, 16–18 px, roughly 1.5–1.65 line height | Start at 17–19 px with room for dots and diacritics. |
| Labels and navigation | DM Sans 500–600, 14–16 px | Avoid uppercase styling and letter spacing on joined Arabic text. |

Retain DM Sans for Latin text in both locales where appropriate. Test Noto Sans Arabic as a provisional partner if the owner has no Arabic brand typeface. Verify shaping, weights, diacritics, numerals and licensing before adoption. Set type sizes by visual equivalence and readability across scripts.

## Layout and components

| Component | Proposed design and behavior |
| --- | --- |
| Header | Use a small set of primary destinations, the original wordmark, a persistent English/Arabic switch, and one concierge entry. The compact menu restores focus to its trigger and supports Escape. |
| Editorial hero | Use a responsive poster, one strong heading and an above-the-fold route into the collection. Use restrained motion with a visible pause control when appropriate. Maintain contrast through light and dark frames. |
| Collection and product detail | Pair Gold and Black with consistent crops. Use a generous primary image, keyboard-accessible thumbnails and detail views, localized product metadata and an enquiry action that carries product context. |
| Craftsmanship and Origin No. 1 | Give each narrative room for a close-up, a short caption and owner-approved copy. Add alternative text that describes informative details beyond the nearby caption. |
| Bespoke and concierge | Use clear choices for the reason for contact, contextual prefill, a short form and a calm confirmation state. Style focus, error, waiting and successful submission visibly in both scripts. |
| Social and footer | Use a quiet editorial strip only after MESME supplies official profiles and media. Keep policy, language and contact access easy to locate. |

Start with four columns at phone widths, eight at tablet and twelve at wide widths, using logical inline gutters. Keep long text roughly 60–70 characters wide in English and review line breaks separately in Arabic. Reserve aspect ratios for media and set comfortable vertical gaps using a fluid spacing scale. Use native scrolling and modest timing, avoiding scroll hijacking. Use CSS logical properties and keep DOM order meaningful in both directions. [W3C text direction](https://www.w3.org/International/questions/qa-html-dir)

Target WCAG 2.2 AA. Check at least 4.5:1 for normal text, 3:1 for large text and 3:1 for visually necessary control boundaries and icons. Use a clearly visible focus ring and a 44 × 44 CSS px design target for key controls. Verify text on representative frames, device zoom, form messages, reduced motion and keyboard operation. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
