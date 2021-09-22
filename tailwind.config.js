module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1E213A",
        secondary: "#100E1D",
      },
      backgroundImage: {
        cloud: "url('/src/assets/img/Cloud-background.png')",
      },
      backgroundSize: {
        120: "120%",
      },
      scale: {
        "-1": "-1",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
    },
  },
  plugins: [],
};
