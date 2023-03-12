/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'discord-purple': '#6A5ACD'
      },
      backgroundImage: {
        lichking: `
          linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url('/lichking.jpg')
        `,
      },
      animation: {
        'pulse-ts': 'pulse-ts 10s infinite'
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
