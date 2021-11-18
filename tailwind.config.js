module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
    fill: {
      main: {
        '100': '#324a7b',
        '200': '#1c2e52',
        '300': '#1a2844',
        '400': '#14223f',
        '500': '#0d1a3a',
        '600': '#061434',
        '700': '#000e2d',
      },
    },
    extend: {
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
