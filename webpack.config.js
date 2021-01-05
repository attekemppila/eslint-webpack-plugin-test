/* eslint-env node */

const EslintPlugin = require("eslint-webpack-plugin");

module.exports = {
  plugins: [
    new EslintPlugin({
      lintDirtyModulesOnly: true,
    }),
  ],
};
