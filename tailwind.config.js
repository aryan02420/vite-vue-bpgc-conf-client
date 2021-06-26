const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
    },
    extend: {
      colors: {
        'status-online': '#27ae60',
        'status-offline': '#e74c3c',
        'status-busy': '#FFCC10',
        'action-normal': '#007185',
        'action-danger': '#AA1716',
        inherit: 'inherit',
        initial: 'initial',
      },
      opacity: {
        initial: 'initial',
      },
      textColor: {
        username: '#1337AE',
        link: '#1D75E7',
        upvote: '#1074EA',
        downvote: '#F09038',
        primary: '#3D3D3D',
        secondary: '#525252',
        tertiary: '#8E8E8E',
        disabled: '#AEAEAE',
      },
      fill: {
        transparent: 'transparent',
      },
      fontFamily: {
        link: ['Kodchasan', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#F2F2F2',
        secondary: '#EBEBEB',
      },
      keyframes: {},
      animation: {
        highlight: 'highlight 1200ms linear',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active', 'focus', 'focus-visible'],
      ringColor: ['hover', 'active', 'focus', 'focus-visible'],
      ringOpacity: ['hover', 'active', 'focus', 'focus-visible'],
      ringOffsetWidth: ['hover', 'active', 'focus', 'focus-visible'],
      ringOffsetColor: ['hover', 'active', 'focus', 'focus-visible'],
    },
  },
  plugins: [],
}
