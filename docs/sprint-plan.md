# Sprint Plan: Humanist Modernism Iterative Refinement

**Project:** Humanist Modernism Website  
**Phase:** Sprints 1-3 (Post-Foundation Refinement)  
**Total Time Budget:** 6 hours (2 hours per sprint)  
**Start Date:** November 13, 2025  
**Foundation Status:** ✅ Complete (MOCKUP-FOUNDATION-COMPLETE.md)

---

## Overview

This sprint plan transforms the **functional foundation** into an **exemplary Humanist Modernism implementation**. Each sprint includes iterative cycles of review, refinement, testing, and documentation.

**Success Criteria:**

- True Humanist Modernism character achieved (warm, readable, human-centered)
- Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 95+, SEO 95+
- Responsive excellence across all devices (mobile-first)
- Clear before/after visual documentation

---

## Sprint Structure (Each Sprint)

### Iteration Cycle

1. **Review** (15 min) - Assess current state against Humanist Modernism principles
2. **Refine** (60 min) - Implement improvements (typography, spacing, colors, components)
3. **Screenshot** (10 min) - Document before/after comparisons
4. **Test** (20 min) - Accessibility, responsiveness, performance checks
5. **Commit** (15 min) - Git commit with detailed notes and learning outcomes

**Total per sprint:** ~2 hours

---

## Sprint 1: Foundation Refinement (2 hours)

**Focus:** Desktop-first excellence in layout, typography, color, and spacing

### Goals

#### 1. Typography Enhancement (40 min)

**Current State:** Basic Open Sans implementation with standard scales

**Refinement Targets:**

- [ ] **Font Selection:**
  - Verify Open Sans is optimal humanist choice (or consider Frutiger, Avenir, Source Sans)
  - Ensure proper OpenType features enabled (kerning, ligatures)
  - Test font-display strategy (swap vs optional)
- [ ] **Type Scale Refinement:**
  - Adjust fluid scale for optimal readability (current: 14-60px)
  - Target: Display (48-64px), H1 (36-48px), H2 (28-36px), H3 (22-28px)
  - Body text: Maintain 19px base (optimal readability)
  - Increase line-height to 1.75-1.8 for warmth and breathing room
- [ ] **Hierarchy Clarity:**
  - Ensure clear visual distinction between all heading levels
  - Test hierarchy on homepage, blog, and content pages
  - Add subtle font-weight variations (400 body, 600 headings, 700 strong)
- [ ] **Reading Experience:**
  - Verify max-width 65-75 characters for long-form content
  - Add text-wrap: balance for headlines
  - Test hyphenation on mobile (auto, with proper rules)

**Success Criteria:**

- Typography feels warm and inviting (not cold/mechanical)
- Clear hierarchy without stark contrast
- Comfortable reading experience on all devices
- Passes readability metrics (Flesch-Kincaid grade appropriate)

#### 2. Color Harmony Improvements (30 min)

**Current State:** Warm neutrals (#FAFAFA, #F5F5F0) with blue accent (#2C5F8D)

**Refinement Targets:**

- [ ] **Background Warmth:**
  - Adjust background tones for more organic warmth
  - Test: #FAF9F7 (warmer white), #F5F4F0 (warm gray)
  - Ensure sufficient contrast with text (WCAG AAA if possible)
- [ ] **Text Color Humanity:**
  - Soften pure black (#333333) to warmer dark gray (#2D2D2D or #3A3A3A)
  - Adjust secondary text (#5A5A5A) for optimal WCAG AA contrast
  - Test muted text colors for captions, metadata
- [ ] **Accent Color Refinement:**
  - Evaluate blue accent (#2C5F8D) - is it warm enough?
  - Consider: Warm teal (#2C7A7B), Sage (#4A7766), Warm blue (#3182CE)
  - Ensure accent passes 4.5:1 contrast on light backgrounds
- [ ] **Supporting Colors:**
  - Refine sage (#6B8E7F), warm (#C4A676), earth (#8B7355) tones
  - Test in borders, highlights, hover states
  - Create cohesive palette that feels organic and natural

**Success Criteria:**

- Color palette feels warm, organic, and approachable
- All contrast ratios meet or exceed WCAG AA (4.5:1 text, 3:1 UI)
- Accent color enhances without overwhelming
- Colors work harmoniously across all pages

#### 3. Layout Refinement (30 min)

**Current State:** Basic grid with sections, cards, and content blocks

**Refinement Targets:**

- [ ] **Whitespace Generosity:**
  - Increase section padding: Mobile 80px → 96px, Desktop 120px → 144px
  - Add breathing room between content blocks (+16px-24px)
  - Ensure comfortable spacing around all elements
- [ ] **Grid Flexibility:**
  - Review 12-column grid usage - ensure it serves content, not constrains
  - Allow organic flow where appropriate (not rigid Swiss precision)
  - Test asymmetric layouts with human-friendly proportions
- [ ] **Content Flow:**
  - Ensure natural reading order (F-pattern, Z-pattern awareness)
  - Add visual rhythm through varied content block sizes
  - Test vertical rhythm with consistent baseline grid
- [ ] **Desktop Excellence:**
  - Optimize for 1440px+ displays (primary focus this sprint)
  - Ensure max-width containers feel generous (1200px-1280px)
  - Test on 1920px+ displays for proper centering and margins

**Success Criteria:**

- Layout feels spacious and uncluttered
- Content breathes with generous whitespace
- Natural flow guides eye through pages
- Desktop experience is polished and professional

#### 4. Component Baseline (20 min)

**Quick component audit before deep dive in Sprint 2:**

- [ ] **Navigation:** Identify improvements needed (spacing, hover states, mobile)
- [ ] **Cards:** Note shadow, border, padding refinements needed
- [ ] **Buttons:** List interaction states to improve
- [ ] **Footer:** Assess spacing and hierarchy needs
- [ ] **Forms:** Check input styling consistency (if applicable)

**Deliverable:** Checklist of component improvements for Sprint 2

### Sprint 1 Success Criteria

- [ ] Typography system feels warm and readable (not mechanical)
- [ ] Color palette creates organic, approachable atmosphere
- [ ] Layout has generous whitespace and natural flow
- [ ] Desktop experience (1440px) is exemplary
- [ ] Foundation passes Lighthouse: P:90+, A:100, BP:95+, SEO:95+
- [ ] Before/after screenshots show clear improvement
- [ ] Commit includes detailed refinement notes

### Sprint 1 Deliverables

1. **Updated Tailwind config** with refined design tokens
2. **Updated CSS** with improved typography and spacing
3. **Screenshot comparison** (before/after) - homepage desktop
4. **Git commit** with detailed notes on changes
5. **Component checklist** for Sprint 2

---

## Sprint 2: Component Excellence (2 hours)

**Focus:** Polish all interactive components with Humanist Modernism character

### Goals

#### 1. Navigation Enhancement (30 min)

**Current State:** Basic header with links

**Refinement Targets:**

- [ ] **Desktop Navigation:**
  - Improve spacing between nav items (3rem → 4rem for breathing room)
  - Refine hover states (gentle background, not jarring underlines)
  - Add smooth color transitions (250ms ease)
  - Ensure active page indicator is subtle but clear
  - Test focus indicators for keyboard navigation (visible, attractive)
- [ ] **Mobile Navigation:**
  - Enhance hamburger menu design (44x44px minimum touch target)
  - Improve full-screen overlay aesthetics (warm background, not stark)
  - Add smooth open/close transitions
  - Ensure menu items have generous touch targets (48px+ height)
  - Test gesture interactions (swipe to close)
- [ ] **Logo/Brand:**
  - Refine typography and sizing
  - Ensure it feels personal and warm (not corporate)
  - Test hover states and transitions
- [ ] **Sticky Behavior:**
  - Test sticky header on scroll (if implemented)
  - Ensure smooth transition and no layout shift
  - Consider subtle shadow or border when scrolled

**Success Criteria:**

- Navigation feels intuitive and welcoming
- Hover/focus states are gentle and clear
- Mobile menu is easy to use on touch devices
- Passes keyboard navigation testing

#### 2. Card & Content Block Improvements (35 min)

**Current State:** Basic cards with borders and shadows

**Refinement Targets:**

- [ ] **Card Design:**
  - Soften shadows (subtle, natural light source)
  - Refine border radius (8px for warmth, not sharp 0px)
  - Adjust padding for content breathing room (32px-48px)
  - Ensure hover states are subtle (lift 2-4px, shadow increase)
- [ ] **Project Cards:**
  - Add accent color highlights (subtle left border or top bar)
  - Improve typography hierarchy within cards
  - Test image placement and aspect ratios (if used)
  - Ensure metadata (date, tags) is readable but not dominant
- [ ] **Blog Post Cards:**
  - Refine date formatting and placement
  - Improve excerpt length and readability
  - Add read-time indicators (if applicable)
  - Test hover states on entire card vs just title
- [ ] **Content Blocks:**
  - Review blockquote styling (left border, italic, proper spacing)
  - Improve list styling (bullets, spacing, indentation)
  - Refine code blocks (if applicable) - warm background, readable font
  - Test callout/aside components for visual interest

**Success Criteria:**

- Cards feel warm and inviting (not cold/sterile)
- Hover states provide clear affordance
- Content blocks have clear visual hierarchy
- Spacing creates comfortable reading rhythm

#### 3. Button & Link Refinements (25 min)

**Current State:** Basic button styles with primary/secondary variants

**Refinement Targets:**

- [ ] **Button Design:**
  - Soften button borders (4px radius minimum)
  - Adjust padding for generous touch targets (16px vertical, 32px horizontal)
  - Refine color combinations (background, text, border)
  - Test hover states (subtle color shift, not jarring)
  - Add focus states with visible outline (accessibility)
- [ ] **Button States:**
  - Default: Clear and inviting
  - Hover: Subtle warmth increase (darker/lighter depending on variant)
  - Active/Pressed: Clear feedback
  - Disabled: 60% opacity with cursor:not-allowed
  - Focus: 2px outline with 2px offset (WCAG)
- [ ] **Link Styling:**
  - Inline links: Test underline styles (solid, offset, or on-hover)
  - Link colors: Ensure warmth and sufficient contrast
  - Hover states: Subtle color change or underline animation
  - Visited links: Slightly muted but still readable
- [ ] **Call-to-Action:**
  - Ensure primary CTAs stand out appropriately
  - Test button vs link usage (semantic appropriateness)
  - Verify touch targets meet 44x44px minimum (mobile)

**Success Criteria:**

- Buttons feel tactile and inviting
- Clear visual feedback for all interaction states
- Links are easily identifiable and accessible
- All interactive elements meet WCAG touch target minimums

#### 4. Footer Polish (30 min)

**Current State:** Basic footer with navigation and copyright

**Refinement Targets:**

- [ ] **Footer Layout:**
  - Review grid structure (3-4 columns desktop, stacked mobile)
  - Ensure generous spacing between sections
  - Test vertical padding (top and bottom)
  - Add subtle top border or section divider
- [ ] **Footer Content:**
  - Refine navigation link hierarchy
  - Improve social media icon styling (size, spacing, hover)
  - Test email/contact link prominence
  - Ensure copyright and credits are readable but subtle
- [ ] **Footer Typography:**
  - Slightly smaller body text (16px vs 19px)
  - Adjust line-height for compact but readable footer
  - Test heading styles in footer sections
  - Ensure link colors work on footer background
- [ ] **Footer Atmosphere:**
  - Consider warmer background color (#F5F4F0 vs pure white)
  - Test contrast ratios for all text colors
  - Add visual interest without clutter (accent colors, subtle patterns)
  - Ensure mobile footer is well-spaced and readable

**Success Criteria:**

- Footer feels complete and professional
- Easy to scan and find links
- Warm aesthetic matches overall site character
- Mobile footer is usable and well-organized

### Sprint 2 Success Criteria

- [ ] All components have Humanist Modernism character
- [ ] Interaction states are clear and delightful
- [ ] Mobile components are touch-friendly (44x44px+ targets)
- [ ] Components tested across Chrome, Firefox, Safari
- [ ] Lighthouse scores maintained: P:90+, A:100, BP:95+, SEO:95+
- [ ] Before/after screenshots show component improvements
- [ ] Commit includes component refinement documentation

### Sprint 2 Deliverables

1. **Updated component CSS** in main.css
2. **Updated component templates** (.njk files)
3. **Screenshot comparison** - component showcase page
4. **Git commit** with component refinement notes
5. **Mobile testing checklist** completed

---

## Sprint 3: Final Polish & Optimization (2 hours)

**Focus:** Mobile excellence, responsive optimization, performance, and accessibility

### Goals

#### 1. Responsive Optimization (45 min)

**Current State:** Mobile-first base with basic responsiveness

**Refinement Targets:**

- [ ] **Mobile Portrait (320px-639px):**
  - Test typography scaling on small screens
  - Ensure touch targets are generous (48px+ height)
  - Verify spacing feels comfortable (not cramped)
  - Test navigation on iPhone SE, small Androids
  - Ensure no horizontal scroll or overflow
- [ ] **Mobile Landscape / Small Tablet (640px-767px):**
  - Test layout shifts and card arrangements
  - Verify navigation remains usable
  - Ensure images scale appropriately
  - Test on iPad Mini, small tablets
- [ ] **Tablet (768px-1023px):**
  - Optimize two-column layouts
  - Test card grid arrangements (2-up)
  - Verify navigation transition (mobile vs desktop)
  - Test on iPad, Android tablets
- [ ] **Desktop (1024px+):**
  - Verify three-column layouts where appropriate
  - Test max-width container behavior
  - Ensure proper scaling on 1440px, 1920px displays
  - Test ultra-wide screens (2560px+) - does content center properly?
- [ ] **Fluid Typography:**
  - Test clamp() functions across all breakpoints
  - Ensure smooth scaling (no sudden jumps)
  - Verify readability at all sizes
  - Test line-length stays within 65-75 characters

**Success Criteria:**

- Flawless experience on mobile devices (primary focus)
- Smooth transitions between breakpoints
- No layout shift or broken designs at any width
- Typography remains readable at all sizes

#### 2. Performance Optimization (30 min)

**Current State:** Static site with Tailwind CSS

**Refinement Targets:**

- [ ] **CSS Optimization:**
  - Run Tailwind purge to remove unused styles
  - Verify minification in production build
  - Test gzip/brotli compression (if deploying with headers)
  - Check final CSS bundle size (target: <50KB compressed)
- [ ] **Font Loading:**
  - Verify preconnect to Google Fonts
  - Test font-display: swap strategy
  - Consider self-hosting fonts for performance
  - Ensure FOUT (Flash of Unstyled Text) is minimal
- [ ] **Images (if applicable):**
  - Optimize all images (WebP with fallbacks)
  - Add lazy loading attributes
  - Ensure proper width/height to prevent CLS
  - Test responsive image srcsets
- [ ] **Build Performance:**
  - Verify Eleventy build time (<5 seconds)
  - Test incremental builds during development
  - Check _site output size (target: <2MB total)
- [ ] **Lighthouse Audit:**
  - Run Lighthouse on all pages (homepage, about, blog, post)
  - Target: Performance 90+, Accessibility 100, Best Practices 95+, SEO 95+
  - Fix any issues identified (render-blocking, CLS, etc.)
  - Test on mobile and desktop separately

**Success Criteria:**

- Lighthouse Performance 90+ on all pages
- First Contentful Paint <1.5s
- Cumulative Layout Shift <0.1
- Total page size <500KB (excluding fonts)

#### 3. Accessibility Improvements (30 min)

**Current State:** WCAG AA baseline compliance

**Refinement Targets:**

- [ ] **Keyboard Navigation:**
  - Test full site with keyboard only (no mouse)
  - Verify Tab order is logical on all pages
  - Ensure skip-to-content link works and is visible on focus
  - Test Escape key closes mobile menu
  - Verify focus indicators are visible on all interactive elements
- [ ] **Screen Reader Testing:**
  - Test with NVDA (Windows) or VoiceOver (Mac)
  - Verify heading hierarchy makes sense (h1 → h2 → h3)
  - Ensure ARIA labels are descriptive
  - Test landmark navigation (header, nav, main, footer)
  - Verify lists are properly marked up (ul, ol, dl)
- [ ] **Color Contrast:**
  - Re-verify all text meets WCAG AA (4.5:1 minimum)
  - Check UI components (3:1 minimum)
  - Test in grayscale mode (does hierarchy remain clear?)
  - Verify color is not sole indicator of information
- [ ] **Motion & Animation:**
  - Ensure prefers-reduced-motion is respected
  - Test with reduced motion enabled
  - Verify no flashing content (3Hz threshold)
  - Ensure parallax/animations are subtle
- [ ] **Forms (if applicable):**
  - Verify all inputs have associated labels
  - Test error messages are clear and accessible
  - Ensure form validation is helpful
  - Test with keyboard and screen reader

**Success Criteria:**

- Lighthouse Accessibility 100 on all pages
- Full keyboard navigation support
- Screen reader announces content logically
- All color contrast ratios meet WCAG AA minimum
- Supports prefers-reduced-motion

#### 4. Quality Assurance & Final Checks (15 min)

**Final QA Checklist:**

- [ ] **Content Review:**
  - Proofread all text for typos and grammar
  - Verify all links work (internal and external)
  - Test 404 page functionality
  - Ensure blog posts have dates and proper metadata
- [ ] **Cross-Browser Testing:**
  - Test in Chrome (latest)
  - Test in Firefox (latest)
  - Test in Safari (desktop and iOS)
  - Test in Edge (Chromium)
  - Test in at least one mobile browser (Safari iOS or Chrome Android)
- [ ] **Responsive Testing:**
  - Test all pages at key breakpoints (320px, 375px, 768px, 1024px, 1440px)
  - Use browser DevTools responsive mode
  - Test on real devices if available
  - Verify no horizontal scroll at any width
- [ ] **SEO Verification:**
  - Verify all pages have unique titles
  - Check meta descriptions are present and descriptive
  - Ensure robots.txt is accessible
  - Test canonical URLs
  - Verify Open Graph tags (if applicable)
- [ ] **Build & Deployment:**
  - Test production build (`npm run build`)
  - Verify no console errors in browser
  - Check GitHub Actions deployment workflow
  - Test live site after deployment
  - Verify custom domain works (if applicable)

**Success Criteria:**

- No broken links or console errors
- Works perfectly in all major browsers
- Responsive at all screen sizes
- All SEO metadata present
- Successful deployment to GitHub Pages

### Sprint 3 Success Criteria

- [ ] Flawless mobile experience (primary success metric)
- [ ] Lighthouse: P:90+, A:100, BP:95+, SEO:95+ on all pages
- [ ] Full keyboard and screen reader support
- [ ] Cross-browser compatibility verified
- [ ] All pages tested at all breakpoints
- [ ] Before/after screenshots show mobile improvements
- [ ] Final commit includes comprehensive QA report

### Sprint 3 Deliverables

1. **Responsive CSS refinements** in main.css and Tailwind config
2. **Accessibility improvements** in templates and markup
3. **Screenshot comparison** - mobile before/after (homepage, blog post)
4. **Lighthouse report summary** for all pages
5. **Final QA checklist** completed
6. **Git commit** with Sprint 3 completion notes
7. **SPRINTS-COMPLETE.md** summary document (optional)

---

## Visual Documentation Requirements

### Screenshots (Each Sprint)

**Before/After Comparisons:**

- Capture at key breakpoints: 375px (mobile), 768px (tablet), 1440px (desktop)
- Show entire page (full-length screenshot)
- Highlight specific component improvements in detail shots
- Save in `/research/screenshots/sprint-X/` directory

**Format:**

```
sprint-1-before-homepage-desktop.png
sprint-1-after-homepage-desktop.png
sprint-2-before-navigation-mobile.png
sprint-2-after-navigation-mobile.png
sprint-3-before-blog-mobile.png
sprint-3-after-blog-mobile.png
```

### Commit Messages

**Format:**

```
sprint-X: [component/area] refinement - [brief description]

Changes:
- Specific change 1
- Specific change 2
- Specific change 3

Humanist Modernism Goals:
- How this improves warmth/readability/human-centeredness

Testing:
- What was tested and results

Metrics:
- Lighthouse scores (if relevant)
- Before/after comparison
```

---

## Success Metrics Summary

### Lighthouse Targets (All Pages)

- **Performance:** 90+ (target: 95+)
- **Accessibility:** 100 (mandatory)
- **Best Practices:** 95+ (target: 100)
- **SEO:** 95+ (target: 100)

### Humanist Modernism Criteria

- [ ] Typography feels warm and inviting (not cold/mechanical)
- [ ] Color palette creates organic, approachable atmosphere
- [ ] Layout has generous whitespace and breathing room
- [ ] Components feel tactile and human-friendly
- [ ] Interactions are smooth and delightful
- [ ] Mobile experience is excellent (not just functional)
- [ ] Content is easy to read and navigate
- [ ] Overall impression: "This was made for humans, by humans"

### Accessibility Criteria

- [ ] WCAG 2.1 AA compliance (minimum)
- [ ] Full keyboard navigation support
- [ ] Screen reader compatibility verified
- [ ] Color contrast ratios exceed minimums
- [ ] Touch targets meet 44x44px minimum
- [ ] Respects prefers-reduced-motion

### Technical Criteria

- [ ] Valid HTML5 markup
- [ ] No console errors or warnings
- [ ] CSS is organized and maintainable
- [ ] Build process is fast (<5s)
- [ ] Deployment is automated and reliable

---

## Risk Mitigation

### Potential Challenges

1. **Time Overruns:**
   - **Mitigation:** Set 15-minute timers for each task, move to next if over
   - Use pomodoro technique (25 min work, 5 min break)
   - Focus on "good enough" vs "perfect" in iteration 1

2. **Scope Creep:**
   - **Mitigation:** Stick to sprint goals, document "nice-to-haves" for later
   - Don't add new features during refinement sprints
   - Focus on improving existing foundation

3. **Browser Inconsistencies:**
   - **Mitigation:** Test early and often in multiple browsers
   - Use autoprefixer for CSS compatibility
   - Focus on modern browsers (last 2 versions)

4. **Accessibility Gaps:**
   - **Mitigation:** Test with keyboard/screen reader frequently
   - Use automated tools (axe DevTools, Lighthouse)
   - Reference WCAG quick reference when uncertain

5. **Performance Regressions:**
   - **Mitigation:** Run Lighthouse after each major change
   - Keep eye on bundle sizes
   - Test on throttled connections (Slow 3G in DevTools)

---

## Post-Sprint Review

### After Each Sprint

**Review Questions:**

1. Did we achieve the sprint goals? (Yes/No for each goal)
2. What Humanist Modernism principles were strengthened?
3. What challenges did we encounter?
4. What would we do differently next sprint?
5. Are we on track for overall project completion?

**Metrics to Record:**

- Time spent vs estimated
- Lighthouse score improvements
- Number of accessibility issues fixed
- Commits made
- Screenshots captured

### Final Project Review (After Sprint 3)

**Comprehensive Assessment:**

1. **Does the site embody Humanist Modernism?**
   - Warm, readable, human-centered?
   - Different enough from Swiss Design foundation?
   - Authentic to the style principles?

2. **Technical Excellence:**
   - Lighthouse scores meet targets?
   - Accessible to all users?
   - Performance optimized?

3. **Craft & Polish:**
   - Attention to detail evident?
   - Consistent design system?
   - Professional quality?

4. **Learning Outcomes:**
   - What did you learn about Humanist Modernism?
   - What web development skills improved?
   - What would you do differently next time?

---

## Timeline & Milestones

| Phase            | Duration | Completion Target | Status |
| ---------------- | -------- | ----------------- | ------ |
| Phase 1: Mockup  | 2 hours  | Nov 11, 2025      | ✅     |
| Phase 2: Content | N/A      | (Integrated)      | ✅     |
| Phase 3: Plan    | 30 min   | Nov 13, 2025      | 🔄     |
| Sprint 1         | 2 hours  | Nov 13, 2025      | ⏳     |
| Sprint 2         | 2 hours  | Nov 14, 2025      | ⏳     |
| Sprint 3         | 2 hours  | Nov 14, 2025      | ⏳     |
| Final Review     | 30 min   | Nov 14, 2025      | ⏳     |
| **Total**        | **9 hrs**| **Nov 14, 2025**  |        |

---

## Resources & References

### Humanist Modernism Principles

- `/research/HUMANIST-MODERNISM-GUIDE.md` - Core principles and examples
- `/research/design-system.md` - Design tokens and system
- `/research/MOCKUP-FOUNDATION-COMPLETE.md` - Current state baseline

### Technical References

- `/research/base-design-system-specification.md` - Universal requirements
- `/research/swiss-style-technical-specification.md` - Reference implementation
- Eleventy Docs: https://www.11ty.dev/docs/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Design Inspiration

- iA Writer: https://ia.net/writer
- Medium.com: Typography and reading experience
- Edward Tufte: Information design principles
- Oliver Reichenstein: Content-first philosophy

### Testing Tools

- Lighthouse (Chrome DevTools)
- axe DevTools (browser extension)
- WAVE (web accessibility evaluation)
- WebPageTest (performance testing)
- NVDA (screen reader - Windows)
- VoiceOver (screen reader - Mac)

---

## Appendix: Iteration Templates

### Sprint 1: Typography Refinement Example

```css
/* BEFORE */
font-family: 'Open Sans', sans-serif;
font-size: 19px;
line-height: 1.7;

/* AFTER - More warmth and breathing room */
font-family: 'Open Sans', system-ui, -apple-system, sans-serif;
font-size: clamp(1rem, 0.5vw + 0.875rem, 1.1875rem); /* 16-19px */
line-height: 1.75; /* Increased for warmth */
font-feature-settings: "kern" 1, "liga" 1; /* OpenType features */
```

### Sprint 2: Button Refinement Example

```css
/* BEFORE */
background: #2C5F8D;
color: white;
padding: 12px 24px;
border-radius: 0;

/* AFTER - Warmer and more inviting */
background: #3182CE; /* Warmer blue */
color: white;
padding: 16px 32px; /* More generous */
border-radius: 6px; /* Soft corners */
transition: all 250ms ease;
box-shadow: 0 1px 3px rgba(0,0,0,0.1);

/* Hover state - subtle warmth increase */
&:hover {
  background: #2C5F8D; /* Slightly darker */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}
```

### Sprint 3: Mobile Optimization Example

```css
/* Mobile-first responsive spacing */
.section-padding {
  padding: clamp(4rem, 10vw, 6rem) clamp(1rem, 4vw, 2rem);
}

/* Touch-friendly navigation */
.nav-link {
  min-height: 48px; /* WCAG minimum */
  padding: 12px 16px;
  display: flex;
  align-items: center;
}
```

---

**End of Sprint Plan**

This document serves as the roadmap for transforming the functional foundation into an exemplary Humanist Modernism implementation. Each sprint builds on the previous, creating a cohesive, polished, and human-centered website.

**Ready to begin Sprint 1!** 🚀
