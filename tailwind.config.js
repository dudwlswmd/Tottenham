/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: [ 'Raleway', 'serif'],
      },
      colors:{
        brand:'#111836'
      }
    }
  },
  plugins: [],
}
