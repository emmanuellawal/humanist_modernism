/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      // HUMANIST MODERNISM COLOR PALETTE - ITERATION 2
      // Organic, tactile, natural - derived from paper, ink, and natural light
      // Optimized for warmth, readability, and WCAG AA+
      colors: {
        text: {
          primary: "#383838", // Warm near-black for all text - reduces harshness, complements warm bg
          secondary: "#3A3A3A", // H2-H3 subheadings - subtle hierarchy shift
          body: "#383838", // Body text - consistent warm text color
          muted: "#6B6B6B", // For captions, metadata (WCAG AA 4.54:1)
          inverse: "#FAF9F7", // For text on dark backgrounds - matches page warmth
        },
        bg: {
          primary: "#FAF9F7", // Warmer white - feels like paper, not screen
          secondary: "#F5F4F0", // Warm gray for alternating sections
          tertiary: "#EEEEE8", // Slightly deeper warm neutral
          elevated: "#FFFFFF", // Pure white for cards, elevated surfaces
          dark: "#383838", // For dark sections - matches warm text color
        },
        accent: {
          primary: "#4A7766", // Sage - organic, earthy, humanist quality
          hover: "#3E6656", // Darker sage for tactile hover interactions
          light: "#6B9582", // Lighter sage for subtle highlights
          sage: "#4A7766", // Organic green-gray main accent
          warm: "#C4A676", // Warm gold for highlights, decorative elements
          earth: "#8B7355", // Earthy brown for grounding elements
          rust: "#B86B3E", // Warm rust for visual interest (sparingly)
        },
        border: {
          subtle: "#EEEEE8", // Very soft borders on warm backgrounds
          light: "#DDDDD5", // Standard borders with warmth
          medium: "#BCBCB0", // More prominent borders
          accent: "#4A7766", // Sage accent color borders
        },
      },

      // HUMANIST TYPOGRAPHY SYSTEM
      // Source Sans 3 - refined humanist sans with superior OpenType features
      fontFamily: {
        sans: [
          "Source Sans 3",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },

      // ROBUST FLUID TYPE SCALE
      // Fluid headings for dynamic hierarchy, LOCKED body copy for perfect reading
      fontSize: {
        // Display - hero headlines with dramatic fluid scale
        display: [
          "clamp(2.5rem, 5vw + 1rem, 4.5rem)", // 40px → 72px
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        // H1 - page titles with confident fluid presence
        h1: [
          "clamp(2rem, 4vw + 0.5rem, 3.5rem)", // 32px → 56px
          {
            lineHeight: "1.2",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],
        // H2 - major section headers with warmth
        h2: [
          "clamp(1.5rem, 3vw + 0.5rem, 2.5rem)", // 24px → 40px
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        // H3 - subsection headers with refined scale
        h3: [
          "clamp(1.25rem, 2vw + 0.5rem, 1.875rem)", // 20px → 30px
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // H4 - tertiary headers
        h4: [
          "clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)", // 18px → 24px
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // H5 - quaternary headers (close to body size)
        h5: [
          "clamp(1rem, 1vw + 0.125rem, 1.25rem)", // 16px → 20px
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // BODY XL - Lead paragraphs and introductions (generous fluid range)
        "body-xl": [
          "clamp(1.375rem, 0.75vw + 1.25rem, 1.625rem)", // 22px → 26px (more dramatic)
          {
            lineHeight: "1.8",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        // BODY LG - Comfortable reading size for longer text
        "body-lg": [
          "clamp(1.1875rem, 0.5vw + 1.0625rem, 1.375rem)", // 19px → 22px
          {
            lineHeight: "1.8",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        // BODY - LOCKED at 19px for unwavering reading comfort
        // The anchor point: reading should feel as natural as breathing
        body: [
          "19px", // LOCKED - perfect constant for sustained reading
          {
            lineHeight: "1.8", // 34.2px - generous vertical rhythm
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        // Body SM - For UI elements ONLY, never long-form text
        "body-sm": [
          "clamp(1rem, 0.25vw + 0.9375rem, 1.125rem)", // 16px → 18px (increased from 15-16px)
          {
            lineHeight: "1.75",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        // Caption - metadata, labels (locked small)
        caption: [
          "14px", // LOCKED for consistency in UI elements
          {
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        // Small - fine print (locked tiny)
        small: [
          "13px", // LOCKED for legal/footer text
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // LINE-HEIGHT EXTENSIONS for humanist readability
      lineHeight: {
        comfortable: "1.8", // For body text - generous breathing room
        relaxed: "1.75", // Slightly tighter for UI elements
        generous: "1.85", // For long-form reading
      },

      // OPTIMAL MEASURE - LINE LENGTHS for comfortable reading
      maxWidth: {
        "measure-narrow": "540px", // Narrow columns, sidebars
        "measure-optimal": "720px", // Optimal 65-75 characters at base size
        "measure-wide": "960px", // Wider content, multiple columns
        "container-comfortable": "1280px", // Generous desktop container
        "container-max": "1440px", // Maximum width before too wide
      },

      // SPACING SYSTEM - 8px BASELINE GRID for invisible vertical harmony
      // All spacing is a multiple of 8px to create rhythm the reader feels
      spacing: {
        xs: "0.25rem", // 4px (0.5x) - Minimal internal spacing
        sm: "0.5rem", // 8px (1x) - Baseline unit
        md: "1rem", // 16px (2x) - Standard spacing
        lg: "1.5rem", // 24px (3x) - Comfortable spacing between elements
        xl: "2rem", // 32px (4x) - Generous spacing
        "2xl": "3rem", // 48px (6x) - Section element spacing
        "3xl": "4rem", // 64px (8x) - Small section padding
        "4xl": "6rem", // 96px (12x) - Section padding mobile
        "5xl": "9rem", // 144px (18x) - Section padding desktop - whitespace as framing
        "6xl": "12rem", // 192px (24x) - Large section breaks
        "7xl": "16rem", // 256px (32x) - Hero spacing
        // Vertical rhythm helpers
        "rhythm-1": "0.5rem", // 8px - 1 baseline unit
        "rhythm-2": "1rem", // 16px - 2 baseline units (paragraph spacing)
        "rhythm-3": "1.5rem", // 24px - 3 baseline units (heading to paragraph)
        "rhythm-4": "2rem", // 32px - 4 baseline units
        "rhythm-6": "3rem", // 48px - 6 baseline units
      },

      // BORDER RADIUS - Soft, organic, warm (not sharp Swiss precision)
      borderRadius: {
        none: "0",
        soft: "0.25rem", // 4px - Subtle softness
        card: "0.5rem", // 8px - Warm card corners
        "card-lg": "0.75rem", // 12px - Larger cards, modals
        button: "0.375rem", // 6px - Button corners
        full: "9999px", // Pills, circles
      },

      // TRANSITIONS - Smooth, natural timing
      transitionDuration: {
        fast: "150ms", // Quick feedback
        base: "250ms", // Standard transitions
        slow: "350ms", // Deliberate, noticeable transitions
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // Material design easing
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Playful bounce
      },

      // BOX SHADOWS - Subtle, natural light source from above
      boxShadow: {
        none: "0 0 #0000",
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        "soft-md": "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        "soft-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
