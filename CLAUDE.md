# POPPiT

## Project: POPPiT Website Redesign

POPPiT is a protein candy brand by Roadies Nutrition LLC. The redesign base file is at `POPPiT-Website-Redesign.jsx`.

## Brand

- **Product:** Protein gummy candy — 10g protein, 5g fiber, 2g sugar, ~80 cal per serving
- **Tagline:** "Savor the Moment"
- **Voice:** Bold, irreverent, candy-forward ("Unhinged", "Absolutely feral", "Help.")
- **Entity:** Roadies Nutrition LLC

## Colors

| Name | Hex |
|------|-----|
| Black (bg) | #0a0a0a |
| White | #f5f5f0 |
| Red (primary CTA) | #a81c1c |
| Deep Red | #7a1414 |
| Gold Light | #f5d44b |
| Gold Mid | #e8b820 |
| Gold Dark | #c49518 |
| Orange | #d4701a |
| Magenta | #ff2d7b |
| Electric Blue | #00d4ff |
| Lime | #b8ff00 |

## Typography

- **Boogaloo / Lilita One** — headings, logo wordmark style
- **Space Mono** — nav, labels, CTAs, badges
- **DM Sans** — body copy, descriptions

## Flavors

1. Blue Raspberry — accent #00d4ff
2. Strawberry — accent #ff2d7b
3. Lemon-Lime — accent #b8ff00

## Page Sections (in order)

1. Top banner (rotating messages)
2. Sticky nav
3. Hero (full-screen with floating gummies)
4. Ticker banner (scrolling marquee)
5. "Meet the Lineup" — per-flavor product sections
6. Variety Pack banner
7. Reviews ("Real Talk")
8. Subscribe & Save
9. "Find Us Near You" (retail placeholder)
10. FAQ (accordion)
11. Community / UGC (placeholder)
12. Email capture
13. Footer

## Assets

- Logo images: `/logo-hero.png` and `/logo-nav.png` (replace placeholders in PoppitLogo component)
- Brand files in `~/Downloads/`: Brand Strategy, Investor Deck, Gremlin Mascot Brief, logo treatments, mockup PNGs

## Key Components

- `PoppitLogo` — renders logo at multiple sizes (hero, nav, footer, product)
- `SectionHeading` — gold gradient headline with red drop shadow
- `FloatingGummy` — animated blob shapes used as decorative elements
- `ProductSection` — alternating layout per flavor with stats grid
- `TickerBanner` — dual scrolling marquee strips

## Next Steps / Ideas

- Swap placeholder logo `<img>` with actual assets
- Add Shopify or cart integration
- Mobile responsive polish
- Add actual UGC / social feed
- Build out individual product detail pages
