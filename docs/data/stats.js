
var fs = require('fs');
var filesize = require('filesize');
var cssstats = require('cssstats');

var cssSource = fs.readFileSync('./css/basscss.css', 'utf8');
var stats = cssstats(cssSource);
stats.sizeKB = filesize(stats.size);
stats.gzipSizeKB = filesize(stats.gzipSize);

module.exports = stats;

