// https://stackoverflow.com/questions/46224986/how-to-pass-env-file-variables-to-webpack-config
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      // "process.env": JSON.stringify(dotenv.parsed)
      "process.env": JSON.stringify(process.env)
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js'
    },
    fallback: {
      "url": require.resolve("url/"),
      "formdata-node": require.resolve("formdata-node"),
      "btoa": require.resolve("btoa"),
      "qs": require.resolve("qs"),
      "traverse": require.resolve("traverse"),
      "cookie": require.resolve("cookie"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "buffer": require.resolve("buffer"),
      "process": require.resolve("process/browser"),
      "util": require.resolve("util"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "fs": false,
      "net": false,
      "tls": false
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
    ]
  }
};
