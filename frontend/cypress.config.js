const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 960,
  viewportHeight: 540,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
