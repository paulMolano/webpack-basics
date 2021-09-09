- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)
- [Installation Process](#installation-process)
- [Configuration](#configuration)
- [Get it working](#get-it-working)

## Requirements

@@ -59,3 +62,101 @@ To deliver this project you must follow the steps indicated in the document:

- [WebPack Official](https://webpack.js.org/)
- [ECMAScript 6 compatibility](https://kangax.github.io/compat-table/es6/)

## Installation Process

This section is meant to explain the process followed to install webpack and the specific plugins used for this project.

- First, install npm and initialize it using the -y flag to initialize it with default settings.

  ```
  npm install
  npm init -y
  ```

- Then, the project directory and folder structure must be created, where we will install webpack locally on the command line (or, in this case we install it globally to have it on a wider scope for other projects).

  ```
  npm install -g webpack webpack-cli
  ```

- Next step is knowing everything that will be used in an specific project to install the required modules and plugins. In this project it was required to have the following plugins and rules:

  - Plugins:

    1. **ProvidePlugin** to be able to use jQuery.

    2. **HtmlWebpackPlugin** to use the _index.html_ in the _src_ folder as a template for the _index.html_ file in the _dist_ folder.

       ```
       npm install html-webpack-plugin
       ```

    3. **ImageMinimizerPlugin** to compress images in the _src_ folder that will be used in the _index.html_ file in the _dist_ folder.

       ```
       npm install image-minimizer-webpack-plugin --save-dev
       ```

       To specifically use lossy algorithms for compression.

    ```
    npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev
    ```

  - Loaders, plugins and modules:

    1. **html-loader** to load html code for the _index.html_ file in the _dist_ folder.

       ```
       {
       	test: /\.html$/i,
       	loader: 'html-loader'
       }
       ```

    1. **style-loader, css-loader** and **sass-loader** to process and load the style code for the _index.html_ file in the _dist_ folder.

       ```
       npm install sass-loader sass webpack
       ```

    1. **asset** to load all image related type of files for the _index.html_ file in the _dist_ folder.

       ```
       {
       	test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset',
       }
       ```

    1. **babel-loader** to transpile JavaScript files for the _index.html_ file in the _dist_ folder.

       ```
       npm install -D babel-loader @babel/core @babel/preset-env webpack
       ```

## Configuration

- Entry and output:
  Webpack needs an entry point, that will serve as the base to begin building its dependencies related to the other modules. The default entry file is `index.js`.
  The output property sets the place where the bundle created by webpack will be emitted to.

```
module.exports = {
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
   }
```

## Get it working

- After the webpack is properly set up, you can run `npm run build` to compile it. It will create (by default) the `./dist` `folder with `bundle.js` among other files.
- You can also use the `webpack-dev-server`, that provides you with a web server with live reloading so you don't have to manually compile the code every time you make changes.
