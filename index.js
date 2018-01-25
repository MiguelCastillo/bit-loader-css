const path = require("path");
const loadStylePath = path.join(__dirname, "loadstyle.js");
const loadStyleName = "$bit-loader-css/loadstyle";

var defaults = {
  match: {
    extensions: ["css"],
    name: loadStyleName
  },
  resolve: function(meta) {
    if (meta.name === loadStyleName) {
      return {
        path: loadStylePath
      };
    }
  },
  dependency: function cssDependency(meta) {
    if (meta.name !== loadStyleName) {
      return {
        source: "require('" + loadStyleName + "')(" + JSON.stringify(meta.source) + ");"
      };
    }
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
