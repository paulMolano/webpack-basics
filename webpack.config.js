const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/assets/js", "main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/bundle.js",
    assetModuleFilename: "assets/img/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 7 }],
          [
            "svgo",
            {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          // Creates `style` nodes from JS strings
          // Translates CSS into CommonJS
          { loader: "css-loader", options: { sourceMap: true } },
          // Compiles Sass to CSS
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024,
          },
        },
      },
    ],
  },
  devServer: {
    open: true,
  },
};
