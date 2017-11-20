const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const extractCSS = new ExtractTextPlugin('css/style.css');
const uglifyJs = new UglifyJsPlugin();

module.exports = {
  entry: {
    app: './src/app.js'
  },
  
  output: {
    filename: 'js/[name].min.js',
    path: __dirname + '/production/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css/,
        use: extractCSS.extract({
          use: {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            filename: 'img/[name].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    extractCSS,
    uglifyJs
  ]
}