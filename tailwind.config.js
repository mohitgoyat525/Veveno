/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sohneschmal: ["sohneschmal", "sans-serif"],
      maisonNeue:["maisonNeue","sans-serif"]
    },
    extend: {
      fontSize: {
        custom9xl: "120px",
        customsm: "15px",
      },
      colors: {
        lightGreen: "#D2F038",
        offGreen: "#097980",
        offRed: "#FF4242",
      },
    },
  },
  plugins: [],
};
