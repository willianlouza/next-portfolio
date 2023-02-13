/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--poppins-font)", ...fontFamily.sans],
        serif: ["var(--poppins-font)", ...fontFamily.serif],
      },
      animation: {
        move: "move 5.5s ease-in-out infinite alternate",
        movealt: "movealt 5.5s ease-in-out infinite alternate",
      },
      keyframes: {
        move: {
          to: {
            transform: "translate(-100%,-100%)"
          }
        },
        movealt: {
          to: {
            transform: "translate(50%,50%)"
          }

        }
      }
    },
  },
  plugins: [],
};
