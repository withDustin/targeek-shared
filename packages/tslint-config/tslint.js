const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './'),
  ],
  rules: {
    semicolon: false,
    'trailing-comma': false,
  }
}