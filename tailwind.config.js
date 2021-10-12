module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
    },
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
        120: 120,
      },
      width: {
        120: '30rem',
        180: '45rem',
        240: '60rem',
        272: '68rem',
        '95/100': '95%',
      },
      minWidth:  {
        '40': '10rem',
        '60': '15rem',
      },
      maxWidth: {
        96: '24rem',
        272: '68rem',
      },
      height: {
        46: '11.5rem',
        240: '60rem',
      },
      minHeight:  {
        '40': '10rem',
        '60': '15rem',
        'screen-50': '50vh',
        'inherit': 'inherit',
      },
      maxHeight:  {
        '18': '4.5rem',
        '60': '15rem',
        '200': '50rem',
        '280': '70rem',
        '760': '180rem',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'stars': 'url(\'/assets/stars-60.png\')',
      },
      boxShadow: {
        'glow': '0 0 10px 0 rgba(255, 255, 255, 0.7)',
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
        nav: '#000e2d46',
        overlay: '#1a2844b3',
      },
      overflow: {
        'inherit': 'inherit',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
