# Humanist Modernism

![Deploy to GitHub Pages](https://github.com/emmanuellawal/humanist_modernism/actions/workflows/deploy.yml/badge.svg)

A design philosophy website exploring Humanist Modernism—where modernist clarity meets human-centered warmth and readability.

**🌐 Live Site:** [https://emmanuellawal.github.io/humanist_modernism/](https://emmanuellawal.github.io/humanist_modernism/)

---

## About This Project

This website demonstrates Humanist Modernism design principles through:

- **Clean, readable typography** (Open Sans at 19px base with 1.7 line-height)
- **Generous spacing** (8px base unit system)
- **Warm, accessible color palette** (WCAG AA compliant)
- **Content-first hierarchy** with gentle visual emphasis
- **Responsive, mobile-first design** from 320px to 1440px+

Built with modern web technologies while maintaining exceptional accessibility and performance standards.

---

## Technical Stack

- **Static Site Generator:** Eleventy 3.0+ (11ty)
- **CSS Framework:** Tailwind CSS 3.4+
- **Templating:** Nunjucks (.njk)
- **Deployment:** GitHub Actions → GitHub Pages
- **Node.js:** 18.0.0+

### Key Features

✅ **Accessibility First** - WCAG 2.1 AA compliant with semantic HTML and ARIA  
✅ **Performance Optimized** - Minified CSS, optimized fonts, static HTML  
✅ **SEO Ready** - Meta tags, Open Graph, robots.txt, canonical URLs  
✅ **Responsive Design** - Mobile-first with fluid typography and spacing  
✅ **Blog System** - Markdown posts with RSS feed support  
✅ **Automated Deployment** - Push to main → auto-deploy to GitHub Pages

---

## Project Structure

```
humanist_modernism/
├── .eleventy.js              # Eleventy configuration
├── tailwind.config.js        # Design system tokens
├── postcss.config.js         # CSS processing
├── package.json              # Dependencies & scripts
│
├── src/                      # Source files
│   ├── _includes/
│   │   ├── layouts/         # Base & post layouts
│   │   └── components/      # Nav, footer components
│   ├── _data/
│   │   └── site.json        # Site metadata
│   ├── css/
│   │   └── main.css         # Tailwind + custom styles
│   ├── blog/                # Blog posts (markdown)
│   ├── index.njk            # Homepage
│   ├── about.njk            # About page
│   ├── timeline.njk         # Timeline page
│   ├── designers.njk        # Designers page
│   ├── 404.njk              # 404 error page
│   └── robots.txt           # SEO robots file
│
├── _site/                    # Built site (generated)
│
├── docs/                     # Documentation
│   ├── ACCESSIBILITY-AUDIT.md
│   ├── DEPLOYMENT.md
│   └── [other guides]
│
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions deployment
```

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/emmanuellawal/humanist_modernism.git
cd humanist_modernism

# Install dependencies
npm install

# Start development server with hot reload
npm run dev
```

The site will be available at `http://localhost:8080` (or the port shown in terminal).

### Build for Production

```bash
# Build minified production site
npm run build

# Output will be in _site/ directory
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production site (minified) |
| `npm run clean` | Remove _site directory |
| `npm run dev:eleventy` | Run Eleventy in watch mode |
| `npm run dev:css` | Run Tailwind in watch mode |

---

## Design System

The Humanist Modernism design system is defined in `tailwind.config.js`:

### Color Palette

- **Text:** #333333 (primary), #5A5A5A (secondary), #7A7A7A (muted)
- **Background:** #FAFAFA (primary), #F5F5F0 (secondary), #FFFFFF (elevated)
- **Accent:** #2C5F8D (primary blue), #1E4763 (hover), #7A8B8A (sage), #D4A574 (warm)
- **Border:** #E8E8E3 (subtle), #DEDEDC (light)

### Typography

- **Font Family:** Open Sans, Avenir, Segoe UI, system-ui
- **Base Size:** 19px
- **Line Height:** 1.7 (body text), 1.1-1.4 (headings)
- **Scale:** 14px → 60px (display)

### Spacing

- **Base Unit:** 8px
- **Scale:** xs (4px) → 5xl (160px)
- **Sections:** 80px (mobile), 120px (desktop)

---

## Content

### Pages

1. **Homepage** - Introduction to Humanist Modernism philosophy
2. **About** - Deep dive into principles and characteristics
3. **Timeline** - Historical evolution (1957-2020s)
4. **Designers** - Key practitioners and their contributions
5. **Blog** - Articles on history, principles, and modern application

### Blog Posts

- **Historical Context** - Evolution from Swiss Design to Humanist Modernism
- **Design Principles** - Core principles with practical examples
- **Modern Application** - Applying Humanist Modernism to web design

---

## Deployment

This project automatically deploys to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages
4. Live at: `https://emmanuellawal.github.io/humanist_modernism/`

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## Accessibility

This site is built with accessibility as a priority:

- ✅ WCAG 2.1 AA compliant color contrast
- ✅ Semantic HTML with proper ARIA attributes
- ✅ Keyboard navigation with focus indicators
- ✅ Skip-to-content link for screen readers
- ✅ Respects prefers-reduced-motion
- ✅ Proper heading hierarchy (h1 → h2 → h3)

See [docs/ACCESSIBILITY-AUDIT.md](docs/ACCESSIBILITY-AUDIT.md) for full audit report.

---

## Performance

Target Lighthouse scores (base specification requirements):

- **Performance:** 90+
- **Accessibility:** 100
- **Best Practices:** 95+
- **SEO:** 95+

Optimizations:
- Minified CSS and HTML
- Font preloading with display=swap
- No render-blocking JavaScript
- Static site generation (instant page loads)

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 9+)

---

## Contributing

This project is part of the Swiss Design Lineage educational project. For the original learning materials:

**→ [docs/START-HERE.md](docs/START-HERE.md)** - Original project guide

---

## License

MIT License - See [LICENSE](LICENSE) file for details

---

## Acknowledgments

- **Adrian Frutiger** - Typography pioneer (Univers, Frutiger typefaces)
- **Edward Tufte** - Information design principles
- **Erik Spiekermann** - Humanist typography advocacy
- **Matthew Carter** - Readable screen typography (Georgia, Verdana)
- **Oliver Reichenstein** - iA Writer and content-first design
- **Richard Saul Wurman** - Information architecture foundations

---

## Quick Links

**Documentation:**
- [Accessibility Audit](docs/ACCESSIBILITY-AUDIT.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Technical Setup](docs/TECHNICAL-SETUP.md)
- [Workflow Guide](docs/WORKFLOW.md)

**Getting Started:**
- **[START HERE](docs/START-HERE.md)** — Single entry point with decision tree
- [Daily Checklist](templates/daily-checklist.md) — Day-by-day tasks
- [Browse Style Guides](style-guides/) — 15 comprehensive guides (300+ pages)

**While Working:**
- [Workflow Guide](docs/WORKFLOW.md) — 5 phases explained
- [AI Playbook](docs/AI-PLAYBOOK.md) — Work effectively with AI
- [Troubleshooting](docs/TROUBLESHOOTING.md) — Common issues & fixes
- [Quality Review](templates/quality-review.md) — Check before submitting

**Finishing Up:**
- [Grading Rubric](docs/GRADING.md) — How you'll be evaluated (100 pts)
- [Collaboration Story Template](templates/collaboration-story.md) — AI reflection guide

---

## Key Features

✅ **Zero code required** — Pure AI collaboration  
✅ **~10 hours total** — Realistic with AI assistance  
✅ **15 style options** — Beginner to advanced  
✅ **300+ pages of guides** — Comprehensive design documentation  
✅ **Professional results** — Portfolio-worthy websites  
✅ **Strategic learning** — Design judgment + AI collaboration skills

---

## Project Structure

```
/docs/               Core learning documents
/templates/          Reusable checklists
/style-guides/       15 comprehensive design guides
  /beginner/         2 accessible styles
  /intermediate/     6 medium complexity styles
  /advanced/         7 complex design systems
/references/         Assignment information
```

---

## For Instructors

**Repository:** [github.com/kaw393939/swiss_design_lineage_vibecoding](https://github.com/kaw393939/swiss_design_lineage_vibecoding)

**Contact:** Keith Williams  
**Course:** IS 218 - Building Web Applications  
**Version:** 3.0 — November 2025

---

## Quick Start (3 Steps)

1. **Read:** [docs/START-HERE.md](docs/START-HERE.md)
2. **Pick:** Choose your style (beginner/intermediate/advanced)
3. **Build:** Follow [daily checklist](templates/daily-checklist.md)

**Then stop reading and start building.** 🎨✨

---

**Ready?** → **[docs/START-HERE.md](docs/START-HERE.md)**
