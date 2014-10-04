
var path = require('path');
var cheerio = require('cheerio');
var through = require('through2');
var util = require('gulp-util');

module.exports = function(options) {

  var options = options || {};

  return through.obj(function(file, enc, callback) {

    var $ = cheerio.load(file.contents.toString());
    var $navlinks = $('[data-nav-item]');

    if (!$navlinks) {
      this.push(file);
      callback();
    }

    $navlinks.each(function(i) {
      if ($(this).attr('href') == '/' + path.dirname(file.relative)) {
        $(this).addClass('is-active');
      }
    });

    util.log('Checked link active state for ' + file.relative);

    file.contents = new Buffer($.html());
    this.push(file);
    callback();

  });

};
