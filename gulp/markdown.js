
var fs = require('fs');
var path = require('path');
var through = require('through2');
var marked = require('marked');
var cheerio = require('cheerio');
var util = require('gulp-util');

//marked.setOptions(require('./marked-options'));
var renderer = new marked.Renderer();
renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return '<h' + level + ' id="' + escapedText + '"><a href="#' + escapedText + '">' + text + '</a></h' + level + '>\n';
};

marked.setOptions({
  renderer: renderer
})

module.exports = function(options) {

  var options = options || {};

  return through.obj(function(file, enc, callback) {

    util.log('Markdown');

    var string = file.contents.toString();
    var html = marked(string);
    var head = fs.readFileSync('./docs/partials/_head.html', 'utf8');

    var html = '<!doctype html>\n<html lang="en">\n' + head + '<body class="container px2">\n' + html + '\n</body>\n</html>';
    
    file.contents = new Buffer(html);
    var filename =  path.basename(file.path, path.extname(file.path)) + '.html';
    file.path = path.join(path.dirname(file.path), filename);

    this.push(file);
    callback();

  });

};

