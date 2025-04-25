
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
        blob4: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(-15%, 15%) scale(1.05)",
          },
          "66%": {
            transform: "translate(15%, -15%) scale(0.95)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(0.8)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        beam1: {
          "0%, 100%": {
            opacity: "0.3",
            height: "30vh",
          },
          "50%": {
            opacity: "0.6",
            height: "35vh",
          },
        },
        beam2: {
          "0%, 100%": {
            opacity: "0.2",
            height: "50vh",
          },
          "50%": {
            opacity: "0.5",
            height: "45vh",
          },
        },
        beam3: {
          "0%, 100%": {
            opacity: "0.25",
            height: "40vh",
          },
          "50%": {
            opacity: "0.45",
            height: "35vh",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        blob1: "blob1 15s infinite",
        blob2: "blob2 18s infinite",
        blob3: "blob3 20s infinite",
        blob4: "blob4 25s infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        beam1: "beam1 8s ease-in-out infinite",
        beam2: "beam2 12s ease-in-out infinite",
        beam3: "beam3 10s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
