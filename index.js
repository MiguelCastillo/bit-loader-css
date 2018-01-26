const combineSourceMap = require("combine-source-map");
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
    if (meta.name === loadStyleName) {
      return;
    }

    const smString = combineSourceMap
      .create()
      .addFile({
        source: meta.source,
        sourceFile: meta.filename
      }, {
        line: 1
      })
      .comment();

    const source = JSON.stringify(combineSourceMap.removeComments(meta.source));

    return {
      source: `require("${loadStyleName}")(\n${source}\n);\n${smString}\n`
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
