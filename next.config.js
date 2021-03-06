const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withSass(
  withCSS({
    webpack(config) {
      config.resolve.alias['styles'] = path.join(__dirname, 'lib/styles')
      return config
    }
  })
)
