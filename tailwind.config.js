/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 76px -20px rgba(255,255,255,1)',
      },
      fontFamily: {
        'Inria': "'Inria Serif', Garamond, serif"
      }
    },
  },
  plugins: [],
}

