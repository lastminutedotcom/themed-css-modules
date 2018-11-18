const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  mode: 'development',
  entry: path.join(paths.SRC, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  devServer: {
    contentBase: paths.DIST,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],

  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: "css-loader", options: {
              modules: true,
              sourceMap: true
            }
          },{
            loader: "sass-loader", options: {
              modules: true,
              sourceMap: true
            }
          }]
      }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
