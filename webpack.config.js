const { merge } = require("webpack-merge");

const commonConfig = require("./config/webpack.common");

module.exports = () => {
  const config = require("./config/webpack." + process.env.NODE_ENV);
  return merge(commonConfig, config);
};
