import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#111111",
        foreground: "#F5F0E8",
        card: {
          DEFAULT: "#1C1C1C",
          foreground: "#F5F0E8",
        },
        primary: {
          DEFAULT: "#8B1A1A",
          foreground: "#F5F0E8",
          hover: "#B22222",
        },
        accent: {
          DEFAULT: "#E8A830",
          foreground: "#111111",
        },
        muted: {
          DEFAULT: "#1C1C1C",
          foreground: "#8A95A5",
        },
        border: "rgba(255,255,255,0.06)",
        input: "rgba(255,255,255,0.06)",
        ring: "#8B1A1A",
        secondary: {
          DEFAULT: "#1C1C1C",
          foreground: "#F5F0E8",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#F5F0E8",
        },
        popover: {
          DEFAULT: "#1C1C1C",
          foreground: "#F5F0E8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        display: ["Bebas Neue", "cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
