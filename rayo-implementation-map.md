# Rayo → Studiotra Implementation Map

**Purpose:** Maps Rayo structure, aesthetics, and animations to your planned HTML site. Use this alongside `studiotra-portfolio-plan.md` during build.

---

## 1. Content Migration: studiotra.com → New Site

### ✅ Reuse As-Is (with minor edits)
| Current Site Content | New Location | Notes |
|---------------------|--------------|-------|
| **Projects:** Madame Zero, MindSweep UI/UX, MindSweep Branding, AmazonAds × Fizz | `work.html` + Home Featured | Pull thumbnails, titles, tags. Fix "deisgn" → "design" where it appears |
| **Testimonials** (Stephen Fleiszer, Jeffrey Turford, Juna Jung) | Home Section 8 + About | Use strongest 2 on home; all 3 can live on About |
| **Stats:** 110+ clients, 5 awards, 4.8 rating | Home Section 4 (Philosophy) | Use 11+ years (resume); 110+ clients; 5 design awards; 4.8 avg rating |
| **Services:** Digital Product Design, Branding, Web Dev, etc. | Home Section 5 | Condense to 4 core services per plan |
| **Awards list** (Editorial, Illustration, Digital Painting, etc.) | `about.html` | Full list in About; short version on home |

### ✏️ Reframe / Rewrite
| Current (Agency "We") | New (Personal "I") |
|-----------------------|--------------------|
| "We're sharp brands creators" | "I build brands that hold together" |
| "Digital agency studio" | "Brand design lead" / personal positioning |
| "Our Clients" | "What people say" or "Testimonials" |
| "We breathe life into your ideas" | First-person equivalents in services |
| "Our area of practice" | "My approach and philosophy" |

### ❌ Omit (or defer)
- **Blog** — 2023 posts are generic; skip for launch
- **"2k Projects Completed"** — Use "110+ happy clients" instead (more credible)
- **"A+ Creative Agency Winner"** — Feels templated; omit or replace with specific awards

---

## 2. Rayo Structure → Your Pages

### Homepage Section Mapping

| Rayo Element | Your Implementation |
|--------------|---------------------|
| **Top marquee** (Innovations · Creativity · Experience) | Section 2: `Brand Identity · Digital Product Design · Web Development · Presentation Design · UI/UX · Visual Systems ·` |
| **Hero:** Large headline + "Available for freelance" | Section 1: Headline + `● Available for new projects` pill |
| **Hero:** Rotating role labels (Digital designer, etc.) | Optional: subtle text swap or omit — your plan uses static headline |
| **Scroll indicator** (arrow) | Section 1: "Scroll for more" or animated arrow |
| **Download CV** (duplicated) | Section 1: CTA button |
| **Featured projects grid** (thumbnails + hover) | Section 3: 3–4 numbered cards, hover overlay "View Project →" |
| **"Explore a selection..."** intro | Section 3: Short descriptor above grid |
| **About Me / Approach and philosophy** | Section 4: Two-column — statement + stat cards |
| **Stats (0+ clients, 0% return, etc.)** | Section 4: 11+ years, 110+ clients, 5 awards, 4.8 rating |
| **"Let's Meet Closer"** | Section 4: `Meet Me Closer →` → about.html |
| **My expertise** (/01, /02, ...) | Section 5: Numbered services accordion |
| **Experience timeline** | Section 6: Vertical timeline with dates |
| **My favorite stack** (icons) | Section 7: Figma, Adobe, HTML/CSS, etc. |
| **My education** | `about.html` only (not on home) |
| **Recent insights** (blog) | Omit for launch |
| **"Let's talk about your project!"** | Section 9: "Have a project in mind? Let's make it happen." → contact.html |

### Work Page
- Rayo's project grid with filter tags → your `work.html` masonry/2-col grid + filter
- Hover: brief description + "View →"

### About Page
- Rayo's "About Me" intro + philosophy → your intro block + long-form bio
- Full timeline, education, certifications, awards

### Contact Page
- Rayo's contact CTA → your form + availability status + direct contact

---

## 3. Aesthetics & Layout (Rayo-Inspired)

### Visual Elements to Implement

| Rayo Feature | Implementation |
|--------------|----------------|
| **Dark background** | `#0E0E0C` or `#1A1A18` (near-black) |
| **Accent color** | Studiotra lime `#C5E64A` on dark |
| **Section numbers** | `/01`, `/02` as subtle markers in services |
| **Large typography** | Headlines full viewport or near full |
| **Asymmetric grids** | Break 12-col; use 2-col or masonry intentionally |
| **All-caps labels** | "FEATURED WORK", "ABOUT ME", "MY EXPERTISE" |
| **Generous padding** | Full-width sections, lots of vertical rhythm |
| **Icon stack** | Tool logos in a horizontal or grid layout |

### Typography Pairing (Rayo-like)
- **Display:** Editorial, distinctive — e.g. DM Serif Display, Playfair
- **Body/UI:** Clean sans — DM Sans, Söhne, or similar
- Load via Google Fonts: `DM Serif Display` + `DM Sans`

---

## 4. Animations & Interactions

### Must-Have (Rayo has these)

| Animation | How to Build |
|-----------|--------------|
| **Marquee ticker** | CSS `animation` + `translateX` infinite loop; or JS-based scroll |
| **Scroll indicator** | Pulsing/bouncing arrow; `animation: bounce` |
| **Scroll-triggered fade-ins** | `Intersection Observer` — add `.visible` when in viewport |
| **Project card hover** | Image scale (`transform: scale(1.05)`) + overlay fade-in |
| **Button hover** | Border/underline animation or color shift |

### Nice-to-Have

| Animation | Notes |
|-----------|-------|
| **Timeline line-by-line reveal** | Stagger `opacity` + `translateY` on scroll |
| **Stats count-up** | Optional: JS number increment when in view |
| **Smooth scroll** | `scroll-behavior: smooth` in CSS |
| **Page transition** | Fade between pages (CSS opacity) |

### Pure CSS / Vanilla JS Only
- No React, no GSAP required for launch
- `Intersection Observer` is native and well-supported
- Use `@keyframes` for marquee, scroll indicator, hovers

---

## 5. Build Checklist (Prioritized)

### Phase 1: Foundations
- [ ] Create folder structure per `studiotra-portfolio-plan.md`
- [ ] `main.css`: CSS variables (colors, typography, spacing)
- [ ] `main.css`: Reset + base typography
- [ ] Logo/icon assets in `img/logo/`

### Phase 2: Homepage
- [ ] Hero (Section 1): headline, sub-copy, availability pill, CTAs, scroll indicator
- [ ] Marquee ticker (Section 2)
- [ ] Featured projects (Section 3): 3–4 cards with hover
- [ ] Philosophy + stats (Section 4)
- [ ] Services accordion (Section 5)
- [ ] Experience timeline (Section 6)
- [ ] Tools/stack (Section 7)
- [ ] Testimonials (Section 8)
- [ ] CTA banner (Section 9)
- [ ] Footer + nav

### Phase 3: Other Pages
- [ ] `work.html`: grid, filter, project cards
- [ ] `about.html`: bio, timeline, education, certs, awards
- [ ] `contact.html`: form, availability, contact info

### Phase 4: Polish
- [ ] Scroll animations (Intersection Observer)
- [ ] Hover states on all interactive elements
- [ ] Mobile responsive breakpoints
- [ ] Lazy-load images, WebP where possible

### Phase 5: Deploy
- [ ] Netlify or GitHub Pages
- [ ] Custom domain (studiotra.com) pointing to new host

---

## 6. Quick Reference: Rayo URLs

- **Home (Freelancer):** https://rayo-nextjs-creative-template.netlify.app/home-freelancer-portfolio
- **Works:** /works-simple
- **About:** /about-me
- **Contact:** /contact

Use these for visual reference during build (layout, spacing, hover behavior).

---

*This map is a supplement to `studiotra-portfolio-plan.md`. Start with foundations, then build homepage section by section.*
