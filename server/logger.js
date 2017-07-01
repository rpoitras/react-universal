'use strict'

const chalk = require('chalk')
const ip = require('ip')

const divider = chalk.gray('\n---------------------------------------------------------------------')

/**
 * Logger middleware, add customized logger functions as needed
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red(err))
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, name) => {
    console.log(`Server started ${chalk.green('✓')}`)

    const devMsg = process.env.NODE_ENV === 'development'
      ? 'Webpack build running. Please wait for \'webpack built\' log statement.' : ''

    console.log(
      `${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://${host}:${port}/${name}`)}
            LAN: ${chalk.magenta(`http://${ip.address()}:${port}/${name}`)}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
      ${chalk.yellow(`${devMsg}`)}
    `)
  }
}

module.exports = logger
