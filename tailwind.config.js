/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      // HUMANIST MODERNISM COLOR PALETTE
      // Warm, organic, approachable - optimized for readability and WCAG AA+
      colors: {
        text: {
          primary: "#2D2D2D", // H1 headlines - softer than pure black, warm presence
          secondary: "#3A3A3A", // H2-H3 subheadings - subtle hierarchy shift
          body: "#404040", // Body text - comfortable reading gray
          muted: "#6B6B6B", // For captions, metadata (WCAG AA 4.54:1)
          inverse: "#FAFAF9", // For text on dark backgrounds
        },
        bg: {
          primary: "#FAF9F7", // Warmer white with subtle cream undertone
          secondary: "#F5F4F0", // Warm gray for alternating sections
          tertiary: "#EEEEE8", // Slightly deeper warm neutral
          elevated: "#FFFFFF", // Pure white for cards, elevated surfaces
          dark: "#2D2D2D", // For dark sections (inverted text)
        },
        accent: {
          primary: "#3182CE", // Warmer, more approachable blue (WCAG AA 4.53:1)
          hover: "#2C5F8D", // Deeper state for interactions
          light: "#63B3ED", // Lighter variant for subtle highlights
          sage: "#4A7766", // Organic green-gray for supporting accents
          warm: "#C4A676", // Warm gold for highlights, decorative elements
          earth: "#8B7355", // Earthy brown for grounding elements
          rust: "#B86B3E", // Warm rust for visual interest (sparingly)
        },
        border: {
          subtle: "#EEEEE8", // Very soft borders on warm backgrounds
          light: "#DDDDD5", // Standard borders with warmth
          medium: "#BCBCB0", // More prominent borders
          accent: "#3182CE", // Accent color borders
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

      // Fluid, responsive type scale with generous line-heights for warmth
      fontSize: {
        // Display - hero headlines with dramatic scale
        display: [
          "clamp(2.5rem, 5vw + 1rem, 4rem)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        // H1 - page titles with breathing room
        h1: [
          "clamp(2rem, 4vw + 0.5rem, 3rem)",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        // H2 - section headers with warmth
        h2: [
          "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // H3 - subsection headers
        h3: [
          "clamp(1.25rem, 2.5vw + 0.25rem, 1.75rem)",
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // H4 - tertiary headers
        h4: [
          "clamp(1.125rem, 2vw + 0.125rem, 1.5rem)",
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        // Body XL - lead paragraphs and introductions
        "body-xl": [
          "clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        // Body - primary reading text (optimal for sustained reading)
        body: [
          "clamp(1rem, 1vw + 0.5rem, 1.1875rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        // Body SM - secondary text, captions
        "body-sm": [
          "clamp(0.9375rem, 0.5vw + 0.625rem, 1.0625rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        // Caption - metadata, labels
        caption: [
          "clamp(0.875rem, 0.5vw + 0.5rem, 1rem)",
          {
            lineHeight: "1.5",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        // Small - fine print
        small: [
          "clamp(0.8125rem, 0.25vw + 0.5rem, 0.875rem)",
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

      // OPTIMAL MEASURE - LINE LENGTHS for comfortable reading
      maxWidth: {
        "measure-narrow": "540px", // Narrow columns, sidebars
        "measure-optimal": "720px", // Optimal 65-75 characters at base size
        "measure-wide": "960px", // Wider content, multiple columns
        "container-comfortable": "1280px", // Generous desktop container
        "container-max": "1440px", // Maximum width before too wide
      },

      // SPACING SYSTEM - 8px base unit with generous breathing room
      spacing: {
        xs: "0.25rem", // 4px - Minimal internal spacing
        sm: "0.5rem", // 8px - Tight spacing
        md: "1rem", // 16px - Standard spacing
        lg: "1.5rem", // 24px - Comfortable spacing
        xl: "2rem", // 32px - Generous spacing
        "2xl": "3rem", // 48px - Section element spacing
        "3xl": "4rem", // 64px - Small section padding
        "4xl": "6rem", // 96px - Section padding mobile
        "5xl": "9rem", // 144px - Section padding desktop
        "6xl": "12rem", // 192px - Large section breaks
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
