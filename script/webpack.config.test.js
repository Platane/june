const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: [
      path.join(__dirname, '../src/__tests__/index.js'),
      path.join(__dirname, '../src/index.html'),
    ],
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[hash:8].[name].js',
    publicPath: process.env.PATHNAME_BASE || '/',
  },

  resolve: {
    alias: {
      tape: 'browser-tap',
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      {
        test: [/\.html?$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },

      {
        test: [/\.bmp/, /\.gif/, /\.jpe?g/, /\.png/, /\.otf/, /\.svg/],
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  devServer: {
    port: 8088,
    contentBase: [path.resolve(__dirname, '../dist')],
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
}
