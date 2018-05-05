
const path = require('path')

var config = {
  cache: true,
  context: path.join(__dirname, 'assets', 'scripts'),
  entry: {
    index: './index'
  },
  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    publicPath: '/assets/scripts/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = config
