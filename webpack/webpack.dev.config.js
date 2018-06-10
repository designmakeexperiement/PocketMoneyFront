var webpack = require('webpack');
var path = require('path');
const Dotenv = require('dotenv-webpack');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader'] },
    ]
  },
  plugins: [
    new Dotenv()
  ],
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
