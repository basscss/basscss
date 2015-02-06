
var fs = require('fs');
var Humanize = require('humanize-plus');
var cssstats = require('cssstats');

var cssSource = fs.readFileSync('./css/basscss.css', 'utf8');
var stats = cssstats(cssSource);
stats.sizeKB = Humanize.fileSize(stats.size);
stats.gzipSizeKB = Humanize.fileSize(stats.gzipSize);

module.exports = stats;

