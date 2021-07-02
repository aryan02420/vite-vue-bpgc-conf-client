const colors = require('tailwindcss/colors')

const { useColor } = require('postcss-themewind/utils')

module.exports = {
  mode: 'jit',
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
        inherit: 'inherit',
        initial: 'initial',
        'color-primary': useColor('--color-primary'),
        'color-secondary': useColor('--color-secondary'),
      },
      opacity: {
        initial: 'initial',
      },
      textColor: {
        username: '#1337AE',
        link: '#1D75E7',
        upvote: '#1074EA',
        downvote: '#F09038',
        primary: useColor('--text-primary'),
        secondary: useColor('--text-secondary'),
        tertiary: useColor('--text-tertiary'),
        disabled: useColor('--text-disabled'),
        inverted: useColor('--text-inverted'),
      },
      fill: {
        transparent: 'transparent',
      },
      fontFamily: {
        link: ['Kodchasan', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        bluGry: useColor('--bg-blueGray'),
        primary: useColor('--bg-primary'),
        secondary: useColor('--bg-secondary'),
        tertiary: useColor('--bg-tertiary'),
      },
      keyframes: {},
      animation: {
        highlight: 'highlight 1200ms linear',
      },
      outline: {
        dashed: ['3px dashed var(--outline-color)', '-3px'],
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
