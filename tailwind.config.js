/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
    },

    colors: {
      ...colors,
      transparent: "transparent",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#609EAF",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#1D2123",
      dark: {
        100: "#1c1c1c",
        200: "#1A1E1F",
        300: "rgba(51, 55, 59, 0.67)",
      },
    },
  },
  plugins: [],
};
