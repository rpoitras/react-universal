const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  basename: 'react-universal',
  host: 'localhost',

  /** The environment to use when building the project */
  env: NODE_ENV,

  paths: {
    basePath: __dirname,
    appDir: './app',
    app: './app/index.js',
    html: './app/index.html',
    favicon: './app/favicon.ico',
    src: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'build'),
    routes: path.resolve(__dirname, 'app/routes'),
    assets: path.resolve(__dirname, 'app/assets'),
    react: path.resolve(__dirname, 'node_modules/react')
  },

  devServerPort: 4000,
  prodServerPort: 4100,

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
