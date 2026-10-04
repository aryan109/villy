import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        card: {
          DEFAULT: "#09090b",
          foreground: "#f4f4f5",
          hover: "#121215",
          border: "#27272a",
        },
        muted: {
          DEFAULT: "#18181b",
          foreground: "#a1a1aa",
          subtle: "#71717a",
        },
        accent: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        border: "#27272a",
        borderLight: "#3f3f46",
        zinc: {
          950: "#09090b",
          900: "#121214",
          850: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e4e4e7",
          100: "#f4f4f5",
          50: "#fafafa",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1f1f23 1px, transparent 1px), linear-gradient(to bottom, #1f1f23 1px, transparent 1px)",
        "radial-gradient": "radial-gradient(circle at 50% 0%, #27272a 0%, transparent 75%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan": "scan 3s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
