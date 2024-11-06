/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],


  theme: {


    extend: {

      container: {
        center: true,
        padding: "3.7rem"
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/bacg1.jpg')"
      },
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair"
      },
    }

  },

  plugins: [],
}

