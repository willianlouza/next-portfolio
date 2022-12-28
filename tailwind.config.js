/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--poppins-font)", ...fontFamily.sans],
        serif: ["var(--poppins-font)", ...fontFamily.serif],
      },
      colors: {
        dark: "#16182c",
        light: "#fefefe",
        primary: "#4DB5FF",
        secondary: "#2B2C6C",
        "muted-blue": "#4E71B2",
        link: "#2F9AFC",
        muted: "#929292",
      },
      keyframes: {
        wave: {
          "2%": { transform: "translateX(1)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(1)" },
        },
      },
      animation: {
        "wave-1": "wave 20s linear infinite",
        "wave-2": "wave 28s linear reverse infinite",
        "wave-3": "wave 30s reverse infinite",
      },
      borderRadius: {
        wave: "30% 30% 0 0",
      },
      backgroundImage: {
        "dotted-black": "url('/images/pattern-black.png')",
        "dotted-white": "url('/images/pattern-white.png')",
      },
      backgroundSize: {
        "15%": "15%",
        "60%": "60%",
      },
    },
  },
  plugins: [],
};
