module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0A459F",
        gray: "#FBFBFB",
        grey: "#e5e5e5",
        ash: "#757575",
        greyTwo: "#0c0c0c",
        lightAsh: "7490BA",
        ashTwo: "#c4c4c4",
        lightBlack: "#1a1a1a",
        ashOne: "#808080",
        lightBlue: "#EEF4FF",
      },
      fontSize: {
        small: ".60rem",
      },
      fontFamily: {
        sans: ["Bw Nista Geometric DEMO", "sans-serif"],
        verybold: ["Bw Nista Geometric DEMO Bold", "sans-serif"],
        thin: ["Bw Nista Geometric DEMO Thin", "sans-serif"],
      },
      boxShadow: {
        menu: "0px 0px 0px 2px rgba(10,69,159,0.19)",
      },
      borderWidth: {
        slim: "0.5px",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
