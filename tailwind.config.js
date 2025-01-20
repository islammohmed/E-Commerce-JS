/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {

        'hero': "url('/src/assets/hero.jpg')",
        'button': "url('/src/assets/button.png')",
      }    
    },
  },
  plugins: [],
}

