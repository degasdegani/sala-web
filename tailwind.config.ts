import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Tokens da marca + neutros do tema claro — referenciam as CSS vars
        // em globals.css (fonte única). Namespaced; bg-white/text-black default
        // do Tailwind continuam funcionando.
        "blue-electric": "var(--color-blue-electric)",
        "green-mint": "var(--color-green-mint)",
        "neon-cyan": "var(--color-neon-cyan)",
        "neon-magenta": "var(--color-neon-magenta)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
      },
      borderColor: {
        subtle: "var(--color-border)",
        DEFAULT: "var(--color-border)",
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }]
        display: [
          "clamp(2.5rem, 7vw, 6rem)",
          { lineHeight: "1.0", letterSpacing: "-0.025em" },
        ],
        h1: [
          "clamp(2rem, 5vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.5rem, 3vw, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
