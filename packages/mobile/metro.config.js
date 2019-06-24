// Fixes problem when expo tries to required ./node_modules but on monorepo, the
// node_modules directory is at ../../node_modules

const path = require('path')

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../node_modules')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
