/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        turquose: '#52B480',
        'green-light': '#B1CA52',
        green: '#418241',
        yellow: '#FFE55A',

        orange: '#F89446',
        'orange-light': '#F5B730',
        'neutral-0': '#FFFFFF',
        'neutral-100': '#F9F9FB'
      },
      fontFamily: {
        sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
        heading: ['Nunito']
      },
      screens: {
        xs: '540px',
        xl: '1280px'
      },
      boxShadow: {
        centered: '0 0 10px 0 rgba(0, 0, 0, 0.07)'
      },
      borderRadius: {
        xl: '0.875rem',
        '3xl': '1.25rem'
      },
      backgroundImage: {
        'green-gradient': 'radial-gradient(circle at right top, #B1CA52 0%, #418241, #418241, #B1CA52)',
        'orange-gradient': 'radial-gradient(circle at right top, #F5B730 0%, #F89446 100%)',
        'yellow-gradient': 'radial-gradient(circle at right bottom, #F8F3E9, #FFFBF2 20%, #FFFFFF 60%)'
      },
      backgroundSize: {
        '300%': '300%',
        '120%': '120%'
      },
      transitionProperty: {
        background: 'background-position'
      }
    }
  },
  plugins: []
};
