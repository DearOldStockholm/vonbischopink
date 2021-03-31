// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      base: [
        "16px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "16px",
        },
      ],
      mobile: [
        "40px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "36px",
        },
      ],
      tablet: [
        "64px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "60px",
        },
      ],
      desktop: [
        "96px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "90px",
        },
      ],
    },
    fontFamily: {
      serif:
        "GaramondLight, TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif",
    },
    colors: {
      beige: "#FAF3E1",
      black: "#161511",
      highlight: "#00FF97",
    },
    extend: {
      gridTemplateRows: {
        mobile: "50% 50%",
        desktop: "66.66% 33.33%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
