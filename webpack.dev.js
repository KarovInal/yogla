require("babel-polyfill");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/style.css');

module.exports = {
  entry: {
    polyfill: "babel-polyfill",
    app: './src/app.js'
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ['node_modules', 'src'],
    alias: {
      Data: __dirname + '/data/'
    }
  },

  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name].build.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },

      {
        test: /\.json$/,
        use: 'json-loader'
      },
    ]
  },

  plugins: [
    extractCSS
  ],

  devServer: {
    contentBase: "./dist",
    port: "3000",
    open: true
  }
}