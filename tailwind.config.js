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
          "alt-hover": "#E8E8E8",
        },
        text: {
          DEFAULT: "black",
          muted: "#6f6f6f",
          pink: "#AA618B",
        },
        pink: "#AA618B",
        brown: "#694025",
      },
      fill: (theme) => ({
        em1: { DEFAULT: "#197EB7", light: "#3D99CE" },
        em2: { DEFAULT: "#B1CA6C", enhanced: "#B6CF72" },
        em3: { DEFAULT: "#E78182" },
      }),
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
      backgroundImage: theme => ({
        'massvisualize-pig-pattern': "url('components/chapter1/start/fridge/massvisualization/massvisualize_pig.png')",
        'massvisualize-avocado-pattern': "url('components/chapter1/start/fridge/massvisualization/avocado.gif')",
        'massvisualize-milk-pattern': "url('components/chapter1/start/fridge/massvisualization/milk.gif')",
      }),
      spacing: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
      },
      outline: {
        em1: '2px solid #3D99CE',
        black: '2px solid #6f6f6f'
      },
      borderRadius: {
        'round': '1.2rem',
        ...defaultTheme.borderRadius,
      }
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
      translate: ["active", "group-hover"],
      transform: ["group-hover"],
      fill: ["hover", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
