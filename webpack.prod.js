const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/api.ts",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
