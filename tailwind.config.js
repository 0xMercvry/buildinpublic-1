/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hedgen: {
          100: '#4AFFD5',
          200: '#3ECDA8',
          600: '#236657',
          700: '#1D4044',
          800: '#051F22',
          900: '#000F11'
        } 
      }
    },
  },
  plugins: [],
}
