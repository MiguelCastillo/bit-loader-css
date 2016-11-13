var loadStyleName = "bit-loader-css/loadstyle.js";

var defaults = {
  extensions: ["css"],
  dependency: function cssDependency(meta) {
    return {
      deps: [loadStyleName],
      source: "require('" + loadStyleName + "')(" + JSON.stringify(meta.source) + ");"
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
