const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  basename: 'react-universal',
  host: 'localhost',

  /** The environment to use when building the project */
  env: NODE_ENV,

  paths: {
    basePath: __dirname,
    appDir: './src/main/web/app',
    app: './src/main/web/app/index.js',
    html: './src/main/web/app/index.html',
    favicon: './src/main/web/app/favicon.ico',
    src: path.resolve(__dirname, 'src/main/web/app'),
    dist: path.resolve(__dirname, 'build/dist'),
    routes: path.resolve(__dirname, 'src/main/web/app/routes'),
    assets: path.resolve(__dirname, 'src/main/web/app/assets'),
    react: path.resolve(__dirname, 'node_modules/react')
  },

  devServerPort: 4000,

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
