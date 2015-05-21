## kraken-devtools-less

This module is a plugin for [kraken-devtools](https://github.com/krakenjs/kraken-devtools) that compile less files on the fly and support custom less options.

To enable, set the module and files properties in your kraken-devtools config, e.g.:

```
{
    "less": {
        "module": "kraken-devtools/plugins/less",
        "files": "/css/**/*.css",
        "ext": "less",
        "relativeUrls": true
    }
}
```

You can define any less option in the config above.