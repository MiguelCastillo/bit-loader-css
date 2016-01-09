# bit-loader-css
> bit-loader plugin for CSS

The output of this plugin factory is a configuration Object that can be used as a [bit-loader](https://github.com/MiguelCastillo/bit-loader) plugin.

### Example

#### Simple plugin configuration with SASS transform

``` javascript
  var cssPlugin = require("bit-loader-css");
  var sassybits = require("sassy-bits");

  var pluginConfig = cssPlugin({
    transform: sassybits.configure({ load: false })
  });
```

### License

Licensed under MIT
