/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#203864',
        'primary': {
          50: '#E4E7EC',
          100: '#BCC3D1',
          200: '#909CB2',
          300: '#637493',
          400: '#41567B',
          500: '#203864',
          600: '#1C325C',
          700: '#182B52',
          800: '#132448',
          900: '#0B1736',
        },
        secondary: {
          50: '#E3EFF8',
          100: '#B9D7ED',
          200: '#8ABDE2',
          300: '#5BA2D6',
          400: '#378ECD',
          500: '#147AC4',
          600: '#1272BE',
          700: '#0E67B6',
          800: '#0B5DAF',
          900: '#064AA2',
        },
        neutral: {
          50: '#E6E6E6',
          100: '#C2C1C1',
          200: '#999898',
          300: '#706F6E',
          400: '#51504F',
          500: '#323130',
          600: '#2D2C2B',
          700: '#262524',
          800: '#1F1F1E',
          900: '#131313',
        },
      },
      fontFamily: {
        'google-sans': ['GoogleSans-Regular', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
