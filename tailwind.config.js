/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      Blaka: ['Blaka','sans-serif'],
      Bangers: ['Bangers','sans-serif'],
      Knewave :['Knewave','sans-serief'],
    }
  },
  plugins: [require('@tailwindcss/forms'),
    require("rippleui")
  ],
}

