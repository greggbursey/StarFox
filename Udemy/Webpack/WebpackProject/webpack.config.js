var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: "/\.js$/",
        exclude: /node_modules/
      },
      {
        use: [// read from right to left (last to first)
          "style-loader",// puts styles into html document
          "css-loader"// allows webpack to understand and read contents of css files
        ],
        test: /\.css$/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
