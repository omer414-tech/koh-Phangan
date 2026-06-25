# Photo TODO List

All images below are placeholders. Replace each with a real photo via `next/image`
and set a descriptive `alt` text. Recommended minimum resolutions noted.

## Hero
- [ ] **Aerial beach photo** — full-bleed, landscape, 1920×1080+
  - Used in: `components/sections/Hero.tsx`
  - Style: aerial drone shot of Koh Phangan coast, warm golden light, turquoise water
  - Replace the `<div className="absolute inset-0 bg-[#2E4636]">` block with `<Image src="/images/hero.jpg" ... fill priority />`

## Villas
- [ ] **Villa infinity pool + sea view** — 3:2 landscape, 1400×933+
  - Used in: `components/sections/Villas.tsx` — main large tile
- [ ] **Villa interior / shared living space** — 4:3 landscape, 1200×900+
  - Used in: `components/sections/Villas.tsx` — top-right tile
- [ ] **Sunset pool scene** — 4:3 landscape, 1200×900+
  - Used in: `components/sections/Villas.tsx` — bottom-right tile

## Hosts
- [ ] **יעלי headshot** — portrait, 3:4, 900×1200+, natural light preferred
  - Used in: `components/sections/Hosts.tsx` — first host card
- [ ] **עומר headshot** — portrait, 3:4, 900×1200+
  - Used in: `components/sections/Hosts.tsx` — second host card

## Optional / Enhancement
- [ ] **Yoga / sound-healing moment** — could replace a Villas tile or add to Experience
- [ ] **Jungle / temple / hidden-beach** — good for GoodToKnow or Experience background

## Favicon & OG image
- [ ] **Favicon** — `/public/favicon.ico` + `/public/icon.png` (32×32 and 192×192)
- [ ] **OG image** — `/public/og-image.jpg` (1200×630) — uncomment in `app/layout.tsx`

## How to add images
1. Drop the file in `/public/images/`
2. Replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/filename.jpg" alt="..." fill className="object-cover" />
   ```
3. Ensure the parent has `position: relative` and defined dimensions.
