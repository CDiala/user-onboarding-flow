module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "7/20": "35%",
        "13/20": "65%",
        26: "104px",
        46: "184px",
        100: "400px",
      },
      colors: {
        active: "#664de5",
        inactive: "#e9e1e182",
      },
      maxWidth: {
        88.5: "354px",
        131: "524px",
      },
    },
  },
  plugins: [],
};
