/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'navbar-color':"#73c9c0",
        'button-color':"#009c8c"
      }
    },
  },
  plugins: [],
}