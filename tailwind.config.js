/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "prinmary":"#010851",
        "secondary":"#9A7AF1",
        "third":"#707070",
        "pink":"#EE9AE5"
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

