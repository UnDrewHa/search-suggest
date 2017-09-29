const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ClearWebpackPlugin = require('clean-webpack-plugin');

const config = {
  devtool: 'cheap-eval-source-map',

  entry: {
    main: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
  ],
  performance: {
    hints: false,
  },
  devServer: {
      compress: true,
      hot: false,
      overlay: false,
      host: process.env.HOST,
      port: process.env.PORT,
    }
};

module.exports = config;
