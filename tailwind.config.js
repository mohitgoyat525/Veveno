/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sohneschmal: ["sohneschmal", "sans-serif"],
      maisonNeue: ["maisonNeue", "sans-serif"],
    },
    extend: {
      fontSize: {
        custom9xl: "120px",
        customsm: "15px",
      },
      colors: {
        lightGrey: "#0D99A0",
        lightGreen: "#D2F038",
        offGreen: "#097980",
        offRed: "#FF4242",
      },
      backgroundImage: {
        heroImg: "url('/public/assets/images/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
};

