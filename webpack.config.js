const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: "./frontend/home/index.js",
    portafolio: "./frontend/portafolio/portafolio.js"
  },
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/[name]/[name].bundle.js",
    publicPath: '/'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]',
          outputPath: './img/',
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/home/index.html",
      chunks: ['index'],
      filename: './index.html'

    }),
    new HtmlWebpackPlugin({
      template: "./frontend/portafolio/portafolio.html",
      chunks: ['portafolio'],
      filename: './portafolio/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
    }),
  ],
};
