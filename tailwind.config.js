/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lichking: "url('/lichking.jpg')",
      },
      animation: {
        'pulse-ts': 'pulse-ts 5s infinite'
      },
      keyframes: {
        'pulse-ts': {
          '50%': {
            'text-shadow': '0 0 30px blue'
          }
        }
      }
    },
    fontFamily: {
        title: 'Cinzel',
        sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
