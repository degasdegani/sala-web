import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Tokens da marca — referenciam as CSS vars em globals.css (fonte única).
        // Namespaced para não colidir com as cores default do Tailwind
        // (bg-black, text-white etc. continuam funcionando normalmente).
        "black-pure": "var(--color-black-pure)",
        "black-soft": "var(--color-black-soft)",
        "black-elevated": "var(--color-black-elevated)",
        "white-pure": "var(--color-white-pure)",
        "gray-light": "var(--color-gray-light)",
        "gray-mid": "var(--color-gray-mid)",
        "blue-electric": "var(--color-blue-electric)",
        "green-mint": "var(--color-green-mint)",
      },
      borderColor: {
        subtle: "var(--border-subtle)",
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }]
        display: [
          "clamp(2.5rem, 8vw, 7rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1", letterSpacing: "-0.015em" },
        ],
        h2: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1" }],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
