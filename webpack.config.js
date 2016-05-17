const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'

const prodPlugins = [

]

module.exports = {
  debug: true,

  devtool: 'cheap-module-source-map',

  entry: {
    app: './app/boot.ts',
    shim: './app/shim.ts',
    vendor: './app/vendor.ts'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          path.resolve('node_modules/rxjs'),
          path.resolve('node_modules/@angular')
        ]
      }
    ],

    loaders: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        loader: 'awesome-typescript-loader'
      },
      {
        test: /.*\.(scss|css)$/i,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],

    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', 'angular2', 'bundles')
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    root: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },

  plugins: [
    ...prodPlugins,

    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: [ 'app', 'shim', 'vendor' ],
        minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
        template: 'app/index.html',
        inject: 'body'
    }),
  ]
}
