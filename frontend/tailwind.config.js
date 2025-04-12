/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'goodtimes': ['Good Times', 'sans-serif'],
        'sans': ['Orbitron', 'sans-serif'],
        'lust': ['Lust Sans', 'serif'],
      },
      colors: {
        'primary': {
          100: '#f0d2b8',
          200: '#eecbad',
          300: '#d4956b',
          400: '#8d6e63',
        },
        'accent': {
          light: '#eed8ae',
          dark: '#5d4037',
        },
        'text': {
          primary: '#5d4037',
          secondary: '#8d6e63'
        },
        'background': '#fff5ee',
        'danger': {
          light: '#FFE5E5',
          DEFAULT: '#FF3B3B',
          dark: '#CC0000'
        },
        'navy': '#1b2651',
        'red': '#cd2028',
        'beige': '#edeae1',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(93, 64, 55, 0.1), 0 2px 4px -1px rgba(93, 64, 55, 0.06)',
        'card': '0 10px 15px -3px rgba(93, 64, 55, 0.1), 0 4px 6px -2px rgba(93, 64, 55, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
} 