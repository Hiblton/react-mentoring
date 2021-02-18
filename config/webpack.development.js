module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
  },
  devServer: {
    compress: false,
    open: "chrome",
    stats: "errors-only",
    overlay: true,
  },
};
