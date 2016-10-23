# bit-loader-css
> bit-loader plugin for CSS


## Usage

### install

```
$ npm install bit-loader-css --save
```

### Bitbundler plugin configuration with SASS transform

``` javascript
var Bitbundler = require("bit-bundler");
var cssPlugin  = require("bit-loader-css");
var sassybits  = require("sassy-bits");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      cssPlugin({
        transform: sassybits.configure({ load: false })
      })
    ]
  }
});
```

## License

Licensed under MIT
