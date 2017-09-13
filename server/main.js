'use strict'

const express = require('express')
const resolve = require('path').resolve
const logger = require('./logger')
const setup = require('./middleware/frontendMiddleware')
const projectConfig = require('../project.config')

const app = express()

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: `/${projectConfig.basename}/`
})

const port = process.env.NODE_ENV === 'production' ? projectConfig.prodServerPort : projectConfig.devServerPort

app.listen(port, function (err) {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port, projectConfig.host, projectConfig.basename)
})
