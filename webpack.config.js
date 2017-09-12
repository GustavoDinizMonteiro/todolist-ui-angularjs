var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: [
      './vendor.imports.js',
      './app.js'
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  }
};