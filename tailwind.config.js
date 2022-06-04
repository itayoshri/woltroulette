module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', '"sans-serif"'],
      },
      colors: {
        primary: {
          500: '#009de0',
        },
      },
      keyframes: {
        locationIn: {
          '0%': { bottom: '-24rem' },
          '100%': { bottom: '0rem)' },
        },
      },
    },
  },
  plugins: [],
}
