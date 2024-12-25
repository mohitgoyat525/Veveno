
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sohne: ["Sohne Schmal", "sans-serif"],
      maisonLight: ["maisonLight", "sans-serif"],
      maisonRegular: ["maisonRegular", "sans-serif"],
      maisonMedium: ["maisonMedium", "sans-serif"],
      maisonBold: ["maisonBold", "sans-serif"],
    },
    extend: {
      fontSize: {
        custom9xl: "120px",
        customsm: "15px",
        custom3xl: "30px",
        custom8xl: "80px",
      },
      colors: {
        lightGrey: "#0D99A0",
        lightGreen: "#D2F038",
        offGreen: "#097980",
        offRed: "#FF4242",
        lightestGreen: "#9DC9CC",
        extrimeGreen: "#00AFB5",
      },
      backgroundImage: {
        heroImg: "url('/public/assets/images/webp/hero-bg.webp')",
        cardImgOne: "url('/public/assets/images/png/light-green-bg.png')",
        cardImgTwo: "url('/public/assets/images/png/off-dark-green-bg.png')",
        cardImgThree: "url('/public/assets/images/png/yellow-green-bg.png')",
        inputImg: "url('/public/assets/images/png/input-bg-img.png')",
        tabOneBgImg: "url('/public/assets/images/png/growth-img-one.png')",
        tabTwoBgImg: "url('/public/assets/images/png/galaxy-img.png')",
        tabThreeBgImg: "url('/public/assets/images/png/project-rader-img.png')",
        tabOneSmImg: "url('/public/assets/images/png/tab-one-sm-img.png')",
        tabTwoSmImg: "url('/public/assets/images/png/tab-two-sm-img.png')",
        tabThreeSmImg:"url('/public/assets/images/png/tab-three-sm-img.png')"
      },
    },
  },
  plugins: [],
};

