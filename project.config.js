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
    assets: path.resolve(__dirname, 'app/assets'),
    util: path.resolve(__dirname, 'app/util'),
    react: path.resolve(__dirname, 'node_modules/react')
  },

  devServerPort: 4000,
  prodServerPort: 4100,
  wsServerPort: 3100,

  wsDest: 'messaging/echo'
}
