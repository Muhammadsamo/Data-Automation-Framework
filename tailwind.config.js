/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#1F78C9",
        secondary: "#185E9D",
        info: "#66AAE8",
        "input-border": "#D5D5D5",
        gray: "#8A97A5",
      },
    },
  },
  plugins: [],
};
