import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Consonlas", "Courier New", "monospace"],
        display: ["Coolvetica", "sans-serif"],
      },
      colors: {
        background: "#09090b",
        surface: {
          DEFAULT: "#09090b",
          card: "#111113",
          border: "#27272a",
          muted: "#1c1c1f",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        accent: "#64ffda",
        purple: "#d1a2f9",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;