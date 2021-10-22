/*
 * @Author: Mukti
 * @Date: 2021-10-22 14:50:02
 * @LastEditTime: 2021-10-22 16:15:48
 * @LastEditors: Mukti
 */
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js',
    './src/print.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin()
  ],
}