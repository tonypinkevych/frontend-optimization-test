const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { left: "-200px" },
          "50%": { left: "200px" },
        },
        wiggleReversed: {
          "0%, 100%": { left: "200px" },
          "50%": { left: "-200px" },
        },
      },
      animation: {
        wiggle: "wiggle 3s cubic-bezier(0.5, 0.35, 0.15, 1) infinite",
        "wiggle-reversed":
          "wiggleReversed 3s cubic-bezier(0.5, 0.35, 0.15, 1) infinite",
      },
    },
  },
  plugins: [],
};
