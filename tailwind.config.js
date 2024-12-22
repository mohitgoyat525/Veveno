
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
        cardImgOne: "url('/public/assets/images/png/light-green-bg.png')",
        cardImgTwo :"url('/public/assets/images/png/off-dark-green-bg.png')",
        cardImgThree :"url('/public/assets/images/png/yellow-green-bg.png')"
      },
    },
  },
  plugins: [],
};

