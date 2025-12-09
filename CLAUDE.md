# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for Beige Media's Art Basel Miami 2025 event. The site is deployed to AWS EC2 at https://book.beige.app and showcases livestreaming, photography, and videography services.

**Key Tech Stack:**
- Next.js 16.0.7 (App Router)
- React 19.2.0
- TypeScript 5
- Tailwind CSS v4 (new @theme syntax)
- Framer Motion 12 (parallax animations)
- Radix UI + shadcn/ui patterns
- Yarn package manager

## Development Commands

**Local development:**
```bash
yarn dev           # Start dev server at http://localhost:3000
yarn build         # Production build (always test before deployment)
yarn start         # Run production build locally
yarn lint          # Run ESLint
```

**Deployment:**
```bash
./quick-deploy.sh  # Quick deploy for minor updates (recommended for most changes)
./deploy.sh        # Full deploy with version bump prompts (for releases)
./check-status.sh  # Check PM2 status on server
```

**Pre-deployment checklist:**
1. Test locally: `yarn build && yarn start`
2. Check for TypeScript errors: `yarn build` will fail if there are issues
3. Verify animations work (Framer Motion is heavily used)
4. Test mobile responsive behavior

## Architecture

### Page Structure
The entire landing page is a **single-page application** in `src/app/page.tsx`. All sections are imported and rendered sequentially:

```
Navbar → Hero → Stats → Booking → Brands → Influencers →
Creators → FeaturedProjects → Showcase → Testimonials →
CTABanner → FAQ → Waitlist → Footer
```

**Important:** The page uses `"use client"` directive because all components use Framer Motion animations.

### Landing Page Sections (Based on Design)

**1. Navbar**
- Fixed/sticky navigation at top
- Logo on left (Beige branding)
- Navigation links: centered or right-aligned
- CTA button: "Book Now" or "Join Waitlist" in beige color
- Mobile: Hamburger menu with slide-out drawer
- Background: Transparent → solid black on scroll with backdrop blur

**2. Hero Section**
- Large headline (48-72px): Main value proposition
- Subheadline (18-20px): Supporting text with muted color
- Primary CTA button (beige) + secondary link/button
- Background: Animated grid pattern with parallax effect
- Decorative elements: Gradient blurs, grainy texture overlay
- Video or image showcase: Branded content or event footage

**3. Stats Section**
- 3-4 column grid of key metrics
- Large numbers (40-56px) in white
- Labels below (14-16px) in muted gray
- Optional icon or prefix ("+", "%") for each stat
- Background: Continues dark theme with optional subtle border separators

**4. Booking/Services Section**
- Title: "What We Offer" or similar
- Grid of service cards (2-3 columns)
- Each card: Icon, title, description, optional link
- Card styling: Glass effect background, subtle border, hover animations
- CTAs: "Learn More" or "Book Service" buttons

**5. Brands Section**
- Title: "Trusted By" or "Featured At"
- Logo grid or marquee animation
- Logos in grayscale/white with opacity, brighten on hover
- 4-6 logos per row, responsive 2-3 on mobile

**6. Influencers/Creators Section**
- Split layout: Large image on one side, content on other
- Image: High-quality event photography (16:9 or portrait)
- Content: Headline, body copy, optional testimonial quote
- CTA button: "Work With Us" or similar
- Alternating layout: Image left/right for visual rhythm

**7. Featured Projects Gallery**
- 3-column grid of project cards
- Each card: Image thumbnail, project title, client name, tag/category
- Hover: Image scales up, overlay appears with more info
- Modal/lightbox option: Click to view full project details

**8. Showcase Section**
- Multi-image grid or carousel
- Large hero image + smaller supporting images
- Captions or descriptions for context
- Mix of aspect ratios for visual interest
- Background: Can break to full-width/full-bleed images

**9. Testimonials**
- Carousel or grid of testimonial cards
- Each testimonial: Quote, author name, role/company, avatar
- Card styling: Matches global card style (glass effect)
- Optional star ratings or company logos
- Navigation: Dots or arrows for carousel

**10. CTA Banner**
- Full-width section with beige background (`#ECE1CE`)
- Black text (inverted from main theme)
- Large headline + supporting text
- Primary CTA button (black background, white text)
- Optional: Background pattern or decorative elements

**11. FAQ Section**
- Accordion-style Q&A items
- Question: Bold, white text, click to expand
- Answer: Muted gray text, animated expansion
- Dividers between items
- 5-8 common questions about services, booking, pricing

**12. Waitlist/Contact Form**
- Title: "Join the Waitlist" or "Get in Touch"
- Form fields: Name, Email, optional Message/Company
- Submit button: Beige style, full-width or inline
- Success/error states with appropriate messaging
- Optional: Social proof text ("Join 500+ creators")

**13. Footer**
- Multi-column layout (responsive: stacks on mobile)
- Columns: About, Services, Legal, Social Links
- Logo and tagline
- Copyright notice
- Social media icons (Instagram, LinkedIn, etc.)
- Background: Slightly lighter than body (`#0a0a0a` vs `#050505`)

### Component Organization

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Geist fonts + metadata
│   ├── page.tsx          # Main landing page (imports all sections)
│   └── globals.css       # Tailwind v4 config with @theme
├── components/
│   ├── landing/          # All landing page sections (14 components)
│   └── ui/               # Reusable UI primitives (shadcn/ui pattern)
└── lib/
    └── utils.ts          # cn() helper for Tailwind class merging
```

### Design System

**Design Reference:**
- **Current Implementation:** The new Beige Website Redesign from Figma is the primary design reference. See `FIGMA_DESIGN_SPEC.md` for comprehensive specifications.
- **Legacy Reference:** `landingpage.png` in project root was the original design concept (partially implemented, now superseded by Figma redesign).
- **Figma File:** [Beige Website Redesign](https://www.figma.com/design/9AbpkwbOJI9rt4S3V316OE/Beige-Website--Redesign-?node-id=118-2535&m=dev)

**IMPORTANT:** Always refer to `FIGMA_DESIGN_SPEC.md` for up-to-date design specifications, component details, and implementation guidelines.

**Color Palette:**
- Background: `#050505` (near-black, almost pure black)
- Primary accent: `#ECE1CE` (warm beige/cream)
- Text primary: `#FFFFFF` (white)
- Text secondary: `#999999` or `rgba(255,255,255,0.6)` (muted gray)
- Borders/dividers: `rgba(255,255,255,0.1)` (subtle white)
- Selection: beige background with black text

**Typography Scale:**
- Hero headlines: 48-72px, font-weight: 600-700, line-height: 1.1
- Section titles: 32-48px, font-weight: 600, line-height: 1.2
- Subheadings: 20-24px, font-weight: 500-600
- Body text: 16-18px, font-weight: 400, line-height: 1.6
- Small text/captions: 14px, font-weight: 400, opacity: 0.7

**Fonts:**
- Primary: Geist (sans-serif) - used for all UI text
- Mono: Geist Mono (monospace) - used sparingly for technical content
- Font loading: via `next/font/google` with `--font-geist-sans` CSS variable

**Spacing System:**
- Section padding: 80-120px vertical (responsive: 40-60px mobile)
- Container max-width: 1280px with horizontal padding
- Grid gaps: 24-32px between cards
- Component spacing: 16px, 24px, 32px, 48px rhythm

**Button Styles:**
- Primary CTA: Beige background (`#ECE1CE`), black text, rounded corners (6-8px)
- Secondary: Outlined with white border, white text, transparent background
- Hover states: Scale transform (1.05) + opacity changes
- Padding: 12px 24px (medium), 16px 32px (large)

**Card Components:**
- Background: `rgba(255,255,255,0.05)` (subtle glass effect)
- Border: 1px solid `rgba(255,255,255,0.1)`
- Border radius: 12-16px
- Hover: Slight scale + border color brightens to `rgba(255,255,255,0.2)`

**Image Treatment:**
- Aspect ratios: 16:9 for video/showcase, 4:3 for portraits, 1:1 for avatars
- Border radius: 8-12px on all images
- Overlay: Gradient overlays on hero images (black to transparent)
- Lazy loading: Use Next.js Image component with priority for above-fold

**Animation Patterns:**
All landing sections use Framer Motion with:
- `useScroll()` for scroll-triggered animations
- `useTransform()` for parallax effects (hero background, grid patterns)
- `useInView()` for fade-in-on-scroll (threshold: 0.2-0.3, once: true)
- Common transitions: `opacity`, `y`, `scale` with duration 0.4-0.8s
- Stagger children: 0.1-0.15s delay between items in lists/grids
- Easing: `[0.25, 0.1, 0.25, 1]` (ease-out-cubic) for smooth organic feel

### Styling System

**Tailwind CSS v4 specifics:**
- Uses new `@theme` directive in `globals.css` (not traditional config file)
- CSS variables defined with `--color-*` pattern
- Example: `--color-primary: hsl(var(--primary))`

**Component styling:**
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Pattern: `cn("base-classes", conditionalClass && "conditional", className)`
- shadcn/ui components use `class-variance-authority` (CVA) for variants

## Import Patterns

**Always use path aliases:**
```typescript
import { Component } from "@/components/landing/Component"  // ✅ Correct
import { cn } from "@/lib/utils"                           // ✅ Correct
import Component from "../components/Component"             // ❌ Avoid
```

**Client component pattern:**
```typescript
"use client";  // Required for Framer Motion or React hooks

import { motion } from "framer-motion";
```

## Deployment Architecture

**Server details:**
- AWS EC2: `ec2-16-171-226-170.eu-north-1.compute.amazonaws.com`
- Domain: https://book.beige.app
- Process manager: PM2 (`beige-landing` process)
- Port: 3000 (proxied via nginx)
- SSL: Let's Encrypt auto-renewal

**Deployment workflow:**
1. Scripts sync files via rsync (excludes `node_modules`, `.next`, `.git`)
2. Server runs `npm install` and `npm run build`
3. PM2 restarts the `beige-landing` process
4. Check logs: `pm2 logs beige-landing`

**Important files NOT to commit:**
- `beigeapp.pem` (SSH key, already in repo but should stay private)
- `.env.local` (not currently used, but if added keep server-side only)

## Common Tasks

### Implementing sections from the design

When creating sections to match `landingpage.png`:

1. **Extract visual specs from design:**
   - Measure spacing with browser dev tools or reference design
   - Match font sizes exactly (don't approximate)
   - Use exact hex colors: `#050505`, `#ECE1CE`, `#FFFFFF`
   - Copy border radius, padding, and gap values

2. **Create component structure:**
   ```typescript
   "use client";
   import { motion, useInView } from "framer-motion";
   import { useRef } from "react";

   export const SectionName = () => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true, amount: 0.3 });

     return (
       <section ref={ref} className="py-20 px-6 md:py-32">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
             transition={{ duration: 0.6 }}
           >
             {/* Section content */}
           </motion.div>
         </div>
       </section>
     );
   };
   ```

3. **Responsive breakpoints:**
   - Mobile-first approach with Tailwind
   - Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
   - Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
   - Padding: `px-4 md:px-6 lg:px-8`, `py-12 md:py-20 lg:py-32`

4. **Image optimization:**
   ```typescript
   import Image from "next/image";

   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={1200}
     height={800}
     className="rounded-xl"
     priority={aboveFold} // true for hero images
   />
   ```

5. **Add to page sequence:**
   - Import in `src/app/page.tsx`
   - Add to component tree in correct position
   - Test scroll flow and animations

### Modifying animations

All sections use this pattern:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.6 }}
  >
    {/* content */}
  </motion.div>
);
```

### Adding shadcn/ui components

This project uses **shadcn/ui patterns** (not official CLI):
- Components live in `src/components/ui/`
- Use Radix UI primitives + CVA for variants
- Follow `button.tsx` as reference pattern
- Always use `cn()` for className merging

### Troubleshooting deployment

**If site doesn't update:**
```bash
# SSH into server
ssh -i beigeapp.pem ubuntu@ec2-16-171-226-170.eu-north-1.compute.amazonaws.com

# Check PM2 status
pm2 list
pm2 logs beige-landing

# Hard restart if needed
pm2 delete beige-landing
cd ~/beige-app-basel-landing-page
pm2 start npm --name "beige-landing" -- start
pm2 save
```

**If build fails:**
- Check TypeScript errors locally first: `yarn build`
- Verify all imports use `@/` aliases
- Ensure no missing dependencies in package.json
- Check Framer Motion syntax (common issue with server components)

## Codebase Conventions

**File naming:**
- Components: PascalCase (e.g., `Hero.tsx`, `CTABanner.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Config files: lowercase (e.g., `next.config.ts`)

**Component exports:**
```typescript
export const Hero = () => { ... }        // ✅ Named export (landing sections)
export default function Page() { ... }   // ✅ Default export (app routes only)
```

**TypeScript:**
- Strict mode enabled
- Use type inference where possible
- Props interfaces: `interface ComponentProps { ... }`
- Avoid `any` types

**Git workflow:**
- All deployment scripts create commits automatically
- Version bumps update `package.json` (currently v0.1.1)
- Use feature branches for major changes
- Test builds before pushing to main

## Design Implementation Requirements

**Reference Image:** `landingpage.png` in project root is the design source of truth.

**Fidelity Standards:**
- **Pixel-perfect matching:** Spacing, typography, colors must match design exactly
- **No approximations:** Use design specs, not guesswork ("looks about right" is not acceptable)
- **Typography:** Match font sizes, weights, line heights from the design file
- **Colors:** Use exact hex values, no approximations (e.g., `#ECE1CE` not `#EEE2D0`)
- **Spacing:** Follow the 16/24/32/48px rhythm visible in the design
- **Animations:** Smooth, organic feel with proper easing curves
- **Responsive:** Design should work flawlessly from 320px (mobile) to 2560px (large desktop)

**Testing Checklist:**
- [ ] Compare side-by-side with `landingpage.png` at same viewport width
- [ ] Verify all sections present and in correct order
- [ ] Check typography scale matches design (headlines, body, captions)
- [ ] Validate color accuracy with browser dev tools
- [ ] Test hover states on interactive elements
- [ ] Verify animations trigger at correct scroll positions
- [ ] Test on mobile (portrait + landscape), tablet, desktop
- [ ] Check loading states for images and async content
- [ ] Verify form validation and error states
- [ ] Test with slow 3G to ensure performance

**Common Pitfalls:**
- ❌ Using generic gray instead of exact muted color (`#999999`)
- ❌ Inconsistent border radius (some 8px, some 12px - pick one)
- ❌ Wrong container max-width (should be 1280px)
- ❌ Missing hover states or animations on interactive elements
- ❌ Text line-height too tight or too loose
- ❌ Card backgrounds too opaque (should be subtle `rgba(255,255,255,0.05)`)
- ❌ CTA buttons without proper padding or wrong color
- ❌ Mobile breakpoints breaking layout or typography
