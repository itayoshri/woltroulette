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
          '0%': { bottom: '-24rem', opacity: '0%' },
          '100%': { bottom: '0rem)', opacity: '100%' },
        },
        messageIn: {
          '0%': { top: '4rem', opacity: '0%' },
          '100%': { top: '2.5rem', opacity: '100%' },
        },
      },
      height: {
        mobile: '-webkit-fill-available',
      },
    },
  },
  plugins: [],
}
