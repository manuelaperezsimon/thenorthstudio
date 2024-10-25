/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        frank: ["Frank Ruhl Libre", "serif"],
        urbanMedium: ["Urban Grotesk Medium", "sans-serif"],
        urbanBold: ["Urban Grotesk Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
