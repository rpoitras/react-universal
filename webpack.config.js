const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const PATHS = {
  app: './src/main/web/app/index.js',
  html: './src/main/web/app/index.html',
  favicon: './src/main/web/app/favicon.ico',
  src: path.resolve(__dirname, 'src/main/web/app'),
  dist: path.resolve(__dirname, 'build/dist'),
  routes: path.resolve(__dirname, 'src/main/web/app/routes'),
  assets: path.resolve(__dirname, 'src/main/web/app/assets'),
  react: path.resolve(__dirname, 'node_modules/react')
}

// base URL name
const BASENAME = 'react-universal'

// Webpack dev server port
const DEV_SERVER_PORT = 4000

// host address
const HOST = 'localhost'

// Enable production source maps
const ENABLE_PROD_SRC_MAPS = false

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.html,
  filename: 'index.html',
  inject: 'body',
  favicon: PATHS.favicon
})

/**
 * Webpack configuration.
 *
 * @param env arguments passed in on the command line.
 */
module.exports = env => {
  const webpackConfig = {
    context: __dirname,
    bail: env.prod
  }

  if (env.dev) {
    webpackConfig.devtool = 'inline-source-map'
  } else if (ENABLE_PROD_SRC_MAPS) {
    webpackConfig.devtool = 'cheap-module-source-map'
  }

  webpackConfig.entry = {
    js: env.prod ? [
	    'babel-polyfill',
	    PATHS.app
    ] : [
      'react-hot-loader/patch',
	    'webpack-dev-server/client?http://' + HOST + ':' + DEV_SERVER_PORT,
	    'webpack/hot/only-dev-server',
	    'babel-polyfill',
	    PATHS.app
	  ],

    route: PATHS.routes + '/routes.js',

    vendor: [
      'material-ui',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux'
    ]
  }

  webpackConfig.output = {
    path: PATHS.dist,

    pathinfo: !env.prod
  }

  if (env.dev) {
    webpackConfig.output.filename = '[name].js'
    webpackConfig.output.chunkFilename = '[id].js'
  } else {
    webpackConfig.output.filename = '[name].[hash].js'
    webpackConfig.output.chunkFilename = '[id].[chunkhash].js'
  }

  if (env.dev) {
    webpackConfig.output.publicPath = `http://${HOST}:${DEV_SERVER_PORT}/${BASENAME}/`
  } else {
    webpackConfig.output.publicPath = `/${BASENAME}/`
  }

  webpackConfig.resolve = {
    modules: [path.join(__dirname, '.'), './node_modules'],
    alias: {
      assets: PATHS.assets,
      react: PATHS.react
    },
    extensions: ['.js', '.jsx']
  }

  webpackConfig.externals = {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': 'true',
    'react/lib/ReactContext': 'true'
  }

  webpackConfig.module = {
    rules: [
      {
        test: /(\.js|\.jsx)$/,

        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,

        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?.*)?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(eot|ttf|wav|mp3)(\?.*)?$/,
        use: 'file-loader'
      }
    ]
  }

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),

    HtmlWebpackPluginConfig,

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new ExtractTextPlugin({
      filename: env.dev ? '[name].css' : '[name].[chunkhash].style.css',
      disable: false,
      allChunks: true
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': env.prod ? '"production"' : '"development"'
    })
  ]

  if (env.prod) {
    webpackConfig.plugins.push(
      new UglifyJSPlugin()
    )
  }

  webpackConfig.devServer = {
    hot: true,
    contentBase: PATHS.dist,
    port: DEV_SERVER_PORT,
    historyApiFallback: {
      index: `/${BASENAME}/`
    }
  }

  return webpackConfig}
