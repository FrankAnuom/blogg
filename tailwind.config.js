/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#1565DB',
        dark: {
          light: "#5A7184",
          hard: '#0d2436',
          soft: '#183B56',
        },
      },
      fontFamily: {
        opensans: ["'Open Sans", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],

      }
    },
  },
  plugins: [],
}

