const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, "tailwindcss.config.js"),
    },
    autoprefixer: {},
  },
};
