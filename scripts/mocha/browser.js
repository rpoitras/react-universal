require('babel-register')()

const jsdom = require('jsdom')
const { JSDOM } = jsdom

const exposedProperties = ['window', 'navigator', 'document']

const { window } = new JSDOM('')
const { document } = (new JSDOM('')).window

Object.keys(window.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = window.document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

documentRef = document
