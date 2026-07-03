/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        paper: {
          bg: "#f3ecdf",
          panel: "#faf5ea",
          line: "#e2d7c2",
          ink: "#2c2620",
          soft: "#6f665a",
          faint: "#a99f8e",
          terra: "#8c4a32",
          terraSoft: "#b56a4d",
        },
      },
      keyframes: {
        fadeup: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeup: "fadeup 0.5s ease both",
      },
    },
  },
  plugins: [],
};
