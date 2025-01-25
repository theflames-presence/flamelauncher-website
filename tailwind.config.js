/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgba(var(--background))",
        font: "rgba(var(--font))",
        gfont: "rgba(var(--g-font))",
        primary: "rgba(var(--primary))",
        gprimary: "rgba(var(--copy-primary))",
        grape: "rgba(var(--grape))",
        boxshadow: "var(--box-shadow)"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ]
}