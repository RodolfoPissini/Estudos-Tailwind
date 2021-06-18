module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '550':'550px',
        '500':'500px',
        '250':'250px',
        '400': '400px'
      },
      '14': '3.5rem',
      '125px':'125px',
      '80':'80px',
      '9xl':'9rem',
      colors:{
        'green-principal': '#18d760',
        'purple-main': '#2d46b9',
        'green-main':'#9BF0E1',
        'blue-main':'#2941AB',
        'black':'#000000',
        'white':'#fff'
      },
    },
    backgroundImage: theme =>({
      'spotify-theme':"url('/assets/image/bursts.svg')",
      'spotify-theme-mobile':"url('/assets/image/bursts-mobile.svg')",
      'spotify-theme-principal':"url('/assets/image/burst-principal.svg')"
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
