/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '412px',
      },
      colors: {
        primary: '#381e4a',
        'primary-dark': '#281238',
        secondary: '#BB9BB0',
        'secondary-dark': '#A288A6',
        dark: '#1C1D21',
      },
    },
  },
  plugins: [],
};
