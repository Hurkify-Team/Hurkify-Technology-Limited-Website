import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3D1F52",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1A0B2E",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF6F61",
          foreground: "#1A0B2E",
        },
        muted: {
          DEFAULT: "#F6F3FA",
          foreground: "#6B6476",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#171021",
        },
      },
      boxShadow: {
        premium: "0 28px 80px rgba(26, 11, 46, 0.14)",
        glow: "0 22px 60px rgba(151, 75, 255, 0.26)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
