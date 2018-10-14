const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HashOutput = require('webpack-plugin-hash-output');

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: dev ? "development" : "production",
  entry: path.join(__dirname, 'src', 'client', 'client.js'),
  module: {
    rules: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDom'
  },
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      reactDom: '<%- reactDom %>',
      template: path.join(__dirname, 'src', 'client', 'public', 'index.ejs'),
      filename: 'index.ejs'
    }),
    new HashOutput()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  }
};

