# Sprint 2 Component Improvement Checklist

**Generated:** Sprint 1 Completion  
**Purpose:** Systematic component refinement roadmap for Sprint 2

---

## Navigation Component

### Desktop Navigation

- [ ] **Spacing:** Increase nav-link horizontal padding from current to 1.5rem (more breathing room)
- [ ] **Hover States:** Refine background transition - use bg-secondary with subtle scale
- [ ] **Active Indicator:** Add bottom border (2px accent-primary) for current page
- [ ] **Logo:** Test font-weight variations (700 vs 600), ensure warmth
- [ ] **Sticky Behavior:** Verify backdrop-blur is subtle, test shadow on scroll

### Mobile Navigation

- [ ] **Hamburger Icon:** Ensure 48x48px touch target (currently needs verification)
- [ ] **Menu Overlay:** Test background color warmth (bg-primary vs bg-secondary)
- [ ] **Menu Items:** Verify generous vertical padding (min 16px)
- [ ] **Transitions:** Smooth slide-in animation (transform + opacity)
- [ ] **Close Button:** Clear X icon with proper accessibility label

### Navigation Accessibility

- [ ] **Keyboard Nav:** Tab order logical, skip-to-content visible on focus
- [ ] **ARIA Labels:** aria-current on active page, aria-expanded on mobile toggle
- [ ] **Focus Indicators:** 2px outline with 2px offset, visible on all links

---

## Card Components

### Project Cards

- [ ] **Shadow Refinement:** Current soft shadow is good, verify on hover (increase subtly)
- [ ] **Padding:** Verify clamp(2rem, 4vw, 3rem) feels generous on all screens
- [ ] **Hover Effect:** Test translateY(-2px) with shadow increase - feels natural?
- [ ] **Border:** Consider accent-light left border (2px) for visual interest
- [ ] **Typography:** Ensure h3 titles have proper spacing below (1rem minimum)

### Blog Post Cards/List Items

- [ ] **Date Formatting:** Style as uppercase, small, muted color
- [ ] **Excerpt Length:** Verify ~150-200 characters with proper truncation
- [ ] **Read Time:** Add if applicable, styled as caption text
- [ ] **Hover States:** Test whether entire card or just title should be hoverable
- [ ] **Spacing:** Verify vertical rhythm between list items (2rem minimum)

### Content Blocks

- [ ] **Blockquotes:** 4px left border accent-warm, italic, generous padding
- [ ] **Lists:** Custom bullet (→) in accent-primary, proper indentation
- [ ] **Code Blocks:** Warm background (bg-tertiary), proper padding, monospace
- [ ] **Images:** Verify lazy loading, proper aspect ratios, rounded corners

---

## Button & Link Components

### Primary Buttons

- [ ] **Size Variants:** Create sm, base, lg sizes (all meeting 44px min height)
- [ ] **Icon Support:** Test buttons with leading/trailing icons, proper gap
- [ ] **Loading States:** Consider spinner or disabled state styling
- [ ] **Focus States:** Verify outline is visible and attractive

### Secondary Buttons

- [ ] **Border:** Current 1.5px is good, verify color on hover
- [ ] **Hover Transition:** Test background fill speed (250ms feels right?)
- [ ] **Variants:** Consider outline-only vs subtle background versions

### Text Links

- [ ] **Inline Links:** Test underline styles (always vs hover-only)
- [ ] **Color:** Accent-primary with hover to accent-hover
- [ ] **Visited Links:** Slightly muted but still readable
- [ ] **External Links:** Consider icon indicator for external links

### Touch Targets (Mobile)

- [ ] **Minimum Size:** All interactive elements 48x48px minimum
- [ ] **Spacing:** Adequate gaps between adjacent touch targets (8px min)
- [ ] **Feedback:** Clear visual feedback on tap (active states)

---

## Footer Component

### Layout

- [ ] **Grid Structure:** Test 3-column desktop, 1-column mobile
- [ ] **Section Spacing:** Generous gaps between columns (3rem+)
- [ ] **Vertical Padding:** clamp(4rem, 8vw, 6rem) - verify feels comfortable
- [ ] **Max Width:** Should footer be full-width or contained?

### Content

- [ ] **Nav Links:** Group by category (Site, Legal, Social)
- [ ] **Social Icons:** 24x24px minimum, proper hover states, accessible labels
- [ ] **Email/Contact:** Make visually prominent but not overwhelming
- [ ] **Copyright:** Small, muted, but readable

### Typography

- [ ] **Body Text:** Slightly smaller than main (16px base)
- [ ] **Headings:** If used, should be subtle (h4 or h5 level)
- [ ] **Link Color:** Verify contrast on bg-secondary background
- [ ] **Line Height:** 1.6-1.7 for comfortable reading

### Atmosphere

- [ ] **Background:** bg-secondary works, test bg-tertiary for contrast
- [ ] **Border:** Top border is good, verify subtle color choice
- [ ] **Accent Elements:** Consider small sage or warm accent highlights

---

## Form Components (If Applicable)

### Inputs

- [ ] **Height:** 48px minimum for WCAG touch targets
- [ ] **Padding:** 0.75rem horizontal, 1rem vertical (generous)
- [ ] **Border:** 1.5px border-light, 2px accent-primary on focus
- [ ] **Border Radius:** Use button radius (6px) for consistency
- [ ] **Font Size:** 16px minimum to prevent iOS zoom
- [ ] **Placeholders:** Muted color with sufficient contrast (4.5:1 min)

### Labels

- [ ] **Font Weight:** Medium (500) or semibold (600)
- [ ] **Spacing:** 0.5rem below label, above input
- [ ] **Required Indicators:** Clear asterisk or "(required)" text

### Error States

- [ ] **Color:** Use rust accent for errors (not pure red)
- [ ] **Message Styling:** Small text below input, icon + text
- [ ] **Border:** Error state border should be clear (2px rust)

---

## Responsive Considerations

### Mobile (<640px)

- [ ] **Touch Targets:** All buttons/links 48x48px minimum
- [ ] **Font Sizes:** Verify minimum sizes are readable (16px body)
- [ ] **Spacing:** Comfortable padding (not cramped)
- [ ] **Navigation:** Mobile menu must be easy to use

### Tablet (640px-1023px)

- [ ] **Card Grids:** Test 2-column layouts
- [ ] **Navigation:** Decide mobile vs desktop nav breakpoint
- [ ] **Typography:** Verify mid-range scales feel balanced

### Desktop (1024px+)

- [ ] **Card Grids:** 3-column layouts where appropriate
- [ ] **Navigation:** Full horizontal menu, proper spacing
- [ ] **Hover States:** All components have clear hover feedback
- [ ] **Max Width:** Content doesn't stretch too wide on large screens

---

## Testing Checklist (For Sprint 2)

### Visual Consistency

- [ ] All cards use same border-radius (8px)
- [ ] All buttons use same border-radius (6px)
- [ ] All transitions use same duration (250ms)
- [ ] All shadows follow same light source (top-down)

### Interaction Feedback

- [ ] Hover states on all interactive elements
- [ ] Active/pressed states clear
- [ ] Focus states visible for keyboard navigation
- [ ] Disabled states properly styled

### Accessibility

- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] All interactive elements keyboard accessible
- [ ] Touch targets meet minimum size
- [ ] Screen reader labels present where needed

### Cross-Browser

- [ ] Test in Chrome (primary)
- [ ] Test in Firefox
- [ ] Test in Safari (desktop + iOS)
- [ ] Test in Edge

---

## Priority Order for Sprint 2

### High Priority (Must Fix)

1. Navigation hover states and active indicators
2. Card hover effects and shadows
3. Button touch targets and states
4. Footer layout and spacing

### Medium Priority (Should Fix)

5. Link styling consistency
6. Form inputs (if present)
7. Mobile menu enhancements
8. Content block styling (blockquotes, lists)

### Nice to Have (Time Permitting)

9. Icon additions for visual interest
10. Micro-interactions (subtle animations)
11. Loading states for buttons
12. Advanced form validation styling

---

## Notes for Sprint 2

**Key Principles to Maintain:**

- Warmth over precision
- Generous spacing over tight efficiency
- Subtle over dramatic
- Clear over clever
- Accessible over decorative

**Testing Focus:**

- Mobile-first (primary testing on small screens)
- Keyboard navigation (tab through entire site)
- Touch targets (verify 48px minimums)
- Color contrast (run automated checks)

**Time Management:**

- Spend 30 min per major component
- Don't perfect - iterate and improve
- Screenshot before/after each change
- Commit frequently with good messages

---

**Estimated Sprint 2 Time:** 2 hours (as planned)

**This checklist will guide systematic improvements in Sprint 2.**
