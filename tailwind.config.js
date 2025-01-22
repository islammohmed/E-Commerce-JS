/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
        button: "url('/src/assets/button.png')",
        banner: "url('/src/assets/banner.png')",
      },
    },
  },
  plugins: [],
};
