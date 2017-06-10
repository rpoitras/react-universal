const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackCfg = require('../../../../webpack.config')
const projectCfg = require('../../../../project.config')

const app = express()
const compiler = webpack(webpackCfg)

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true,
  quiet: true,
  lazy: false,
  publicPath: webpackCfg.output.publicPath,
  contentBase: path.resolve(projectCfg.paths.basePath, projectCfg.paths.appDir)
})
app.use(webpackDevMiddleware)
app.use(require('webpack-hot-middleware')(compiler))

// webpack-dev-middleware uses memory-fs internally to store build artifacts
const fs = webpackDevMiddleware.fileSystem
app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(file.toString())
    }
  })
})

app.listen(projectCfg.devServerPort, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log(`Server running on port: ${projectCfg.devServerPort}`)
  console.log('Webpack build running...')
})
