# Studiotra.com — New Portfolio Site Plan
**Petra Hwang · Brand Design Lead**  
Rebuilding from WordPress → Custom HTML/CSS/JS  
Reference aesthetic: Rayo Freelancer Portfolio template

---

## Overview & Positioning Shift

Your current site leans into **"digital agency studio"** framing (plural "we", team-language). The new site mirrors the **Brand Design Lead** resume — a personal portfolio with a distinct creative voice. First person throughout. This aligns better with how Rayo positions its freelancer template and reflects who's actually doing the work.

**Tagline direction:** *"Strategic brand design. Scalable systems. Built to ship."*  
Or more personal: *"I build brands that hold together — from strategy to pixel."*

---

## Site Architecture

4 pages + no blog (you can add it later if needed — current blog posts are dated 2023 and generic).

```
index.html        → Home (long scroll, all key sections)
work.html         → Full portfolio / project grid
about.html        → About + timeline + tools + education
contact.html      → Contact form + availability status
```

**Nav:** `Work  ·  About  ·  Contact` — minimal, right-aligned. Logo mark left.

---

## Page-by-Page Content Plan

---

### 1. `index.html` — Home

#### Section 1 — Hero
- **Headline (large, full viewport):**  
  *"Brand design  
  that scales."*  
  or  
  *"Strategic design  
  for brands that mean it."*
- **Sub-copy:** 1–2 lines. E.g.: *"11+ years building visual systems for startups, enterprise teams, and everything in between."*
- **Availability pill:** `● Available for new projects`
- **CTA buttons:** `View Work →` and `Download CV`
- **Scroll indicator** (like Rayo — subtle animated arrow)
- **Background:** Use your lime/chartreuse brand accent creatively — could be a large typographic texture or gradient shape behind the headline

---

#### Section 2 — Marquee Ticker
Scrolling horizontal strip (like Rayo's "Innovations · Creativity · Experience"):  
`Brand Identity · Digital Product Design · Web Development · Presentation Design · UI/UX · Visual Systems ·`

---

#### Section 3 — Featured Projects (3–4 works)
Pull your best from the current site. Suggested selection:
| # | Project | Tags |
|---|---------|------|
| 1 | Madame Zero | Branding, Identity, Digital |
| 2 | MindSweep UI/UX | Product Design, App, Web |
| 3 | MindSweep Branding | Branding, Design System |
| 4 | AmazonAds × Fizz | Campaign, Brand Collab |

Layout: Large numbered cards with thumbnail, title, and tag pills. Hover reveals a "View Project →" overlay. Link to `work.html` for the full grid.

---

#### Section 4 — Philosophy / About Teaser
Two-column block. Left: a strong personal statement. Right: 3–4 stat cards.

**Copy:**  
*"I operate at the intersection of brand strategy and execution. My work lives inside design systems, pitch decks, product screens, and campaign assets — wherever a brand needs to hold together under pressure."*

**Stats (from your resume + current site):**
- `11+` Years of experience
- `110+` Happy clients
- `5` Design awards
- `4.8` Avg client rating

CTA: `Meet Me Closer →` → links to `about.html`

---

#### Section 5 — Services / Expertise
Numbered accordion or hover-reveal cards (like Rayo's `/01 UI/UX design` panel layout).

| # | Service | Description |
|---|---------|-------------|
| /01 | Brand Identity | Logo systems, visual language, brand guidelines, and scalable identity architecture. |
| /02 | Digital Product Design | End-to-end UX/UI for web and app — from wireframes through hi-fi delivery. |
| /03 | Web Development | Front-end HTML/CSS builds. Clean, fast, portfolio-grade sites. |
| /04 | Presentation Design | Pitch decks, investor materials, and sales templates that tell the story. |

CTA: `See All Work →`

---

#### Section 6 — Experience Timeline
Clean vertical timeline. Pull directly from resumes.

```
May 2021 – Present
Lead Designer, Studiotra · Toronto, CA
End-to-end design strategy for clients ranging from startups to global enterprise.
Brand identity systems, digital experiences, presentation design, cross-functional collaboration.

Mar 2020 – Feb 2022
Content Committee Member, BCMA · Toronto, CA
Logo refresh, weekly video content, newsletter design for the Branded Content Marketing Association.

Feb 2019 – Feb 2021
Graphic Designer, Rouge Media · Toronto, CA
Full company rebrand. Sales templates, marketing collateral, digital assets for North American markets.

Mar 2018 – Dec 2018
Senior Graphic Designer, Paran Tours · Toronto, CA
Marketing material templatization, tech team collaboration, digital + large-format print assets.

Oct 2012 – Jan 2017
Graphic Designer, Vision Inside Inc. · Seoul, KOR
Primary brand identity redesign. Scalable subsidiary brand systems. UI design with dev partnership.
```

---

#### Section 7 — Tools / Stack
Icon grid (like Rayo's "My favorite stack"). Your tools:

`Figma · Adobe Illustrator · Photoshop · InDesign · After Effects · HTML5 · CSS3 · Webflow · Notion`

---

#### Section 8 — Testimonials (2 selected)
Use your strongest two quotes. Keep them short and attributed.

> *"The most talented artist I have ever had the pleasure to work with... Any vision you have, Petra can translate."*  
> — **Stephen Fleiszer**, CEO, Space Creatorz

> *"Petra is the best designer I have ever worked with in regards to skill and attitude."*  
> — **Jeffrey Turford**, Art Director

---

#### Section 9 — CTA Banner
Full-width. Bold. Like Rayo's "Let's talk about your project!" block.

*"Have a project in mind?  
Let's make it happen."*  
Button: `Get In Touch →` → contact.html

---

#### Footer
- Logo mark left
- Nav links: Work · About · Contact
- Social: LinkedIn · Instagram
- Email: petra.h@studiotra.com
- Copyright: © 2025 Petra Hwang / Studiotra

---

### 2. `work.html` — Portfolio

**Hero:** Simple page title — *"Selected Work"* + short descriptor  
*"A cross-section of brand, product, and digital projects — from identity systems to interactive experiences."*

**Filter tags (top):** All · Branding · UI/UX · Web · Print/Marketing

**Grid layout:** Masonry or 2-column asymmetric grid. Each card shows:
- Project thumbnail
- Project name
- Category tags
- Year
- Hover: brief 1-line description + "View →"

**Projects to include** (from current site):
- Madame Zero — Branding/Digital
- MindSweep UI/UX
- MindSweep Branding
- AmazonAds × Fizz
- *(Any additional client work you can reference)*

**Note:** Individual project pages can be added as `work/[project-name].html` over time. For launch, external Behance/Dribbble links or modal pop-ups work well as a lighter option.

---

### 3. `about.html` — About

**Structure:**

1. **Intro block** — Large personal headline + photo (optional — Rayo uses an avatar; you can decide)  
   *"I'm Petra — brand design lead, creative director, and front-end builder based in Toronto."*

2. **Long-form bio** — 2–3 paragraphs. Personal voice. Cover: where you started (Seoul, fine arts), how you developed across agency and in-house, what you believe about design, and what Studiotra is today.

3. **Full experience timeline** — Same as homepage version but more detailed. Include bullet-level detail from the Brand Design Lead resume (the second file you uploaded).

4. **Education**
   - Multimedia Design, Induk University · Seoul, KOR · 2014–2017
   - Graphic Design, Lasalle College · Vancouver, CA · 2014–2015
   - Fine Arts, Korean Arts High School · Seoul, KOR · 2011–2013

5. **Certifications**
   - UX Design — Google
   - Visual Elements of UI Design — California Institute of the Arts

6. **Awards**
   - Editorial Design — International Design Trend Award, 2016
   - Illustration — International Design Trend Award, 2016
   - Advertising Design — Korea Society of Design Trend, 2013
   - Digital Painting — Society of Korea Illusart, 2013
   - Illustration — Korea Society of Design Trend, 2013

7. **CV download button**

---

### 4. `contact.html` — Contact

- **Headline:** *"Let's work together."* or *"Start a project."*
- **Availability status:** `● Currently available for new projects` (toggle this manually as needed)
- **Simple form:** Name · Email · Project type (dropdown: Branding / Product Design / Web / Other) · Message · Send
- **Direct contact:**
  - petra.h@studiotra.com
  - 437.435.8730
  - LinkedIn link
- **Location note:** Based in Toronto, CA. Available for remote worldwide.
- **Response time note:** *"I typically respond within 1–2 business days."*

---

## Aesthetic Direction

### Palette
Stay true to your current brand identity but refine it:
- **Background:** Near-black `#0E0E0C` or warm off-white `#F7F5EF` (Rayo uses very dark — consider going dark for drama, with a light mode for the work pages)
- **Accent:** Studiotra lime/chartreuse — `#C5E64A` or similar (your brand green)
- **Text:** Off-white `#F0EDE6` on dark / near-black `#1A1A18` on light
- **Secondary text:** Muted warm grey

### Typography (matching Rayo's editorial feel)
- **Display/Headlines:** Something editorial and distinctive — consider `Neue Haas Grotesk`, `Editorial New`, `Playfair Display`, or `DM Serif Display` for a personal/human feel
- **Body/UI:** `Söhne`, `Satoshi`, or `DM Sans` — clean and contemporary
- Load via Google Fonts or self-hosted for performance

### Motion & Interactions
- Scroll-triggered fade-ins (Intersection Observer API — pure JS, no library needed)
- Marquee ticker auto-scroll
- Hover states on project cards (image zoom + overlay reveal)
- Smooth page transitions (CSS opacity fade)
- The experience timeline can animate in line-by-line as user scrolls

### Layout Principles (from Rayo)
- Full-width sections with generous padding
- Asymmetric grid — break the 12-column grid intentionally
- Large counter/stat numbers displayed typographically
- Section numbers (01 / 02 / 03) as subtle orientation markers
- Mix of all-caps labels with large expressive headlines

---

## Technical Notes

### File Structure
```
/
├── index.html
├── work.html
├── about.html
├── contact.html
├── css/
│   ├── main.css
│   └── animations.css
├── js/
│   ├── main.js         ← scroll animations, marquee
│   └── filter.js       ← work page filter
├── img/
│   ├── projects/
│   ├── icons/
│   └── logo/
└── fonts/              ← self-hosted if needed
```

### No dependencies needed (keeping it clean):
- Pure HTML/CSS/JS — no React, no frameworks
- `Intersection Observer API` for scroll animations
- CSS custom properties for theming
- CSS Grid + Flexbox for layout
- Optional: `GSAP` (free tier) for smoother animations if you want more control

### Performance
- Lazy-load all project images (`loading="lazy"`)
- Use WebP format for project thumbnails
- Preload critical fonts
- Minimize JS — this should be nearly CSS-only

---

## Resume Note ⚠️

One small thing: your **Air Canada resume** (the first file) has **"Lead Degienr"** as the title under your name — that's a typo for *"Lead Designer."* Worth fixing before sending that one out.

---

## Suggested Build Order

1. **Foundations** — `main.css` with CSS variables, typography, and reset
2. **`index.html`** — Full homepage, all sections
3. **`work.html`** — Project grid with filter
4. **`about.html`** — About + timeline
5. **`contact.html`** — Form + info
6. **Polish pass** — Animations, hover states, mobile responsiveness
7. **Deploy** — Netlify or GitHub Pages (both free, very simple for static HTML)

---

*Ready to start building any of these pages whenever you are.*
