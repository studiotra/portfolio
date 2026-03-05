# Next Steps — Studiotra Portfolio Build

You now have a working HTML structure. Here's how to move forward.

---

## 1. Preview the site

Open `index.html` in a browser, or run a local server:

```bash
# Option A: Python (if installed)
python -m http.server 8000

# Option B: Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`

---

## 2. Add your assets

| Folder | What to add |
|--------|-------------|
| `img/logo/` | Studiotra logo mark (SVG or PNG) |
| `img/projects/` | Project thumbnails for Madame Zero, MindSweep, AmazonAds × Fizz |
| `img/icons/` | Tool icons (Figma, Adobe, etc.) if you want custom ones |

Update the project cards in `index.html` and `work.html` to use real images:

```html
<img src="img/projects/madame-zero.jpg" alt="Madame Zero" loading="lazy" />
```

Replace the `.project-card__placeholder` div with an `<img>` inside `.project-card__image-wrap`.

---

## 3. Swap logo text for image

In `index.html`, `work.html`, `about.html`, `contact.html`, replace:

```html
<a href="index.html" class="nav-logo">Studiotra</a>
```

With:

```html
<a href="index.html" class="nav-logo">
  <img src="img/logo/studiotra-logo.svg" alt="Studiotra" />
</a>
```

---

## 4. Add your CV

- Export your CV as PDF
- Save it in the project root (e.g. `petra-hwang-cv.pdf`)
- Update the Download CV links:

```html
<a href="petra-hwang-cv.pdf" class="btn" download>Download CV</a>
```

---

## 5. Write your About bio

Edit `about.html` — replace the placeholder in the bio section with your 2–3 paragraph bio (from the plan: Seoul, fine arts, agency/in-house, design philosophy, what Studiotra is today).

---

## 6. Connect the contact form

Right now the form has `action="#"`. You have two options:

1. **Netlify Forms** — Add `netlify` attribute to the form and deploy to Netlify; submissions go to Netlify’s dashboard.
2. **Formspree / similar** — Sign up for Formspree and set `action="https://formspree.io/f/your-id"`.

---

## 7. Fix social links

Update the LinkedIn and Instagram URLs in the footer (and contact page) to your actual profiles.

---

## 8. Optional refinements

- **Project detail pages** — Add `work/madame-zero.html`, etc., and link from the project cards.
- **Lime accent in hero** — Add a gradient or shape in the hero section using `--accent`.
- **Mobile menu** — Add a hamburger menu for small screens if the nav gets cramped.
- **Form validation** — Add HTML5 `required` (already in place) or simple JS validation.

---

## 9. Deploy

**Netlify:**
1. Drag the project folder into [app.netlify.com/drop](https://app.netlify.com/drop), or
2. Connect your Git repo to Netlify for automatic deploys

**GitHub Pages:**
1. Push to GitHub
2. Settings → Pages → Deploy from branch
3. Point studiotra.com to the GitHub Pages URL (or Netlify) via your DNS

---

## File structure (current)

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
│   ├── main.js
│   └── filter.js
├── img/
│   ├── projects/    ← Add thumbnails
│   ├── icons/
│   └── logo/        ← Add logo
├── fonts/
├── studiotra-portfolio-plan.md
├── rayo-implementation-map.md
└── NEXT-STEPS.md
```

---

*Start with #1 (preview) and #2 (assets), then work through the rest in order.*
