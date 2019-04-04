/* eslint-disable */
const withCSS = require('@zeit/next-css');
const withLESS = require('@zeit/next-less');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY)

// const cssConfig =
const dirConfig = {
  distDir: '_next'
}

module.exports = withCSS(dirConfig)
