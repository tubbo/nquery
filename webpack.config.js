var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'nquery.js',
    path: path.resolve(__dirname, '..')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};