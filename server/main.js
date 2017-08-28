'use strict'
const express = require('express')
const resolve = require('path').resolve
const logger = require('./logger')
const setup = require('./middleware/frontendMiddleware')
const projectCfg = require('../project.config')

const app = express()

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: `/${projectCfg.basename}/`
})

const port = process.env.NODE_ENV === 'production' ? projectCfg.prodServerPort : projectCfg.devServerPort

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 8010})
// const wss = new WebSocketServer({port: 443})
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('Received from client: %s', message)
    ws.send('Server received from client: ' + message)
  })
})

app.listen(port, function (err) {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port, projectCfg.host, projectCfg.basename)
})
