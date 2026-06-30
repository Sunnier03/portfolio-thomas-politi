/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],      // sovrascrive il font di default
        display: ['Playfair Display', 'serif'] // oppure crea una classe custom
      }
    },
  },
  plugins: [],
}