'use strict'

const express = require('express')
const resolve = require('path').resolve
// const http = require('http')
// const url = require('url')
// const WebSocket = require('ws')
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

// const WebSocketServer = require('ws').Server
// const wss = new WebSocketServer({port: 8010})
// // const wss = new WebSocketServer({port: 443})
// wss.on('connection', function (ws) {
//   ws.on('message', function (message) {
//     console.log('Received from client: %s', message)
//     ws.send('Server received from client: ' + message)
//   })
// })
// OR...
// When using this style, change `app.listen` below to `server.listen`
//
// const server = http.createServer(app)
// const wss = new WebSocket.Server({ server })
//
// wss.on('connection', function connection (ws, req) {
//   const location = url.parse(req.url, true)
//
//   console.log('wss.connection().location', location)
//   // You might use location.query.access_token to authenticate or share sessions
//   // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
//   // You may want to provide topics or queues. The location.path can be used.
//   // (see https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express)
//
//   ws.on('message', function incoming (message) {
//     console.log('received: %s', message)
//     ws.send('Server received from client: ' + message)
//   })
// })

app.listen(port, function (err) {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port, projectCfg.host, projectCfg.basename)
})
