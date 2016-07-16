var PluginBuilder = require("bit-plugin-builder");

// For now we will use the full path as the name while this
// issue is resolved:
// https://github.com/MiguelCastillo/bit-loader/issues/187
var loadStyleName = __dirname + "/loadstyle.js";

var defaults = {
  extensions: ["css"],
  dependency: function cssDependency(meta) {
    return {
      deps: [loadStyleName],
      source: "require(\"" + loadStyleName + "\")(" + JSON.stringify(meta.source) + ");"
    };
  }
};

function cssPlugin(options) {
  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = cssPlugin;
