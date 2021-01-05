/* eslint-env node */

module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script",
  },
  "env": {
    "browser": true,
  },
  "rules": {
    "indent": ["warn", 2],
    "no-console": "warn",
  },
};
