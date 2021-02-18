const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "[name].[fullhash].js",
  },
  plugins: [new CleanWebpackPlugin()],
};
