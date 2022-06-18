const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "412px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        "7/20": "35%",
        "13/20": "65%",
        "7/10": "70%",
        "22px": "22px",
        19.5: "78px",
        22: "88px",
        23.5: "94px",
        26: "104px",
        46: "184px",
        100: "400px",
      },
      colors: {
        active: "#664de5",
        inactive: "#e9e1e182",
      },
      maxWidth: {
        100: "400px",
        88: "352px",
        131: "32.9375rem",
      },
      fontSize: {
        "3xl": ["33px"],
        xsm: ["1rem", "1.09375rem"],
        xs: ["1rem", "1.25rem"],
        small: "1rem",
        big: "2.125rem",
      },
      margin: {
        "22px": "22px",
      },
      lineHeight: {
        5.5: "1.375rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
