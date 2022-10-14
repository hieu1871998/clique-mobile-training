/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['GoogleSans-Regular', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}
