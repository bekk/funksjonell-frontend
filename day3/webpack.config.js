var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

