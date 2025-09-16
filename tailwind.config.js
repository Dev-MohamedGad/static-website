/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#f7f9f0',
          100: '#eef2e1',
          200: '#dbe3b8',
          300: '#c7d38f',
          400: '#a9bc61',
          500: '#8c9b3b',
          600: '#76842f',
          700: '#5d6826',
          800: '#444d1c',
          900: '#303714'
        },
        brandbg: '#f7f4ea'
      }
    },
  },
  plugins: [],
};
