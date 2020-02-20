const path = require("path");

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve("tslint-config-airbnb")), "./"),
    path.join(path.dirname(require.resolve("tslint-config-prettier")), "./")
  ],
  rules: {
    deprecation: true,
    semicolon: false,
    "trailing-comma": false,
    eofline: false,
    "no-consecutive-blank-lines": false,
    quotemark: {
      severity: "warn",
      options: ["single", "jsx-double"]
    },
    "no-trailing-whitespace": false,
    "ordered-imports": {
      severity: "warn"
    },
    "import-name": false,
    align: false,
    "max-line-length": false,
    typedef: [
      true,
      "call-signature",
      "parameter",
      "member-variable-declaration"
    ],
    curly: true
  }
};
