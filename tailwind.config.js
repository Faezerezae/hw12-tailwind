/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        darkBlue: "#07102D",
        lightBlue: "#3c3e56",
        lightCyan: "#E4F2FE",
        lightPink: "#FFEEFE",
      },
    },
  },
  plugins: [],
};
