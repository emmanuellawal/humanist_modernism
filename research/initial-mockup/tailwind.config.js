/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      // HUMANIST MODERNISM COLOR PALETTE
      colors: {
        text: {
          primary: "#333333",
          secondary: "#5A5A5A",
          muted: "#7A7A7A",
        },
        bg: {
          primary: "#FAFAFA",
          secondary: "#F5F5F0",
          elevated: "#FFFFFF",
        },
        accent: {
          primary: "#2C5F8D",
          hover: "#1E4763",
          sage: "#7A8B8A",
          warm: "#D4A574",
          earth: "#8B7355",
        },
        border: {
          subtle: "#E8E8E3",
          light: "#DEDEDC",
        },
      },

      // HUMANIST TYPOGRAPHY SYSTEM
      fontFamily: {
        sans: ["Open Sans", "Avenir", "Segoe UI", "system-ui", "sans-serif"],
        serif: ["Georgia", "Minion Pro", "Garamond", "serif"],
      },

      fontSize: {
        display: ["60px", { lineHeight: "1.1" }],
        h1: ["48px", { lineHeight: "1.2" }],
        h2: ["36px", { lineHeight: "1.3" }],
        h3: ["28px", { lineHeight: "1.4" }],
        h4: ["24px", { lineHeight: "1.4" }],
        "body-xl": ["21px", { lineHeight: "1.8" }],
        body: ["19px", { lineHeight: "1.7" }],
        "body-sm": ["17px", { lineHeight: "1.6" }],
        caption: ["16px", { lineHeight: "1.5" }],
        small: ["14px", { lineHeight: "1.5" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // OPTIMAL MEASURE - LINE LENGTHS
      maxWidth: {
        "measure-narrow": "540px",
        "measure-optimal": "720px",
        "measure-wide": "960px",
        "container-max": "1440px",
      },

      // SPACING SYSTEM (8px base unit)
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "128px",
      },

      // BORDER RADIUS
      borderRadius: {
        soft: "4px",
        card: "8px",
      },

      // TRANSITIONS
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
      },

      // BOX SHADOWS (Subtle, humanist)
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
