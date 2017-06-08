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

app.get('*', function(req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.set(result)
    res.end()
  })
})

app.listen(projectCfg.devServerPort, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log(`Server running on port: ${projectCfg.devServerPort}`)
  console.log('Webpack build running...')
})
