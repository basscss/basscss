
var Humanize = require('humanize-plus');
var hljs = require('highlight.js');

module.exports = {
  removePrefix: function(string) {
    if (!string) return false;
    var result = string.replace(/^Basscss|^basscss-/, '');
    return result;
  },
  fileSize: function(n) {
    return Humanize.fileSize(n);
  },
  highlightCss: function(string) {
    return hljs.highlight('css', string).value;
  },
};
