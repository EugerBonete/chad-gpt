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
      },
    },
  },
  plugins: [],
};

module.exports = config;
