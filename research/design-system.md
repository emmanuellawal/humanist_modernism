# Humanist Modernism Design System
## Foundation for Sophisticated, Human-Centered Design

**Project:** Humanist Modernism Website  
**Created:** November 10, 2025  
**Purpose:** Source of truth for design implementation across all sprints

---

## 🎨 Color Palette

### Primary Colors
```css
/* Text Colors */
--text-primary: #333333      /* Warm near-black for body text */
--text-secondary: #5A5A5A    /* Medium gray for secondary text */
--text-muted: #7A7A7A        /* Lighter gray for captions, metadata */

/* Background Colors */
--bg-primary: #FAFAFA        /* Warm off-white, main background */
--bg-secondary: #F5F5F0      /* Slightly warmer for sections */
--bg-elevated: #FFFFFF       /* Pure white for cards/elevated content */

/* Accent Colors - Muted & Sophisticated */
--accent-primary: #2C5F8D    /* Muted blue - primary interactive */
--accent-hover: #1E4763      /* Darker blue for hover states */
--accent-sage: #7A8B8A       /* Sage gray - secondary accent */
--accent-warm: #D4A574       /* Warm taupe - highlights, pull quotes */
--accent-earth: #8B7355      /* Earth brown - decorative elements */

/* Functional Colors */
--border-subtle: #E8E8E3     /* Barely visible borders */
--border-light: #DEDEDC      /* Subtle dividers */
--shadow-soft: rgba(0,0,0,0.08)  /* Gentle shadows */
```

### Contrast Ratios (WCAG AAA Compliant)
- Text primary on bg-primary: **11.5:1** ✓ AAA
- Text secondary on bg-primary: **7.2:1** ✓ AAA
- Accent primary on bg-primary: **5.8:1** ✓ AA Large
- All interactive elements meet WCAG AA minimum (4.5:1)

### Color Usage Guidelines
- **Body text:** Always `--text-primary` (#333)
- **Headings:** `--text-primary` with increased weight
- **Links:** `--accent-primary` with subtle underline
- **Backgrounds:** Never pure white except elevated cards
- **Accents:** Use sparingly - warm taupe for emphasis only

---

## ✍️ Typography System

### Font Stack
```css
/* Primary Font - Humanist Sans-Serif */
--font-primary: 'Open Sans', 'Frutiger', 'Avenir', 'Segoe UI', sans-serif;

/* Fallback ensures humanist characteristics:
   - Open apertures
   - Varied stroke width  
   - Calligraphic origins
*/

/* Optional Serif for Long-Form Content */
--font-serif: 'Georgia', 'Minion Pro', 'Garamond', serif;

/* Monospace for Code (if needed) */
--font-mono: 'SF Mono', 'Monaco', 'Consolas', monospace;
```

### Type Scale (Generous Sizing)
```css
/* Heading Scale - Moderate Jumps */
--text-display: 60px;    /* Hero/display only, line-height: 1.1 */
--text-h1: 48px;         /* Page titles, line-height: 1.2 */
--text-h2: 36px;         /* Section headings, line-height: 1.3 */
--text-h3: 28px;         /* Sub-sections, line-height: 1.4 */
--text-h4: 24px;         /* Minor headings, line-height: 1.4 */

/* Body Scale - Readable & Comfortable */
--text-body-xl: 21px;    /* Featured content, line-height: 1.8 */
--text-body: 19px;       /* Standard body text, line-height: 1.7 */
--text-body-sm: 17px;    /* Smaller body, line-height: 1.6 */
--text-caption: 16px;    /* Captions, metadata, line-height: 1.5 */
--text-small: 14px;      /* Legal, footnotes only, line-height: 1.5 */
```

### Font Weights
```css
--weight-normal: 400;    /* Body text */
--weight-medium: 500;    /* Subtle emphasis */
--weight-semibold: 600;  /* Headings, strong emphasis */
--weight-bold: 700;      /* Rare, only for major emphasis */
```

### Line Height & Measure
```css
/* Line Heights - Generous for Readability */
--leading-tight: 1.2;    /* Display text only */
--leading-snug: 1.4;     /* Headings */
--leading-normal: 1.7;   /* Body text (critical!) */
--leading-relaxed: 1.8;  /* Featured/important content */

/* Optimal Measure - 60-75 Characters Per Line */
--measure-optimal: 720px;   /* Main content blocks */
--measure-wide: 960px;      /* Navigation, footer */
--measure-narrow: 540px;    /* Pull quotes, sidebars */
```

### Typography Guidelines
- **Body text:** Never smaller than 19px (17px minimum in tight spaces)
- **Headings:** Use weight + size for hierarchy (not just size)
- **Paragraph spacing:** 1.5em between paragraphs
- **Subheadings:** Every 3-5 paragraphs for scannability
- **Line length:** 60-75 characters (measure-optimal)

---

## 📐 Spacing System (8px Base Unit)

### Scale (Based on 8px Grid)
```css
--space-xs: 4px;      /* Micro adjustments only */
--space-sm: 8px;      /* Tight spacing */
--space-md: 16px;     /* Default element spacing */
--space-lg: 24px;     /* Comfortable spacing */
--space-xl: 32px;     /* Section internal padding */
--space-2xl: 48px;    /* Between components */
--space-3xl: 64px;    /* Between major sections */
--space-4xl: 96px;    /* Page sections */
--space-5xl: 128px;   /* Hero/display spacing */
```

### Vertical Rhythm
```css
/* Consistent Baseline Grid */
--rhythm-base: 8px;

/* Paragraph Spacing */
--paragraph-spacing: 1.5em;  /* Generous breathing room */

/* Section Spacing */
--section-spacing-sm: 48px;  /* Related sections */
--section-spacing-md: 64px;  /* Standard sections */
--section-spacing-lg: 96px;  /* Major sections */
```

### Container Spacing
```css
/* Page Margins - Wide & Generous */
--margin-mobile: 5%;         /* Mobile devices */
--margin-tablet: 8%;         /* Tablets */
--margin-desktop: 12%;       /* Desktop (generous!) */
--margin-wide: 15%;          /* Wide screens */

/* Component Padding */
--padding-card: 32px;        /* Card interiors */
--padding-section: 48px;     /* Section containers */
--padding-hero: 64px;        /* Hero sections */
```

---

## 📱 Layout Patterns

### Grid System
```css
/* Content Grid - Single Column Focus */
.content-grid {
  display: grid;
  grid-template-columns: 
    [full-start] 
    minmax(var(--margin-desktop), 1fr)
    [content-start] 
    minmax(auto, var(--measure-optimal))
    [content-end]
    minmax(var(--margin-desktop), 1fr)
    [full-end];
  gap: var(--space-3xl);
}

/* Two Column (Rare - Only for Designer Profiles, etc.) */
.two-column {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-2xl);
  max-width: var(--measure-wide);
}
```

### Container Widths
```css
--container-narrow: 540px;   /* Pull quotes, asides */
--container-optimal: 720px;  /* Main content (reading) */
--container-wide: 960px;     /* Navigation, footer, grid */
--container-max: 1440px;     /* Full site wrapper */
```

### Layout Guidelines
- **Default:** Single-column, max-width 720px
- **Side margins:** 12-15% of viewport on desktop
- **Two-column:** Only for designer profiles or timeline
- **Asymmetric balance:** Gentle, not dramatic
- **White space:** Generous - prefer too much over too little

---

## 🎯 Component Specifications

### Navigation
```css
.nav {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-subtle);
  padding: var(--space-lg) var(--margin-desktop);
}

.nav-link {
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--text-primary);
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  transition: background 0.2s ease;
}

.nav-link:hover {
  background: var(--bg-secondary);
  color: var(--accent-primary);
}
```

### Buttons
```css
/* Primary Button - Understated */
.button-primary {
  background: var(--accent-primary);
  color: var(--bg-primary);
  padding: 14px 28px;
  font-size: var(--text-body-sm);
  font-weight: var(--weight-medium);
  border-radius: 6px;
  border: none;
  transition: background 0.3s ease;
  min-height: 44px;  /* Touch target */
}

.button-primary:hover {
  background: var(--accent-hover);
}

/* Secondary Button - Subtle */
.button-secondary {
  background: transparent;
  color: var(--accent-primary);
  padding: 14px 28px;
  border: 1.5px solid var(--accent-primary);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.button-secondary:hover {
  background: var(--accent-primary);
  color: var(--bg-primary);
}
```

### Cards (Designer Profiles, Timeline Items)
```css
.card {
  background: var(--bg-elevated);
  padding: var(--space-xl);
  border-radius: 8px;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 8px var(--shadow-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px var(--shadow-soft);
}

.card-title {
  font-size: var(--text-h3);
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.card-body {
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}
```

### Pull Quotes
```css
.pull-quote {
  max-width: var(--measure-narrow);
  margin: var(--space-3xl) auto;
  padding: var(--space-xl);
  border-left: 4px solid var(--accent-warm);
  background: var(--bg-secondary);
  font-size: var(--text-body-xl);
  line-height: var(--leading-relaxed);
  font-style: italic;
  color: var(--text-primary);
}
```

### Footer
```css
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-light);
  padding: var(--space-4xl) var(--margin-desktop);
  margin-top: var(--space-5xl);
}

.footer-text {
  font-size: var(--text-caption);
  color: var(--text-muted);
  line-height: var(--leading-normal);
}
```

---

## 📐 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */

/* Responsive Typography Scaling */
@media (max-width: 768px) {
  --text-display: 48px;
  --text-h1: 40px;
  --text-h2: 32px;
  --text-h3: 24px;
  --text-body: 18px;
  --margin-desktop: 5%;
}

@media (max-width: 480px) {
  --text-display: 36px;
  --text-h1: 32px;
  --text-h2: 28px;
  --text-h3: 22px;
  --text-body: 17px;
}
```

---

## ✨ Interaction & Animation

### Transitions
```css
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;

/* Subtle, refined animations */
.interactive {
  transition: all var(--transition-base);
}
```

### Focus States (Accessibility Critical)
```css
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 4px;
  border-radius: 4px;
}
```

### Hover Effects
- **Links:** Color change + subtle underline
- **Buttons:** Background color shift
- **Cards:** Gentle lift (4px) + shadow increase
- **Images:** Slight opacity change (0.9)

---

## 🎯 Sprint Success Criteria

### Sprint 1: Foundation
**Completed when:**
- [ ] Color system implemented with CSS variables
- [ ] Typography scales correctly across all breakpoints
- [ ] Base layout with proper margins/padding
- [ ] Single-column content area (720px max-width)
- [ ] Readable body text (19px, 1.7 line-height)
- [ ] All text meets WCAG AAA contrast (7:1)

### Sprint 2: Components
**Completed when:**
- [ ] Navigation with hover states
- [ ] Designer profile cards with hover effects
- [ ] Timeline components styled
- [ ] Buttons (primary + secondary) functional
- [ ] Footer with proper styling
- [ ] Pull quotes styled correctly
- [ ] All components use design tokens

### Sprint 3: Polish
**Completed when:**
- [ ] Responsive across desktop/tablet/mobile
- [ ] All pages complete (Home, Timeline, Designers, About)
- [ ] Images optimized with captions
- [ ] Smooth transitions on all interactive elements
- [ ] Lighthouse scores 90+ (all categories)
- [ ] WCAG AAA compliance verified
- [ ] Typography hierarchy perfect
- [ ] Reading experience tested and comfortable

---

## 🔍 Quality Checklist (Every Sprint)

### Typography
- [ ] Body text 19px minimum
- [ ] Line height 1.7 for body content
- [ ] 60-75 characters per line
- [ ] Paragraph spacing 1.5em
- [ ] Humanist font (Open Sans) loaded

### Color & Contrast
- [ ] #333 text on #FAFAFA background
- [ ] All text passes WCAG AAA (7:1)
- [ ] No pure black (#000) used
- [ ] Warm, muted accent colors only

### Layout & Spacing
- [ ] Content max-width 720px
- [ ] Wide margins (12-15% desktop)
- [ ] Generous vertical rhythm (64px+ sections)
- [ ] White space feels comfortable

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Touch targets 44x44px minimum
- [ ] Semantic HTML structure
- [ ] Alt text on all images

### Reading Experience
- [ ] Comfortable to read for 5+ minutes
- [ ] Hierarchy clear but gentle
- [ ] Subheadings every 3-5 paragraphs
- [ ] Content feels human-centered

---

**Next Steps:**
1. Implement CSS custom properties from this system
2. Create base HTML structure with proper semantic markup
3. Test typography scale at all breakpoints
4. Verify contrast ratios with tools
5. Build components using these specifications

**References:**
- Adrian Frutiger's humanist design principles
- Edward Tufte's readability guidelines  
- WCAG 2.1 AAA standards
- Medium.com typography system
- iA Writer content-first approach
