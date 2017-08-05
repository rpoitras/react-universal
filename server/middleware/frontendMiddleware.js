'use strict'

const express = require('express')
const path = require('path')
const compression = require('compression')

/**
 * Applies development middlewares.
 *
 * @param app
 * @param webpackCfg
 * @param projectCfg
 */
const addDevMiddlewares = (app, webpackCfg, projectCfg) => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackCfg)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    quiet: true,
    lazy: false,
    publicPath: webpackCfg.output.publicPath,
    contentBase: path.resolve(projectCfg.paths.basePath, projectCfg.paths.appDir),
    stats: 'errors-only'
  })

  app.use(middleware)

  app.use(webpackHotMiddleware(compiler, {
    path: `/${projectCfg.basename}/__webpack_hmr`,
    timeout: 20000,
    heartbeat: 10 * 1000,
    reload: true,
    dynamicPublicPath: true
  }))

  // webpackDevMiddleware uses memory-fs internally to store build artifacts
  const fs = middleware.fileSystem

  app.get('statistics.html', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'statistics.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
}

/**
 * Apply production middlewares.
 *
 * @param app
 * @param options
 */
const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // Compression middleware compresses your server responses which makes them smaller (applies also to assets).
  // Read more about that technique and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression())
  app.use(publicPath, express.static(outputPath))

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))
}

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production'

  if (isProd) {
    addProdMiddlewares(app, options)
  } else {
    const projectCfg = require('../../project.config')
    const webpackCfg = require('../../webpack.config')
    addDevMiddlewares(app, webpackCfg, projectCfg)
  }

  return app
}
