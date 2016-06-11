const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv.toLowerCase() === 'production'

const prodPlugins = isProduction ? [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    sourceMap: false,
    compress: {
      dead_code: true,
      screw_ie8: true,
      unused: true,
      warnings: false
    }
  })
] : []

module.exports = {
  debug: !isProduction,

  devtool: isProduction ? '' : 'cheap-module-source-map',

  entry: {
    shim: './app/shim.ts',
    vendor: './app/vendor.ts',
    app: './app/boot.ts'
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
        test: /.*\.(scss)$/,
        exclude: /node_modules/,
        loaders: [ 'exports?module.exports.toString()', 'css', 'sass' ]
      },
      {
        test: /.*\.(html)$/i,
        exclude: /node_modules/,
        loaders: [ 'html' ]
      },
      {
        test: /\.(eot|woff|ttf|svg|png|otf)$/,
        loaders: [ { loader: 'url', query: { limit: 100 } } ]
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
    modules: [ path.join(__dirname, 'app'), 'node_modules' ]
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },

  plugins: [
    ...prodPlugins,

    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    new ForkCheckerPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
        name: [ 'app', 'vendor', 'shim' ],
        minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
        template: 'app/index.html',
        inject: 'body'
    }),
  ],

  devServer: {
    stats: {
      colors: true,
      chunks: false,
      assets: false,
      warnings: false
    }
  }
}
