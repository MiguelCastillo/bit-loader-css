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

function buildPlugin(options, builder) {
  return builder
    .configure(defaults)
    .configure(options);
}

module.exports = function factory(options) {
  return function(builder) {
    return buildPlugin(options, builder);
  };
};
