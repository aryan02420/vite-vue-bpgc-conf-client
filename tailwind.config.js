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
      colors: {
        'status-online': '#27ae60',
        'status-offline': '#e74c3c' ,
        'status-busy': '#FFCC10' ,
        'action-normal': '#3178C3' ,
        'action-danger': '#E4842F' ,
        inherit: 'inherit'
      },
      textColor: {
        'username': '#425FBE',
        'link': '#1D75E7',
        'upvote': '#1074EA',
        'downvote': '#F09038',
        'primary': '#3D3D3D',
        'secondary': '#525252',
        'tertiary': '#8E8E8E',
        'disabled': '#AEAEAE',
      },
      fontFamily: {
        'link': ['Kodchasan', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundColor: {
        'primary': '#F2F2F2',
        'secondary': '#EBEBEB',
      },
      keyframes: {
       highlight: {
         '0%, 100%': { opacity: 'initial' },
         '50%': { opacity: '20%' },
       }
      },
      animation: {
       'highlight': 'highlight 500ms linear',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
