module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //          'fondo': "url('/public/style/nuves.jpg')",
      //           })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
