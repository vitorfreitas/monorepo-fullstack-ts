const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /stories\/.*\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader')
      }
    ]
  })

  return config
}
