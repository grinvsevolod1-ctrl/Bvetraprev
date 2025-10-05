/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#2b2b2b',
        graysoft: '#6b6b6b',
        gold: '#bfa24b',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    }
  },
  plugins: [],
}