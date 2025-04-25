import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6E59A5",
          light: "#9b87f5",
          dark: "#4A3B7F"
        },
        secondary: {
          DEFAULT: "#F1F0FB",
          foreground: "#1A1F2C"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        blob1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30%, -20%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20%, 20%) scale(0.9)",
          },
        },
        blob2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(-30%, 30%) scale(1.1)",
          },
          "66%": {
            transform: "translate(20%, -20%) scale(0.9)",
          },
        },
        blob3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(25%, 25%) scale(0.9)",
          },
          "66%": {
            transform: "translate(-25%, -25%) scale(1.1)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        blob1: "blob1 7s infinite",
        blob2: "blob2 7s infinite",
        blob3: "blob3 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
