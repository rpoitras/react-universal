'use strict'

// const https = require('https')
// const fs = require('fs')
const url = require('url')
const WebSocket = require('ws')
const projectConfig = require('../project.config')

// const server = https.createServer({
//   cert: fs.readFileSync(`${process.cwd()}/conf/server.crt`),
//   key: fs.readFileSync(`${process.cwd()}/conf/server.key`)
// })
//
// const wss = new WebSocket.Server({
//   server: server,
//   port: projectConfig.wsServerPort
// })

const wss = new WebSocket.Server({ port: projectConfig.wsServerPort })

wss.on('open', function open () {
  console.log('websocket opened')
  wss.send(Date.now())
})

wss.on('connection', function connection (ws, req) {
  const location = url.parse(req.url, true)

  console.log('wss.connection().location', location)
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  // You may want to provide topics or queues. The location.path can be used.
  // (see https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express)
  console.log(`Client wants to use destination: ${location.path}`)

  ws.on('message', function incoming (message) {
    console.log('received: %s', message)
    ws.send('Server received from client: ' + message)
  })

  ws.on('close', function close () {
    console.log('websocket disconnected')
  })
})
