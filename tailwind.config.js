const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      blueGray: colors.blueGray,
      coolGray:colors.coolGray,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      lightBlue: colors.lightBlue,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red
    },
    extend: {
      textColor: {
        'username': '#425FBE',
        'link': '#1D75E7',
        'upvote': '#1074EA',
        'downvote': '#F09038',
        'primary': '#3D3D3D',
        'secondary': '#525252',
        'tertiary': '#8E8E8E',
      },
      fontFamily: {
        'link': ['Kodchasan', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundColor: {
        'primary': '#F9F9F9',
        'secondary': '#EBEBEB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
