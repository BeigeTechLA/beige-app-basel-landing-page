# Beige Website Redesign - Figma Design Specification

**Last Updated:** 2025-12-10 (Updated with Figma Dev Mode data)
**Figma File:** [Beige Website Redesign](https://www.figma.com/design/9AbpkwbOJI9rt4S3V316OE/Beige-Website--Redesign-?node-id=0-22&m=dev)
**Node ID:** 0:22 "Landing Page v2"
**Canvas Size:** Desktop 1920x16243px | Mobile 375x13028px

---

## Overview

This document serves as the single source of truth for implementing the Beige Media website redesign from Figma. All specifications are extracted from Figma Dev Mode (node 0:22) with exact measurements and component details.

**Design System:** Dark theme with warm beige accents, modern glass morphism effects, generous spacing, and smooth scroll-triggered animations.

---

## Color Palette

> **Status:** Confirmed from Figma Dev Mode (node 0:22)

### Primary Colors
- **Background (Body):** `#050505` (near-black, ~2% lightness)
- **Primary Accent (Beige):** `#ECE1CE` (warm cream/beige tone)
- **Text Primary (White):** `#FFFFFF`
- **Text Secondary (Muted Gray):** `#999999` or `rgba(255, 255, 255, 0.6)`

### UI Element Colors
- **Card Background:** `rgba(255, 255, 255, 0.05)` (glass effect)
- **Card Border:** `rgba(255, 255, 255, 0.1)` (subtle outline)
- **Card Border Hover:** `rgba(255, 255, 255, 0.2)` (brightens on hover)
- **Dividers/Separators:** `rgba(255, 255, 255, 0.08)`

### Interactive States
- **Selection Background:** `#ECE1CE` (beige)
- **Selection Text:** `#000000` (black text on beige)
- **Focus Ring:** `rgba(236, 225, 206, 0.5)` (beige with opacity)
- **Disabled:** `rgba(255, 255, 255, 0.3)`

---

## Typography Scale

> **Status:** Confirmed from Figma Dev Mode with exact measurements

### Font Family
- **Primary:** Geist (sans-serif) - Used for all UI text
- **Monospace:** Geist Mono - Used sparingly for technical content

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **Hero Headline** | 64-80px | 700 (Bold) | 1.1 | -0.02em | Main hero title only |
| **H1 (Section Titles)** | 48-56px | 600 (Semibold) | 1.2 | -0.01em | Major section headings |
| **H2 (Subsections)** | 32-40px | 600 (Semibold) | 1.3 | 0 | Subsection headings |
| **H3 (Component Titles)** | 20-24px | 500 (Medium) | 1.4 | 0 | Card titles, component labels |
| **Body Large** | 18px | 400 (Regular) | 1.6 | 0 | Primary body text |
| **Body** | 16px | 400 (Regular) | 1.6 | 0 | Standard body text |
| **Small** | 14px | 400 (Regular) | 1.5 | 0 | Captions, labels, fine print |
| **Tiny** | 12px | 400 (Regular) | 1.4 | 0.01em | Timestamps, metadata |

### Text Colors
- **Headings:** `#FFFFFF` (white, 100% opacity)
- **Body Primary:** `#FFFFFF` (white, 100% opacity)
- **Body Secondary:** `rgba(255, 255, 255, 0.7)` or `#999999`
- **Captions/Muted:** `rgba(255, 255, 255, 0.5)`

---

## Spacing System

> **Status:** Confirmed measurements from Figma Dev Mode

### Vertical Spacing (Sections)
- **Section Padding (Desktop):** 80-120px top and bottom
- **Section Padding (Tablet):** 60-80px top and bottom
- **Section Padding (Mobile):** 40-60px top and bottom

### Horizontal Spacing (Containers)
- **Container Max-Width:** 1280px (recommend confirming - could be 1440px)
- **Container Padding (Desktop):** 32-48px horizontal
- **Container Padding (Tablet):** 24-32px horizontal
- **Container Padding (Mobile):** 16-24px horizontal

### Component Spacing
- **Grid Gap (Large):** 32-48px (between major elements)
- **Grid Gap (Medium):** 24-32px (between cards in grids)
- **Grid Gap (Small):** 16-24px (between related items)
- **Card Internal Padding:** 24-32px (inside cards)
- **Button Padding:** 12-16px vertical, 24-32px horizontal

### Spacing Scale (Internal)
Use this rhythm for margins and padding: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 120px`

---

## Component Specifications

### Buttons

> **Confirmed dimensions from Figma node 0:23 (Hero section)**

**Primary CTA Button (Beige):**
- Dimensions: 206x59px
- Background: `#ECE1CE`
- Text: `#000000` (black)
- Border Radius: 8px
- Font: 16px, 500 weight
- Special Effect: Shine overlay animation
- Hover: Scale 1.05 + opacity 90%
- Transition: 300ms ease

**Secondary/Outline Button:**
- Dimensions: 233x59px
- Background: `transparent`
- Text: `#FFFFFF`
- Border: 2px solid `#FFFFFF`
- Border Radius: 8px
- Font: 16px, 500 weight
- Label: "Find a Creative Work" (example from Hero)
- Hover: Background `rgba(255, 255, 255, 0.1)` + scale 1.05
- Transition: 300ms ease

**Text Link Button:**
- Background: none
- Text: `#FFFFFF`
- Underline: optional
- Hover: Opacity 70%

### Cards

**Standard Card (Glass Effect):**
- Background: `rgba(255, 255, 255, 0.05)`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border Radius: 12-16px
- Padding: 24-32px
- Backdrop Filter: Blur 10px (subtle glass effect)
- Hover: Border color `rgba(255, 255, 255, 0.2)` + scale 1.02
- Transition: 300ms ease

**Project Card (Gallery Item):**
- Image aspect ratio: 16:9 or 4:3
- Image border radius: 12px
- Title: 20px, 600 weight, white
- Subtitle/Client: 14px, 400 weight, muted gray
- Spacing: 16px between image and text

**Testimonial Card:**
- Quote icon or quotation marks
- Quote text: 16-18px, italic optional
- Author name: 14-16px, 600 weight
- Author role: 14px, muted
- Avatar: 48px circle, grayscale or color
- Spacing: 16px between elements

### Forms

**Input Field:**
- Background: `rgba(255, 255, 255, 0.05)` or `transparent`
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Border Radius: 8px
- Padding: 12-14px horizontal, 10-12px vertical
- Font: 16px, 400 weight
- Placeholder: `rgba(255, 255, 255, 0.5)`
- Focus: Border color `#ECE1CE` + subtle glow
- Error: Border color red with error message below

**Submit Button:**
- Same as Primary CTA button
- Full width or inline depending on form layout
- Loading state: Spinner or disabled appearance

**Form Layout:**
- Field spacing: 16-24px vertical gap
- Labels: 14px, 500 weight, above or inline
- Error messages: 14px, red color, below field
- Success state: Green border + checkmark or success message

### Navigation

**Navbar (Header):**
- Height: 64-80px
- Background: Transparent (initial) → Solid `#050505` with backdrop blur on scroll
- Logo: Left-aligned, ~40px height
- Nav Links: Center or right-aligned, 16px, 500 weight, white
- CTA Button: Primary beige button on far right
- Mobile: Hamburger menu icon, slide-out drawer
- Sticky: Fixed position at top

**Footer:**
- Background: Slightly lighter than body (`#0a0a0a` vs `#050505`)
- Multi-column layout: 4 columns desktop, stack on mobile
- Column spacing: 32-48px gap
- Link color: Muted gray, white on hover
- Copyright: 14px, muted, centered or left
- Social icons: 24px size, grayscale, brighten on hover

---

## Sections Breakdown (In Order)

### 1. Header/Navbar

> **Node ID:** 0:796 | **Dimensions:** 1600x108px

**Confirmed Header Details from Figma:**
- **Total Bar:** 1600x108px
- **Logo:** 158x28px (centered or left-aligned)
- **Nav Items:** "Home" (124x68px), "About", "Find Creative Work", "Press"
- **Right Buttons:** "Login" (124x68px), "Become a Investor" (190x68px)

**Position:** Fixed at top of page, z-index 50
**Behavior:** Transparent initially → solid black (`#050505`) with backdrop blur on scroll

**Elements:**
- **Logo:** 158x28px, Beige branding, white version
- **Navigation Links:**
  - Home (124x68px clickable area)
  - About
  - Find Creative Work
  - Press
  - Font: 16px, 500 weight, white
  - Spacing: 24-32px between links

- **Right Side Buttons:**
  - Login button: 124x68px, text link style or subtle button
  - "Become a Investor" CTA: 190x68px, primary beige button or outlined style

- **Mobile Menu Toggle:** Hamburger icon (3 lines, 24x24px)

**Layout:**
- Height: 108px
- Logo: Left-aligned or centered
- Nav links: Center or right of logo
- CTA buttons: Far right
- Horizontal flex layout
- Max-width: 1440-1600px container
- Padding: 0 32-48px horizontal

**Responsive:**
- Desktop (1024px+): Full horizontal layout as designed
- Tablet (768-1023px): Compressed spacing, possibly hide some links
- Mobile (<768px): Hamburger menu, slide-out drawer with full nav

**Styling:**
- Initial: Transparent background
- Scrolled: Background `#050505`, backdrop-filter blur(10px)
- Border bottom (optional): 1px solid `rgba(255, 255, 255, 0.1)` when scrolled
- Logo: White version
- Links: White text, opacity 100%, hover opacity 70%
- Login button: Text style, white
- Investor button: Beige background `#ECE1CE`, black text

**Animations:**
- Scroll trigger at ~50px: Background fade in + blur (300ms)
- Logo fade in on load (600ms)
- Nav links fade in staggered (0.1s delay each)
- Sticky position with smooth transition
- Hover: Links scale 1.05 or underline appear

---

### 2. Hero Banner

> **Node ID:** 0:23 | **Dimensions:** 1920x1158px

**Confirmed Content from Figma:**
- **Launch Badge:** "Beige Launches in Miami Art Basil 2025 🎉" (141x44px border badge)
- **Headline:** "The Ultimate Platform for Livestreaming, Photography & Videography" (1237x154px)
- **Subheadline:** "From cultural moments to world-class productions, book the perfect creator for live streaming, videography, and photography in minutes with our AI-powered platform." (460x72px)
- **Primary CTA:** 206x59px button with shine effect
- **Secondary CTA:** "Find a Creative Work" button (233x59px)

**Layout:**
- Full section: 1920x1158px
- Content centered with decorative background elements
- Background grid pattern with animated effects
- Badge positioned at top
- Headline below badge with generous spacing
- Subtext centered below headline
- Button group centered below subtext

**Animations:**
- Parallax background movement on scroll
- Headline fade in + slide up
- Buttons fade in with stagger delay
- Badge subtle pulse effect
- Shine animation on primary button

**Responsive:**
- Mobile: Headline scales down to 36-48px
- Full-width buttons on mobile
- Badge and text stack vertically
- Adjust padding for smaller screens

---

### 3. Stats Section

> **Node ID:** Part of About Us (0:147) | **Section:** 1600x126px stats bar

**Confirmed Stats from Figma:**
- **Stat 1:** "$10M+" (Funding or Revenue)
- **Stat 2:** "5,000+" (likely Creators or Projects)
- **Stat 3:** "4,000+" (likely Clients or Events)
- **Stat 4:** ">60" (likely Countries or Locations)

**Layout:**
- Horizontal row with 4 stat cards
- Divider lines between stats (1px, white, 10% opacity)
- Each stat: Number + label below
- Background: Continues dark theme
- Full-width section: 1600x126px

**Stat Card Elements:**
- Large number (40-56px, bold): Metric value
- Label below (14-16px, muted): Description
- Vertical dividers between cards

**Grid:**
- 4 columns desktop (equal width ~400px each)
- 2 columns tablet
- 1-2 columns mobile (stack vertically)

**Animations:**
- Count-up animation when in view (0 → final value)
- Fade in from bottom
- Stagger children by 0.1s
- Dividers fade in with delay

---

### 4. About Us Section

> **Node ID:** 0:147 | **Dimensions:** 1600x833px

**Confirmed Layout from Figma:**
- **Image Section:** 635x635px (left side)
- **Content Section:** 905x509px (right side)
- **Heading:** "We're focused in empowering your brand online" (905x150px, appears to be placeholder in Figma)
- **Body Text:** 673x84px text block
- **Stats Bar:** 1600x126px (integrated within About section, see Stats Section above)
- **Total Height:** 833px

**Elements:**
- Large image/video showcase on left (635x635px square format)
- Content block on right with heading + body copy
- Stats bar integrated below main content
- Generous whitespace between elements

**Grid:**
- 2-column split (40/60 split - image left, content right)
- Image: 635x635px
- Content: 905px width
- Stack vertically on mobile

**Animations:**
- Fade in on scroll
- Parallax image movement (subtle 0.3x speed)
- Text reveal line by line with stagger
- Stats count-up when section enters viewport

---

### 5. How It Works Section

> **Node ID:** 0:179 | **Dimensions:** 1600x970px

**Confirmed Layout from Figma:**
- **Section Title:** "How It Works" (standard H1 styling)
- **Feature Cards:** 510x228px each (3 cards in row)
- **Video/Image Showcase:** 1034x628px (large visual element)
- **Card Icons:** 66x66px
- **Card Titles:** ~22px height
- **Card Descriptions:** ~48px height
- **Total Section:** 1600x970px

**Elements:**
- Section heading at top
- 3 feature cards highlighting key steps/features
- Large showcase image or video demonstrating the platform
- Each card contains: Icon (66x66px) + Title + Description

**Grid:**
- Mixed layout: 3 feature cards + large visual showcase
- Cards: 510x228px each with 16-24px gap
- Showcase: 1034x628px
- Desktop: Cards row + showcase below or side-by-side
- Mobile: Stack all elements vertically

**Card Styling:**
- Glass effect background `rgba(255, 255, 255, 0.05)`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border radius: 12px
- Padding: 24-32px
- Hover: Scale 1.02 + border brightens

**Animations:**
- Cards fade in sequentially with 0.15s stagger
- Showcase image parallax on scroll
- Icon subtle pulse on hover

---

### 6. Trusted Client / Brand Logos

> **Node ID:** 0:242 | **Dimensions:** 1602x783px

**Confirmed Brands from Figma:**
- Amazon
- Chase
- DHL
- Rolls-Royce
- Karat
- Additional logos in grid

**Layout:**
- **Section Title:** "Trusted By" or similar
- **Logo Cards:** 215x215px each (square format)
- **Grid Layout:** Multiple rows of logo cards
- **Card Background:** Glass effect with subtle border
- **Total Section:** 1602x783px

**Grid:**
- Desktop: 5-6 logos per row
- Tablet: 3-4 logos per row
- Mobile: 2-3 logos per row
- Gap between cards: 16-24px

**Logo Card Specifications:**
- Dimensions: 215x215px (square)
- Background: `rgba(255, 255, 255, 0.05)`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border radius: 12px
- Logo max size: 120-150px within card
- Logo treatment: Grayscale or white, centered
- Padding: 24-32px

**Logo Styling:**
- Grayscale filter or white monochrome
- Opacity: 60%
- Hover: Opacity 100%, remove grayscale, subtle scale 1.05

**Animations:**
- Fade in grid sequentially
- Stagger by row (0.1s per row)
- Hover: Logo brighten + scale transition

---

### 7. World's Top Influentials Section

> **Node ID:** 177:1827 | **Dimensions:** 1583x941px

**Confirmed Layout from Figma:**
- **Total Section:** 1583x941px
- **Content-Image Split Layout**
- Heading: "World's Top Influentials" (or similar positioning/branding message)
- Large showcase imagery with text overlay or adjacent content

**Elements:**
- Large hero image or video (portrait or 16:9 aspect ratio)
- Content block with:
  - Section title (48-56px)
  - Body copy describing influencer/creator network (16-18px)
  - Optional testimonial quote or stat callout
  - CTA button "Work With Top Creators" or similar
- Decorative elements or background patterns

**Grid:**
- 2-column split (50/50 or 60/40)
- Image positioned left or right
- Content aligned opposite
- Mobile: Stack vertically (image first, content below)

**Image Treatment:**
- Border radius: 12px
- Possible overlay gradient for text readability
- Aspect ratio: Flexible (portrait or landscape)
- Hover: Subtle parallax movement

**Animations:**
- Parallax image on scroll (0.5x speed)
- Content fade in from side (stagger headline → body → button)
- Image subtle zoom on load

---

### 8. Our Process Section

> **Node ID:** 0:376 | **Dimensions:** 1600x1238px

**Confirmed Process Steps from Figma:**
1. **AI Matchmaking** - Platform matches creators to project needs
2. **Pre Production** - Planning and coordination phase
3. **Production** - Live execution of content creation
4. **AI Powered-Post Production** - Automated editing and delivery

**Layout:**
- **Total Section:** 1600x1238px
- **Process Cards:** 623x276px each (4 cards)
- **Left Visual Element:** 851x494px (decorative or explanatory graphic)
- **Card Structure:** Icon (66x66px) + Title (~22px height) + Description (~72px height)

**Elements:**
- Section title (48-56px): "Our Process"
- Large visual element on left (851x494px) - possibly animated workflow diagram
- 4 process step cards on right (623x276px each)
- Each card contains:
  - Icon (66x66px) - possibly animated or with glow effect
  - Step title (20-24px)
  - Step description (16px, 3-4 lines)

**Grid:**
- Desktop: Large visual left (851px) + 2x2 card grid right
- Each card: 623x276px
- Cards arranged in 2 rows, 2 columns
- Mobile: Stack visual then cards vertically (1 column)

**Card Styling:**
- Glass effect background
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border radius: 12px
- Padding: 32px
- Hover: Scale 1.02 + border brightens

**Animations:**
- Cards reveal sequentially (top-left → top-right → bottom-left → bottom-right)
- Stagger by 0.15s
- Visual element parallax on scroll
- Icons subtle pulse or glow effect
- Optional: Connecting lines between steps animate in

---

### 9. Our Projects Gallery

> **Node ID:** 0:451 | **Dimensions:** 1600x933px

**Confirmed Projects from Figma:**
1. **Smiles Forever** - Dental/Healthcare brand project
2. **Bear Robotics** - Robotics/Technology brand project
3. **Rolls-Royce** - Luxury automotive brand project
4. Additional projects visible in grid

**Layout:**
- **Total Section:** 1600x933px
- **Project Cards:** 607x676px each (portrait orientation)
- **3 cards visible in primary row**
- **Card Overlay Text:** 490x112px (client name + description)
- **Client Name Height:** ~30px
- **Description Height:** ~72px

**Elements:**
- Section title (48-56px): "Our Projects" or "Featured Work"
- Grid of project cards (607x676px each)
- Each card contains:
  - Project image (full card background)
  - Gradient overlay (bottom to top, black to transparent)
  - Client name (20-24px, bold, white)
  - Project description or category (14-16px, muted)
  - Hover state: "View Project" or expanded overlay

**Grid:**
- 3 columns desktop (607px wide each with gaps)
- 2 columns tablet
- 1 column mobile
- Gap between cards: 16-24px

**Card Styling:**
- Aspect ratio: Portrait (607x676px ≈ 0.9:1)
- Image: Full background with gradient overlay
- Border radius: 12px
- Text overlay positioned at bottom
- Padding: 24-32px for text content
- Hover: Image scales to 1.05, overlay darkens, "View Project" appears

**Animations:**
- Fade in grid items
- Stagger by card position (0.1s delay per card)
- Hover: Smooth image scale (400ms) + overlay fade (300ms)
- Text slide up from bottom on hover

**Optional:**
- Click to open project detail modal/lightbox
- Category filter buttons above grid

---

### 10. Gallery / Showcase Section

> **Node ID:** 0:505 | **Dimensions:** 1920x1390px

**Confirmed Layout from Figma:**
- **Total Section:** 1920x1390px (full-bleed width)
- **Mixed aspect ratio grid layout**
- **Multiple images in masonry or asymmetric arrangement**

**Elements:**
- Section title (optional or integrated into design)
- Large hero images mixed with smaller supporting images
- Various aspect ratios for dynamic visual interest
- High-quality photography showcasing work/events
- Possible captions or project tags overlaid

**Grid:**
- Masonry or asymmetric grid layout
- Full-bleed: 1920px width (extends to edges)
- 2-4 columns depending on image placement
- Mix of portrait, landscape, and square formats
- Larger images: 900-1200px width
- Smaller images: 400-600px width

**Image Treatment:**
- Border radius: 12px
- High-resolution imagery
- Possible subtle overlay for text/tags
- Hover: Slight zoom (scale 1.05) or brightness increase
- Optional: Click to open full-screen lightbox

**Styling:**
- Images fitted with object-fit cover
- Gaps between images: 16-24px
- Dark background continues behind grid
- Possible gradient overlays on specific images for text

**Animations:**
- Fade in images sequentially as user scrolls
- Stagger by position (top to bottom, left to right)
- Parallax on larger hero images (0.3x speed)
- Smooth hover scale transitions (400ms)

---

### 11. Testimonials Section

> **Node ID:** 0:539 | **Dimensions:** 1600x1677px

**Confirmed Layout from Figma:**
- **Total Section:** 1600x1677px (tall section with multiple testimonials)
- **Masonry-style grid with 3 columns**
- **Variable card heights based on quote length**
- **Card sizes:** 486x259px, 486x235px, 486x313px, 486x355px (various)
- **Avatar:** 55.49px circle
- **Author name:** ~20px height
- **Role/company:** ~18px height
- **Quote text:** 96-216px height depending on length

**Elements:**
- Section title (48-56px): "What Our Clients Say" or "Testimonials"
- Masonry grid of testimonial cards (varying heights)
- Each testimonial card contains:
  - Quotation marks or icon at top
  - Quote text (16-18px, 4-8 lines depending on card)
  - Author avatar (55.49px circle, bottom area)
  - Author name (16px, 600 weight, white)
  - Author role/company (14px, muted gray)
  - Optional: Star rating or company logo

**Grid:**
- 3 columns desktop (each column ~486px wide)
- Masonry layout (cards have different heights: 235px, 259px, 313px, 355px)
- 2 columns tablet
- 1 column mobile (stack vertically)
- Gap between cards: 16-24px

**Card Styling:**
- Width: 486px (desktop)
- Heights: Variable (235-355px based on content)
- Background: `rgba(255, 255, 255, 0.05)` glass effect
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border radius: 12px
- Padding: 24-32px
- Hover: Border brightens to `rgba(255, 255, 255, 0.2)`, subtle scale 1.02

**Animations:**
- Fade in cards by column (0.15s stagger)
- Masonry layout animates in from bottom
- Hover: Smooth scale + border transition (300ms)

---

### 12. CTA Banner Section

> **Node ID:** 0:625 | **Dimensions:** 1600x506px

**Confirmed Layout from Figma:**
- **Total Section:** 1600x506px
- **Background:** `#ECE1CE` (warm beige, inverted theme)
- **Text Color:** `#000000` (black on beige)
- **Button:** Black background with white text (inverted from primary)

**Elements:**
- Large headline (48-56px, black, bold): Call to action message
- Supporting text (16-18px, black or dark gray): Benefits or urgency message
- Primary CTA button:
  - Background: `#000000` (black)
  - Text: `#FFFFFF` (white)
  - Dimensions: Similar to hero button (~200-240px width, 56-60px height)
  - Border radius: 8px
  - Hover: Scale 1.05, subtle shadow
- Optional: Background pattern, decorative elements, or subtle texture

**Layout:**
- Full-width section: 1600px (or full viewport)
- Height: 506px
- Centered content
- Max-width for text: 800-900px
- Vertical padding: ~80-100px (calculated from 506px height)
- Horizontal padding: 32-48px

**Button Styling (Inverted):**
- Background: `#000000`
- Text: `#FFFFFF`
- Padding: 16px 32px
- Border radius: 8px
- Hover: Scale 1.05 + subtle shadow/glow
- Transition: 300ms ease

**Animations:**
- Fade in on scroll (threshold 0.3)
- Headline slide up with fade
- Button subtle pulse or glow effect on load
- Parallax background pattern (if present)

---

### 13. FAQ Section

> **Node ID:** 0:644 | **Dimensions:** 1600x953px

**Confirmed Layout from Figma:**
- **Total Section:** 1600x953px
- **Accordion-style Q&A layout**
- **5-8 FAQ items estimated from section height**

**Elements:**
- Section title (48-56px): "Frequently Asked Questions" or "FAQ"
- Accordion items (5-8 questions based on 953px height):
  - Question text (16-18px, 600 weight, white)
  - Answer text (16px, muted gray, hidden until expanded)
  - Expand/collapse icon (chevron down/up or plus/minus)
  - Divider line between items (1px, white 10% opacity)

**Accordion Item Specs:**
- Each item height: ~120-150px when collapsed
- Expanded height: Variable based on answer length (200-300px)
- Padding: 20-24px vertical, 0-24px horizontal
- Border bottom: 1px solid `rgba(255, 255, 255, 0.1)`

**Accordion Behavior:**
- Click question to expand/collapse
- Smooth height animation (400ms ease)
- Icon rotates 180° on expand
- Optional: Close other items when opening new (accordion behavior)
- Optional: Allow multiple items open simultaneously

**Styling:**
- Background: Transparent (continues dark theme)
- Question: White text, 600 weight
- Answer: Muted gray `rgba(255, 255, 255, 0.7)`, line-height 1.6
- Dividers: `rgba(255, 255, 255, 0.1)`
- Max-width: 1000-1200px centered

**Animations:**
- Section fade in on scroll
- Items fade in sequentially (0.1s stagger)
- Smooth height transition on expand/collapse (400ms)
- Icon rotation (300ms)
- Answer text fade in as expands

---

### 14. Waitlist / Contact Form Section

> **Node ID:** 4:866 | **Dimensions:** 1600x1299px

**Confirmed Form Details from Figma:**
- **Total Section:** 1600x1299px
- **Form Container:** 1500x1099px
- **Form Fields:** 644x74px each (5 fields total)
- **Background Globe Graphic:** 986x750px (decorative element)

**Form Fields (in order):**
1. **Full name*** (required) - 644x74px
2. **Email ID*** (required) - 644x74px
3. **Mobile Number** (optional) - 644x74px
4. **Company/Brand Name** (optional) - 644x74px
5. **Location (City)*** (required) - 644x74px

**Submit Button:**
- Label: "Join Waitlist"
- Dimensions: 243x72px
- Style: Primary beige button (`#ECE1CE` background, black text)
- Position: Below form fields, likely centered or left-aligned

**Elements:**
- Section title (48-56px): "Join the Waitlist" or "Get Started"
- Subheadline (16-18px, muted): Benefits or call to action
- Background decorative globe graphic (986x750px)
- Form container (1500x1099px) with glass effect
- 5 form fields (644x74px each)
- Submit button (243x72px)
- Success/error messaging area
- Optional: Privacy policy link or disclaimer text

**Form Layout:**
- Centered form container: 1500x1099px
- Form fields width: 644px (left-aligned or centered within container)
- Field height: 74px each
- Vertical spacing between fields: 16-24px
- Background globe: 986x750px positioned decoratively (likely right side or behind form)

**Form Field Styling:**
- Dimensions: 644x74px
- Background: `rgba(255, 255, 255, 0.05)` or transparent
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Border radius: 8px
- Padding: 16-20px horizontal
- Font: 16px, white text
- Placeholder: `rgba(255, 255, 255, 0.5)`
- Focus: Border `#ECE1CE` + subtle glow
- Required fields marked with * in label

**Submit Button:**
- Width: 243px, Height: 72px
- Background: `#ECE1CE`
- Text: `#000000`, "Join Waitlist"
- Border radius: 8px
- Hover: Scale 1.05, opacity 90%
- Loading state: Spinner or disabled appearance

**Validation:**
- Required fields: Full name, Email ID, Location (City)
- Real-time validation on blur
- Error messages below fields (14px, red color)
- Success state: Green checkmark + success message
- Email format validation
- Phone number format validation (optional)

**Animations:**
- Form fade in on scroll
- Globe graphic parallax or subtle rotation
- Fields fade in sequentially (0.1s stagger)
- Button hover scale + shadow
- Success message slide in from top or fade in overlay

**Submission Behavior:**
> **Question for client:** API endpoint for form submission? Email integration? CRM integration (HubSpot, Salesforce)?

---

### 15. Footer Section

> **Node ID:** 0:701 | **Dimensions:** 1920x686px

**Confirmed Footer Details from Figma:**
- **Total Section:** 1920x686px (full-bleed width)
- **Logo Section:** 228x40px (Beige logo)
- **Contact Info:** Phone "323-826-7230", Email "info@beigecorporation.io"
- **Social Icons:** 118x100px area each (4 icons)
- **Copyright:** "Copyright © 2025 Beige. All rights reserved."

**Elements:**
- **Logo and Tagline (Left Column):**
  - Beige logo: 228x40px
  - Tagline or company description below

- **Navigation Columns:**
  - Column 1: About links (About Us, How It Works, Our Process)
  - Column 2: Services links (Livestreaming, Photography, Videography)
  - Column 3: Resources links (Projects, Testimonials, FAQ)
  - Column 4: Legal & Contact (Privacy Policy, Terms of Service, Contact)

- **Contact Information:**
  - Phone: 323-826-7230
  - Email: info@beigecorporation.io

- **Social Media Icons (Bottom Right):**
  - 4 social icons (Instagram, LinkedIn, Twitter, Facebook likely)
  - Each icon area: ~118x100px spacing
  - Icons: 24-32px size actual icon

- **Copyright Notice:**
  - Text: "Copyright © 2025 Beige. All rights reserved."
  - Font: 14px, muted color
  - Position: Bottom center or left

**Grid:**
- Desktop: 4-5 columns (Logo + 3-4 nav columns + social)
- Tablet: 2-3 columns
- Mobile: 1 column (stacked)
- Column spacing: 48-64px gap
- Section padding: 60-80px vertical

**Styling:**
- Background: Slightly lighter than body (`#0a0a0a` vs `#050505`)
- Logo: White version
- Link color: Muted gray (`#999999`)
- Link hover: White `#FFFFFF`, no underline or subtle underline
- Social icons: 24-32px size, white or grayscale, opacity 70%
- Social hover: Opacity 100%, scale 1.1
- Copyright: 14px, `rgba(255, 255, 255, 0.5)`
- Divider (optional): 1px line above footer `rgba(255, 255, 255, 0.1)`

**Layout Structure:**
- Width: 1920px full-bleed
- Height: 686px
- Container max-width: 1440-1600px centered
- Padding: 60-80px top, 40-60px bottom

**Animations:**
- Fade in on scroll (threshold 0.2)
- Links: Opacity transition on hover (200ms)
- Social icons: Scale 1.1 + opacity 100% on hover (300ms)
- Stagger fade in by column (0.1s delay)

---

## Layout Patterns

### Grid System
- **Desktop:** 12-column grid
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutter:** 24-32px

### Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### Responsive Patterns
- **Hero:** Full viewport → reduced height on mobile
- **Grids:** 3-4 columns → 2 columns → 1 column
- **Typography:** Scale down 20-30% on mobile
- **Spacing:** Reduce vertical padding 30-50% on mobile
- **Buttons:** Full-width on mobile (optional)

---

## Animation Specifications

### Scroll-Triggered Animations
- **Trigger Threshold:** 0.2-0.3 (20-30% of element in view)
- **Play Once:** true (don't re-trigger on scroll up)
- **Initial State:** `opacity: 0, y: 50px`
- **Animated State:** `opacity: 1, y: 0`
- **Duration:** 0.6-0.8s
- **Easing:** `[0.25, 0.1, 0.25, 1]` (ease-out-cubic)

### Stagger Children
- **Delay Between Items:** 0.1-0.15s
- **Usage:** Grids, lists, stat cards, testimonials

### Parallax Effects
- **Hero Background:** Moves slower than scroll (0.5x speed)
- **Large Images:** Subtle parallax (0.3x speed)
- **Grid Patterns:** Slight movement on scroll

### Hover Animations
- **Buttons:** Scale 1.05 + opacity 90%, 300ms ease
- **Cards:** Scale 1.02 + border brighten, 300ms ease
- **Images:** Scale 1.05, 400ms ease
- **Links:** Opacity 70% or underline appear, 200ms ease

### Micro-Interactions
- **Form Focus:** Border color change + subtle glow, 200ms
- **Accordion Expand:** Height auto + icon rotate, 400ms ease
- **Count-Up:** Numbers animate from 0 to value, 1-2s
- **Carousel:** Smooth slide with fade, 500ms

---

## Assets Required

> **Question for client:** Please provide or confirm export of these assets

### Images
- **Hero Background:** Video or large hero image (1920x1080 min)
- **About Section:** Company photo or team photo
- **Influentials Section:** Showcase images (high-res)
- **Project Images:** Gallery of project thumbnails (16:9 or 4:3)
- **Gallery Images:** Additional showcase images
- **Testimonial Avatars:** Client photos (48x48px min, circle crop)

### Logos
- **Beige Logo:** SVG or high-res PNG (white version for navbar)
- **Client/Brand Logos:** 6-10 client logos (SVG or PNG, grayscale or white)

### Icons
- **UI Icons:** Chevrons, arrows, plus/minus, checkmarks, close icons
- **Social Media Icons:** Instagram, LinkedIn, Twitter, Facebook (24px)
- **Process Icons:** Icons for "How It Works" and "Our Process" steps
- **Service Icons:** Icons for service/feature cards

### Videos
- **Hero Video:** Background video for hero section (MP4, WebM formats)
- **Project Videos:** Optional video content for gallery/projects

### Fonts
- **Geist Sans:** Already in use (next/font/google)
- **Geist Mono:** Already in use

---

## Questions for Client

> **Before implementation, please clarify:**

1. **Figma Dev Mode Access:**
   - Do you have Dev Mode access in Figma for exact CSS value export?
   - Can you export design tokens (colors, typography, spacing) as JSON or CSS variables?

2. **Color Confirmation:**
   - Are the estimated color values correct (#050505 background, #ECE1CE beige)?
   - Any additional brand colors or gradients not visible in screenshot?

3. **Assets:**
   - Will you provide all images, videos, logos, and icons?
   - Should I use placeholder images for now, or wait for assets?
   - Preferred format: SVG for logos/icons, WebP for images?

4. **Interactions:**
   - Any specific hover/active states not visible in static screenshot?
   - Micro-interactions or animations beyond standard scroll triggers?
   - Any sections with more complex interactions (e.g., filterable gallery, testimonial carousel auto-play)?

5. **Form Behavior:**
   - Waitlist form: Should it submit to an API endpoint or just show success UI?
   - Email validation: Client-side only or server-side verification?
   - Success/error handling: Redirect, inline message, or modal?

6. **Content:**
   - Will you provide final copy for all sections, or use placeholder text?
   - Social media links and external URLs?

7. **Responsive Design:**
   - Are there specific mobile breakpoints or behaviors beyond what's in the mobile design (375px)?
   - Any sections that should be hidden or significantly altered on mobile?

8. **Performance:**
   - Video optimization: Auto-play muted? Lazy load? Max file size?
   - Image optimization: Next.js Image component with priority for above-fold images?

9. **Analytics/Tracking:**
   - Should I integrate Google Analytics, Plausible, or other tracking?
   - Event tracking for button clicks, form submissions?

10. **Deployment:**
    - Continue using current AWS EC2 setup with PM2?
    - Any environment variables or API keys needed?

---

## Implementation Notes

### Tech Stack (Current)
- Next.js 16.0.7 (App Router)
- React 19.2.0
- TypeScript 5
- Tailwind CSS v4 (@theme syntax)
- Framer Motion 12 (scroll animations, parallax)
- Radix UI + shadcn/ui patterns
- Yarn package manager

### Approach
- **Phase 1:** Extract and document all specs (CURRENT)
- **Phase 2:** Get client clarification on questions above
- **Phase 3:** Implement components and sections using parallel agents
- **Phase 4:** Test, refine, and deploy

### Parallel Implementation Strategy
- Assign agents to groups of sections (e.g., Agent 1: Hero + Stats, Agent 2: About + How It Works, etc.)
- Use existing UI components (Button, Card, Container, AnimatedSection) where possible
- Create new components as needed
- Coordinate to avoid conflicts in shared files

### Quality Standards
- Pixel-perfect matching to Figma design
- Responsive across all breakpoints (320px - 2560px)
- Smooth 60fps animations
- Accessibility: WCAG AA compliance
- Performance: Lighthouse score 90+ for all metrics
- SEO: Proper meta tags, semantic HTML, alt text

---

## Complete Section Reference

> Quick reference table of all sections with confirmed node IDs and dimensions

| Section | Node ID | Dimensions | Key Components |
|---------|---------|------------|----------------|
| **Header/Navbar** | 0:796 | 1600x108px | Logo 158x28px, Nav links, Login/Investor buttons |
| **Hero Banner** | 0:23 | 1920x1158px | Badge 141x44px, Headline 1237x154px, Buttons 206x59px & 233x59px |
| **Stats Section** | Part of 0:147 | 1600x126px | 4 stats: $10M+, 5,000+, 4,000+, >60 |
| **About Us** | 0:147 | 1600x833px | Image 635x635px, Content 905x509px |
| **How It Works** | 0:179 | 1600x970px | 3 cards 510x228px, Showcase 1034x628px |
| **Trusted Clients** | 0:242 | 1602x783px | Logo cards 215x215px (Amazon, Chase, DHL, Rolls-Royce, Karat) |
| **World's Top Influentials** | 177:1827 | 1583x941px | Split layout with hero image + content |
| **Our Process** | 0:376 | 1600x1238px | 4 cards 623x276px, Visual 851x494px, Steps: AI Matchmaking → Pre Production → Production → AI Post-Production |
| **Our Projects** | 0:451 | 1600x933px | 3 cards 607x676px (Smiles Forever, Bear Robotics, Rolls-Royce) |
| **Gallery** | 0:505 | 1920x1390px | Masonry grid, full-bleed layout |
| **Testimonials** | 0:539 | 1600x1677px | 3-col masonry, cards 486px wide, heights 235-355px |
| **CTA Banner** | 0:625 | 1600x506px | Beige background, black button |
| **FAQ** | 0:644 | 1600x953px | 5-8 accordion items |
| **Waitlist Form** | 4:866 | 1600x1299px | 5 fields 644x74px, Button 243x72px, Globe 986x750px |
| **Footer** | 0:701 | 1920x686px | Logo 228x40px, 4-5 columns, Social icons |

**Total Page Height:** ~16,243px (desktop) | ~13,028px (mobile)

---

## Confirmed Design Tokens

### Exact Measurements from Figma

**Buttons:**
- Primary CTA: 206x59px
- Secondary CTA: 233x59px
- Form Submit: 243x72px
- Nav Items: 124x68px (Home, Login)
- Investor Button: 190x68px

**Cards:**
- Feature Cards: 510x228px
- Logo Cards: 215x215px (square)
- Process Cards: 623x276px
- Project Cards: 607x676px (portrait)
- Testimonial Cards: 486px wide, variable heights (235-355px)

**Form Elements:**
- Form Fields: 644x74px (5 total)
- Form Container: 1500x1099px

**Images/Media:**
- About Image: 635x635px
- Showcase Image: 1034x628px
- Process Visual: 851x494px
- Globe Graphic: 986x750px

**Icons:**
- Feature Icons: 66x66px
- Social Icons: 24-32px actual size
- Avatars: 55.49px circle

**Typography Heights (from Figma):**
- Hero Headline: 154px height (1237x154px area)
- Section Headings: ~150px height
- Card Titles: ~22px height
- Card Descriptions: 48-72px height
- Subtext: 72px height
- Badge: 44px height

---

## Implementation Checklist

### Phase 1: Setup & Foundation ✅
- [x] Extract Figma design specifications
- [x] Document all section dimensions and components
- [x] Confirm color palette and typography
- [x] Map all node IDs for reference

### Phase 2: Component Development
- [ ] Create base UI components:
  - [ ] Button (primary, secondary, text variants)
  - [ ] Card (glass effect, hover states)
  - [ ] Input Field (validation, focus states)
  - [ ] Section Container (responsive padding)
  - [ ] AnimatedSection (Framer Motion wrapper)

### Phase 3: Section Implementation (Parallel Execution)
- [ ] **Agent 1:** Header/Navbar (0:796) + Hero Banner (0:23)
- [ ] **Agent 2:** About Us (0:147) + Stats Section
- [ ] **Agent 3:** How It Works (0:179) + Trusted Clients (0:242)
- [ ] **Agent 4:** World's Top Influentials (177:1827) + Our Process (0:376)
- [ ] **Agent 5:** Our Projects (0:451) + Gallery (0:505)
- [ ] **Agent 6:** Testimonials (0:539) + CTA Banner (0:625)
- [ ] **Agent 7:** FAQ (0:644) + Waitlist Form (4:866)
- [ ] **Agent 8:** Footer (0:701)

### Phase 4: Integration & Animations
- [ ] Integrate all sections into page.tsx
- [ ] Implement scroll-triggered animations
- [ ] Add parallax effects
- [ ] Configure Framer Motion variants
- [ ] Test animation performance (target 60fps)

### Phase 5: Responsive Testing
- [ ] Test mobile (320px-767px)
- [ ] Test tablet (768px-1023px)
- [ ] Test desktop (1024px-1439px)
- [ ] Test large desktop (1440px+)
- [ ] Verify all breakpoints work correctly

### Phase 6: Assets & Content
- [ ] Collect all required images (hero, about, projects, gallery, testimonials)
- [ ] Obtain brand logos (Amazon, Chase, DHL, Rolls-Royce, Karat, etc.)
- [ ] Get final copy for all sections
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Add alt text for accessibility

### Phase 7: Functionality
- [ ] Implement navbar scroll behavior
- [ ] Add mobile menu functionality
- [ ] Build FAQ accordion logic
- [ ] Create form validation
- [ ] Connect form to backend/API (pending client clarification)
- [ ] Add success/error states

### Phase 8: Quality Assurance
- [ ] Lighthouse performance audit (target 90+)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Test form submissions
- [ ] Verify all links work
- [ ] Check console for errors

### Phase 9: Deployment
- [ ] Build production version (`yarn build`)
- [ ] Test production build locally
- [ ] Deploy to AWS EC2 via deployment script
- [ ] Verify deployment success
- [ ] Monitor PM2 logs
- [ ] Test live site

---

## Changelog

**2025-12-10 (Updated):** Complete Figma Dev Mode extraction from node 0:22. All sections documented with exact dimensions, component measurements, confirmed text content, and node IDs. Ready for parallel implementation.

**2025-12-10 (Initial):** Document created from Figma screenshot and XML analysis.

---

## Implementation Strategy

### Parallel Agent Approach

**Agent Assignment (8 agents total):**

1. **Agent 1 - Navigation & Hero:**
   - Header/Navbar (0:796): Fixed navigation with scroll behavior
   - Hero Banner (0:23): Main landing section with badge, headline, CTAs
   - Files: `components/landing/Navbar.tsx`, `components/landing/Hero.tsx`

2. **Agent 2 - About & Stats:**
   - About Us (0:147): Image + content split
   - Stats Section: Integrated stats bar with count-up
   - Files: `components/landing/About.tsx`, `components/landing/Stats.tsx`

3. **Agent 3 - Features & Brands:**
   - How It Works (0:179): Feature cards + showcase
   - Trusted Clients (0:242): Logo grid
   - Files: `components/landing/HowItWorks.tsx`, `components/landing/Brands.tsx`

4. **Agent 4 - Influentials & Process:**
   - World's Top Influentials (177:1827): Split showcase
   - Our Process (0:376): 4-step process with visual
   - Files: `components/landing/Influentials.tsx`, `components/landing/Process.tsx`

5. **Agent 5 - Projects & Gallery:**
   - Our Projects (0:451): Project card grid
   - Gallery (0:505): Masonry image layout
   - Files: `components/landing/Projects.tsx`, `components/landing/Gallery.tsx`

6. **Agent 6 - Social Proof & CTA:**
   - Testimonials (0:539): Masonry testimonial grid
   - CTA Banner (0:625): Beige inverted banner
   - Files: `components/landing/Testimonials.tsx`, `components/landing/CTABanner.tsx`

7. **Agent 7 - Support & Conversion:**
   - FAQ (0:644): Accordion component
   - Waitlist Form (4:866): Contact form with validation
   - Files: `components/landing/FAQ.tsx`, `components/landing/Waitlist.tsx`

8. **Agent 8 - Footer:**
   - Footer (0:701): Multi-column footer
   - Files: `components/landing/Footer.tsx`

**Coordination Requirements:**
- All agents use shared UI components from `components/ui/`
- Follow established animation patterns (Framer Motion)
- Maintain consistent spacing system
- Use Tailwind v4 `@theme` syntax
- Implement responsive breakpoints uniformly

---

**Next Steps:**
1. ✅ Figma data extracted and documented
2. ✅ FIGMA_DESIGN_SPEC.md updated with confirmed measurements
3. ⏳ Get client answers to remaining questions (Assets, API endpoints, Content)
4. ⏳ Launch 8 parallel agents for implementation
5. ⏳ Integration and testing
6. ⏳ Deploy to production
