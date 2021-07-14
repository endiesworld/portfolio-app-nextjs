module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
          'myGradient': "linear-gradient(105deg, white 0%, white 55%, transparent 20%)",
          'myImage': "linear-gradient(105deg, red 0%, red 55%, transparent 20%)",
        })
      },
      
      minWidth: {
       '0': '0',
       'half': '50%',
       'full': '100%'
      },
      gridTemplateRows: {

         'mylayout': '10rem minmax(50rem, auto) 10rem',
         'aboutlayout': '10rem minmax(30rem, auto) 10rem',
         'contactMelayout': '10rem minmax(15rem, auto) 10rem',
         'contactTable': '5rem 5rem 5rem',
        }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
