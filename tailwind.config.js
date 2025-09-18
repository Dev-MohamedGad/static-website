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
          800: '#5a6b2a',
          900: '#303714'
        },
        primary: {
          50: '#f7f9f0',
          100: '#eef2e1',
          200: '#dbe3b8',
          300: '#c7d38f',
          400: '#a9bc61',
          500: '#8c9b3b',
          600: '#76842f',
          700: '#5d6826',
          800: '#5a6b2a',
          900: '#303714'
        },
        accent: {
          50: '#f0f9f7',
          100: '#e1f2ee',
          200: '#b8e3d8',
          300: '#8fd3c2',
          400: '#61bc9b',
          500: '#3b9b74',
          600: '#2f8462',
          700: '#26684d',
          800: '#1c4d38',
          900: '#143726'
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d'
        },
        brandbg: '#f7f4ea'
      }
    },
  },
  plugins: [],
};
