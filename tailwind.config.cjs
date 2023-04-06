/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#202123",
        darkBlue: "#343541",
        darkGrey: "#444654",
        lightGrey: "#d9d9d9 ",
        warmGrey: "#f5f5f5 ",
      },
    },
  },
  plugins: [],
};

module.exports = config;
