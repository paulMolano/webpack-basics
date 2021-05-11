const webpack = require("webpack"); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack");

module.exports = {
  mode: 'development',
  entry: "./src/assets/js/main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true,
          },
        }, ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png)$/i,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            outputPath: "./img",
          },
        }, ],
      },
      {
        test: /\.(svg)$/i,
        use: [{
          loader: "url-loader",
          options: {
            limit: 12288,
            outputPath: "./img",
          },
        }, ],
      },
      {
        test: /\.(jpe?g|gif)$/i,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "./img",
          },
        }, ],
      },
      {
        test: /icon\.(png)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: './src/assets/img/webpack-icon.png'
    }),
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Before using imagemin plugins make sure you have added them in 'package.json' ('devDependencies') and installed them
        // Lossy optimization with custom options
        plugins: [
          [
            "pngquant",
            {
              quality: [0.5, 0.5],
            },
          ],
          [
            "mozjpeg",
            {
              quality: 50,
              progressive: true,
            },
          ],
          [
            "gifsicle",
            {
              interlaced: true,
              optimizationLevel: 3,
            },
          ],
          [
            "svgo",
            {
              plugins: [{
                removeViewBox: false,
              }, ],
            },
          ],
        ],
      },
    }),
  ],
};