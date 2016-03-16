const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'

const prodPlugins = [

]

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  debug: true,

  entry: {
    js: './app/boot.js',
    vendor: [
      'reflect-metadata',
      'zone.js/dist/zone-microtask',
      'core-js',
      'angular2/core',
      'angular2/router',
      'angular2/platform/browser'
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [ path.resolve('node_modules') ]
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        loader: 'babel'
      },
      {
        test: /.*\.(scss|css)$/i,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },

  plugins: [
    ...prodPlugins,

    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    new HtmlWebpackPlugin({
        template: 'app/index.html',
        inject: 'body'
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
    })
  ]
}
