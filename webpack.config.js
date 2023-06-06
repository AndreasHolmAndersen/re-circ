
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // ... other webpack configuration options ...
  plugins: [new NodePolyfillPlugin()],
};
