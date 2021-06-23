module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
          'myGradient': "linear-gradient(105deg, red 0%, red 55%, transparent 20%)",
          'myImage': "linear-gradient(105deg, red 0%, red 55%, transparent 20%)",
        })
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
