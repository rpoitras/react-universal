const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackCfg = require('../../../../webpack.config')
const projectCfg = require('../../../../project.config')

const app = express()
const compiler = webpack(webpackCfg)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackCfg.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(projectCfg.paths.dist, 'index.html'))
})

app.listen(projectCfg.devServerPort, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log(`Server running on port: ${projectCfg.devServerPort}`)
})
