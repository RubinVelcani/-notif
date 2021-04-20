module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'main': '#8690fa',
      'opposite': '#fdf9ce'
    },
    ringColor: {
      'main': '#8690fa',
      'opposite': '#fdf9ce'
    },
    borderColor: {
      'main': '#8690fa',
      'opposite': '#fdf9ce'
    },
    fontFamily: {
      'nunito': 'Nunito, sans-serif'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
