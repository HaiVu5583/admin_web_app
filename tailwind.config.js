const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./build/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#141ED2",
        },
        lightGray: {
          DEFAULT: "#F7F7F7",
        },
        error: {
          DEFAULT: "#EE3347",
        },
        appBlack: {
          DEFAULT: "#121212",
        },
        appGray: {
          DEFAULT: "#646464",
        },
      },
      fontFamily: {
        averta: ["Averta Std CY"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [],
};
