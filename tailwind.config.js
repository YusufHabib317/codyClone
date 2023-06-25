/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        main_blue: "#2A48DF",
        main_pink: "#E46C9E",
        font_grey: "#B4BCD0",
        font_white: "#FFEEF8",
        border_pink: "#E86E9F",
        bg_darkBlue: "#20213E",
        bg_darkBlack: "#121324",
      },
    },
  },
  plugins: [],
};
