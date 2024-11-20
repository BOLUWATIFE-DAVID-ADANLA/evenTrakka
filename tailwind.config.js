/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'primary' :'rgba(11, 90, 60, 1)'
    },
    extend: {},
  },
  plugins: [],
}

