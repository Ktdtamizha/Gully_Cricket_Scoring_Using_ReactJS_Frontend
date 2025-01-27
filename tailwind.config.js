/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dimlight: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: 'green',
            boxShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#fff',
            textShadow: '0 0 10px green',
          },
        },
      },
      animation: {
        dimlight: 'dimlight 5s infinite',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      Blaka: ['Blaka','sans-serif'],
      Bangers: ['Bangers','sans-serif'],
      Knewave :['Knewave','sans-serief'],
      Nabla :['Nabla','sans-serief'],
      Honk :['Honk','sans-serief'],
    }
  },
  plugins: [require('@tailwindcss/forms'),
    require("rippleui"),
    function ({ addUtilities }) {
      addUtilities({
        '.box-reflect': {
          '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)',
        },
      });
    },
  ],
}

