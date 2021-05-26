const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        em1: { DEFAULT: "#197EB7", light: "#3D99CE" },
        em2: { DEFAULT: "#B1CA6C", enhanced: "#B6CF72" },
        em3: { DEFAULT: "#E78182" },
        bg: {
          DEFAULT: "white",
          alt: "#EFEFEF",
        },
        text: {
          DEFAULT: "black",
          muted: "#6f6f6f",
        },
      },
      fontSize: {
        17: "17pt",
        20: "20pt",
      },
      fontFamily: {
        sans: [
          "Arial",
          ...defaultTheme.fontFamily.sans.filter((fam) => fam !== "Arial"),
        ],
      },
      maxWidth: {
        "layout-max": "96rem",
      },
      padding: {
        "1/2": "50%",
        "2/3": "66.67%",
      },
    },
    screens: {
      xs: "380px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      scale: ["group-hover"],
      outline: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
