'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  /*API_BASE_URL: '"http://scm1test.azurewebsites.net/api/"'*/
  API_BASE_URL: '"https://api.myjson.com/bins/"'
})
