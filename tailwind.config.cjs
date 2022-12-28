const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#F4E2D1",
          400: "hsla(29, 100%, 70%, 1)",
          DEFAULT: "hsla(29, 100%, 59%, 1)",
        },
        textPrimary: "hsla(0, 0%, 20%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
