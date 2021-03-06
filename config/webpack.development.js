module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    compress: false,
    open: true,
    stats: "errors-only",
    overlay: true,
    historyApiFallback: true,
  },
};
