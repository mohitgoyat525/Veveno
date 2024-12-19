/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sohneschmal: ["sohneschmal", "sans-serif"],
    },
    extend: {
      fontSize: {
        custom9xl: "120px",
      },
    },
  },
  plugins: [],
};

