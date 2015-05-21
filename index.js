'use strict';

var less = require('less');


module.exports = function (options) {

    var lessOptions = {};
    options.ext = options.ext || 'less';

    for (var k in options) {
        if (['module', 'files', 'ext'].indexOf(k) < 0) {
            lessOptions[k] = options[k];
        }
    }

    return function (data, args, callback) {
        var opts = {
            paths: args.paths,
            filename: args.context.name,
            dumpLineNumbers: 'comments'
        };

        for (var k in lessOptions) {
            opts[k] = lessOptions[k];
        }

        var parser = new (less.Parser)(opts);

        parser.parse(data.toString('utf8'), function (err, tree) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, tree.toCSS());
        });
    };

};
