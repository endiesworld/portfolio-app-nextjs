module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
          'myGradient': "linear-gradient(105deg, red 0%, red 55%, transparent 20%)",
          'myImage': "linear-gradient(105deg, red 0%, red 55%, transparent 20%)",
        })
      },
      minWidth: {
       '0': '0',
       '1/4': '50%'
      },
      gridTemplateRows: {

         'mylayout': '10rem minmax(50rem, auto) 10rem',
         'aboutlayout': '10rem minmax(30rem, auto) 10rem',
        }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
