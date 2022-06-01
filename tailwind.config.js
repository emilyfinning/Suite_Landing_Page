module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#172339",
      "grey-blue": "#49566D",
      beige: "#F3EDE7",
      pale: "#FAF8F6",
      purple: "#A060FF",
      pink: "#CB30E3",
      orange: "#FFA84E",
      white: "#ffffff",
    },
    fontFamily: {
      epilogue: ["Epilogue"],
    },
    fontSize: {
      body: "18px",
      hXL: "72px",
    },
    extend: {},
    screens: {
      desktop: { min: "1651px", max: "3000px" },
      tablet: { min: "800px", max: "1650px" },
    },
  },
  plugins: [],
};
