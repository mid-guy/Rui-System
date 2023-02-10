/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env.PATH}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
