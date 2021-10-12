module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      width: {
        272: '68rem',
      },
      maxWidth: {
        272: '68rem',
      },
      height: {
        46: '11.5rem',
      },
      minHeight:  {
        'screen-50': '50vh',
        'inherit': 'inherit',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'stars': 'url(\'/assets/stars-60.png\')',
      },
      colors: {
        main: {
          '100': '#324a7b',
          '200': '#1c2e52',
          '300': '#1a2844',
          '400': '#14223f',
          '500': '#0d1a3a',
          '600': '#061434',
          '700': '#000e2d',
        },
        primary: '#92a8e6',
        secondary: '#546dcb',
        accent: {
          DEFAULT: '#3e68ef',
          dark: '#2c56e1',
          darker: '#1f47cc',
        },
        nav: {
          moz: '#000e2dc4',
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
