# Initial Mockup - Humanist Modernism Website

**Date:** November 11, 2025  
**Phase:** Phase 1 - Research & Vision Complete  
**Status:** Pre-iteration baseline

---

## Overview

This folder contains a snapshot of the initial website mockup **before** the iterative build phases
(Sprints 1-3). This serves as the baseline to compare against as we refine the design through
iterations.

---

## What's Included

### Source Files (`/src/`)

All original source files including:

- Nunjucks templates (`.njk`)
- Markdown content (`.md`)
- CSS files
- Layout components
- Blog posts

### Configuration Files

- `.eleventy.js` - Eleventy configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Built Site Snapshot (`/_site-snapshot/`)

Complete built HTML output for visual reference

---

## Current Design State

### Pages Implemented

1. **Homepage** (`index.njk`)
   - Hero section with style overview
   - Featured designers
   - Key principles cards
   - Call-to-action sections

2. **About** (`about.njk`)
   - Humanist Modernism explanation
   - Core principles
   - Design philosophy

3. **Timeline** (`timeline.njk`)
   - Historical evolution (1950s-2020s)
   - Key moments and movements
   - Visual timeline presentation

4. **Designers** (`designers.njk`)
   - Adrian Frutiger profile
   - Erik Spiekermann profile
   - Matthew Carter profile

5. **Blog** (`blog/index.njk`)
   - Historical Context article
   - Design Principles article
   - Modern Application article

6. **404 Page** (`404.njk`)
   - Custom error page with style-appropriate design

### Design Characteristics

**Typography:**

- Primary font: Inter (sans-serif)
- Humanist qualities maintained
- Clear hierarchy with size scale

**Color Palette:**

- Primary: Slate tones (#334155, #475569, #64748b)
- Accent: Emerald (#10b981)
- Background: White/Light gray
- Text: Dark slate (#1e293b)

**Layout:**

- Clean grid structure
- Generous whitespace
- Maximum width: 1280px
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

**Components:**

- Sticky navigation header
- Card-based content sections
- Footer with links and copyright
- Hover states on interactive elements

---

## Quality Metrics (Pre-Iteration)

### Build Status

✅ Eleventy build: **0.66 seconds**  
✅ Pages generated: **9 pages**  
✅ No build errors

### Code Quality

✅ Prettier formatted  
✅ ESLint: 0 errors, 1 warning (acceptable)  
✅ Stylelint: 0 errors  
✅ Pre-commit hooks: Working

### Deployment

✅ GitHub Pages: Live at `/humanist_modernism/`  
✅ CSS rendering: Fixed  
✅ Navigation: All 29 links working

---

## What's Next: Sprint Planning

### Sprint 1: Foundation (2 hours)

**Focus:** Refine layout, typography, and color implementation

- Enhance humanist typography characteristics
- Fine-tune spacing and rhythm
- Optimize color harmony
- Improve desktop presentation

### Sprint 2: Components (2 hours)

**Focus:** Component refinement and interaction

- Enhance navigation design
- Improve card layouts
- Refine buttons and links
- Polish footer design
- Ensure mobile responsiveness

### Sprint 3: Polish (2 hours)

**Focus:** Final refinement and quality assurance

- Complete all page refinements
- Responsive optimization
- Performance optimization (Lighthouse 90+)
- Accessibility improvements
- Final content polish

---

## Usage Notes

### Viewing the Mockup

1. Open `_site-snapshot/index.html` in a browser to see the built site
2. Review source files in the root of this folder to see code structure
3. Compare against future iterations to track improvements

### Reference During Iterations

- Use this as a baseline for "before/after" comparisons
- Take screenshots of iterations alongside these files
- Document what changed and why in collaboration story
- Track time spent on each improvement

---

## File Structure

```
research/initial-mockup/
├── README.md (this file)
├── .eleventy.js
├── tailwind.config.js
├── postcss.config.js
├── _site-snapshot/ (built HTML output)
├── _data/
├── _includes/
│   ├── components/
│   │   ├── footer.njk
│   │   └── nav.njk
│   └── layouts/
│       ├── base.njk
│       └── post.njk
├── blog/
│   ├── index.njk
│   ├── design-principles.md
│   ├── historical-context.md
│   └── modern-application.md
├── css/
│   └── main.css
├── 404.njk
├── about.njk
├── designers.njk
├── index.njk
└── timeline.njk
```

---

**Created:** November 11, 2025  
**Purpose:** Phase 1 baseline for iterative improvement  
**Next Phase:** Sprint Planning (Phase 3)
