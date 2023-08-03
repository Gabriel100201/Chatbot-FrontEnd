/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fontnew': ['Raleway', 'sans-serif']
      },
      colors: {
        primary: "#000",
        fondosec: "#D0F7C4",
        verdesec:"#1DAB52",
        bgoscuro:"#871C28",
        
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
