const colors = require('tailwindcss/colors')

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
        'color-primary': 'rgb(var(--color-primary))',
        'color-secondary': 'rgb(var(--color-secondary))',
      },
      opacity: {
        initial: 'initial',
      },
      textColor: {
        username: '#1337AE',
        link: '#1D75E7',
        upvote: '#1074EA',
        downvote: '#F09038',
        primary: 'rgba(var(--text-primary), var(--tw-text-opacity, 1))',
        secondary: 'rgba(var(--text-secondary), var(--tw-text-opacity, 1))',
        tertiary: 'rgba(var(--text-tertiary), var(--tw-text-opacity, 1))',
        disabled: 'rgba(var(--text-disabled), var(--tw-text-opacity, 1))',
        'color-primary': 'rgba(var(--color-primary), var(--tw-text-opacity, 1))',
        'color-secondary': 'rgba(var(--color-secondary), var(--tw-text-opacity, 1))',
      },
      fill: {
        transparent: 'transparent',
      },
      fontFamily: {
        link: ['Kodchasan', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'rgba(var(--bg-primary), var(--tw-bg-opacity, 1))',
        secondary: 'rgba(var(--bg-secondary), var(--tw-bg-opacity, 1))',
        'color-primary': 'rgba(var(--color-primary), var(--tw-bg-opacity, 1))',
        'color-secondary': 'rgba(var(--color-secondary), var(--tw-bg-opacity, 1))',
      },
      ringColor: {
        'color-primary': 'rgba(var(--color-primary), var--(tw-ring-opacity, 1))',
        'color-secondary': 'rgba(var(--color-secondary), var(--tw-ring-opacity, 1))',
      },
      borderColor: {
        'color-primary': 'rgba(var(--color-primary), var(--tw-border-opacity, 1))',
        'color-secondary': 'rgba(var(--color-secondary), var(--tw-border-opacity, 1))',
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
