var $ = require('gulp-load-plugins')({ lazy: true });
var fs = require('fs');
var config = require('./config');

module.exports = function() {
    var jsFiles = [],
        indexContents,
        scriptTagsPattern,
        match;

    indexContents = fs.readFileSync(config.scriptsHtml);
    scriptTagsPattern = /<script.+?src="(.+?)".*?><\/script>/gm;
    match = scriptTagsPattern.exec(indexContents);
    while (match) {
        jsFiles.push(config.source + match[1]);
        match = scriptTagsPattern.exec(indexContents);
    }
    jsFiles.pop(); // remove production script `main.min.js` 
    return jsFiles;
}