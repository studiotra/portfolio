# Studiotra — Image Assets Guide

Replace placeholder images with your final assets. Recommended format: **WebP** for best performance.

## 1. Work page thumbnails

**Folder:** `assets/ad-imgs/project/`

| Filename | Project |
|----------|---------|
| project-r-22.webp | PE/RE Proposal System |
| project-r-23.webp | AmazonAds Toolkit |
| project-r-24.webp | PE Presentation System Development |
| project-r-25.webp | TD Financial Literacy |
| project-r-26.webp | TD Summer Reading Program |
| project-r-27.webp | Timvo.work |

**Suggested size:** ~800×600px

---

## 2. Shared gallery images

**Folder:** `assets/imgs/gallery/`

### About page (moving gallery)
- image-19.webp, image-20.webp, image-21.webp, image-22.webp

### Index page
- image-3.webp, image-4.webp, image-5.webp, image-6.webp
- image-10.webp, image-11.webp

### Work detail pages (hero + gallery)
- image-26.webp — Project thumbnail (meta area)
- image-27.webp — Hero / featured image
- image-28.webp … image-33.webp — Gallery (6 images)

**Note:** Work detail pages currently share these. For project-specific images, use the per-project folders and update the HTML paths.

---

## 3. Per-project image folders

**Folder:** `assets/imgs/projects/[project]/`

Each project has its own folder for future project-specific imagery:

- `pe-re/` — PE/RE Proposal System
- `amazonads/` — AmazonAds Toolkit
- `alphi/` — PE Presentation System
- `td-financial/` — TD Financial Literacy
- `td-summer-reading/` — TD Summer Reading Program
- `timvo/` — Timvo.work

**Suggested files per project:**
- title.webp
- hero.webp
- gallery-01.webp … gallery-06.webp

---

## 4. Logo

**Folder:** `assets/ad-imgs/logo/`
- logo-2.png — Header logo (light mode)

**Folder:** `../img/logo/` (project root)
- studiotra-logo-white.svg — Dark mode logo
- studiotra-logo-dark.svg — Light mode logo
- favi.svg — Favicon
