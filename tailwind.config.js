/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--poppins-font)", ...fontFamily.sans],
        serif: ["var(--poppins-font)", ...fontFamily.serif],
        mono: ["var(--fira-font)", ...fontFamily.mono]
      },
    },
  },
  plugins: [],
};
