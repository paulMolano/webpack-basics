const path = require("path");
const webpack = require("webpack");
const svgToMiniDataURI = require("mini-svg-data-uri");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    open: true,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Basics",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new ImageMinimizerWebpackPlugin({
      minimizerOptions: {
        plugins: ["gifsicle", "jpegtran", "optipng", "svgo"],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.png$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      {
        test: /\.svg$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024, // 12kb
          },
        },
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
