
var fs = require('fs');
var cheerio = require('cheerio');
var through = require('through2');
var pygmentize = require('pygmentize-bundled');
var util = require('gulp-util');

module.exports = function(options) {

  var options = options || {};

  return through.obj(function(file, enc, callback) {

    if (!file.isBuffer()) {
      this.push(file);
      callback();
    }
    var string = file.contents.toString();
    var self = this;

    var $ = cheerio.load(string);
    var $highlights = $('[data-pygmentize]');
    var isHighlighted = 0;

    if ($highlights.length == 0) {
      this.push(file);
      callback();
    }

    function finish() {
      if (isHighlighted >= $highlights.length) {
        util.log('Highlighted ' + file.relative);
        file.contents = new Buffer($.html());
        self.push(file);
        callback();
      }
    }

    $highlights.each(function(i) {

      var $self = $(this);
      var lang = $(this).data('pygmentize') || 'html';
      if (lang == 'html') {
        var contents = $(this).html();
      } else {
        var contents = $(this).text();
      }

      pygmentize({ lang: lang, format: 'html' }, contents, function(err, result) {
        $self.html(result.toString());
        isHighlighted++;
        finish();
      });

    });

  });

};
