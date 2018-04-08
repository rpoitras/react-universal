const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const project = require('./project.config')

const __DEV__ = project.env === 'development'
const __PROD__ = project.env === 'production'

// Enable production source maps
const ENABLE_PROD_SRC_MAPS = false

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: project.paths.html,
  filename: 'index.html',
  inject: 'body',
  favicon: project.paths.favicon
})

const webpackConfig = {
  context: __dirname,
  bail: __PROD__
}

if (__DEV__) {
  webpackConfig.devtool = 'inline-source-map'
  webpackConfig.mode = 'development'
} else if (ENABLE_PROD_SRC_MAPS) {
  webpackConfig.devtool = 'cheap-module-source-map'
  webpackConfig.mode = 'production'
}

webpackConfig.entry = {
  app: __PROD__ ? [
    'babel-polyfill',
    project.paths.app
  ] : [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=/${project.basename}/__webpack_hmr`,
    'babel-polyfill',
    project.paths.app
  ]
}

webpackConfig.output = {
  path: project.paths.dist,

  pathinfo: !__PROD__
}

if (__DEV__) {
  webpackConfig.output.filename = '[name].js'
  webpackConfig.output.chunkFilename = '[id].js'
  webpackConfig.output.publicPath = `http://${project.host}:${project.devServerPort}/${project.basename}/`
} else {
  webpackConfig.output.filename = '[name].[hash].js'
  webpackConfig.output.chunkFilename = '[id].[chunkhash].js'
  webpackConfig.output.publicPath = `/${project.basename}/`
}

webpackConfig.resolve = {
  modules: [path.join(__dirname, '.'), './node_modules'],
  alias: {
    assets: project.paths.assets,
    react: project.paths.react,
    util: project.paths.util
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
          loader: 'babel-loader?presets[]=react,presets[]=env,presets[]=stage-2'
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
  new webpack.optimize.ModuleConcatenationPlugin(),

  new webpack.HotModuleReplacementPlugin(),

  new webpack.NoEmitOnErrorsPlugin(),

  HtmlWebpackPluginConfig,

  new ExtractTextPlugin({
    filename: __DEV__ ? '[name].css' : '[name].[chunkhash].style.css',
    disable: false,
    allChunks: true
  }),

  new webpack.NamedModulesPlugin(),

  new webpack.DefinePlugin({
    'process.env': {
      'APP_BASE_NAME': JSON.stringify(project.basename),
      'APP_DEV_SERVER_PORT': project.devServerPort
    }
  }),

  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|jsx|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }),

  new Visualizer({
    filename: './statistics.html'
  })
]

module.exports = webpackConfig
