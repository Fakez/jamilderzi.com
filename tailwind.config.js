module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-light': '#00aeef',
        'blue-dark': '#101c28',
        'pink': '#ff00ff',
        'dark-green': '#121614',
        'light-green': '#2bbc8a',
        'light-gray': '#e0e0e0',
        'dim-gray': '#666666'
      },
      fontFamily: {
        'roboto': 'roboto slab'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
