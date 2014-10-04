
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
    util.log('Including Example');
    var string = file.contents.toString();
    var self = this;

    var $ = cheerio.load(string);
    var $includes = $('[data-include-example]');
    var isIncluded = 0;

    if ($includes.length == 0) {
      this.push(file);
      callback();
    }

    function finish() {
      if (isIncluded >= $includes.length) {
        util.log('Done including examples');
        file.contents = new Buffer($.html());
        self.push(file);
        callback();
      }
    }

    $includes.each(function(i) {

      var $self = $(this);
      var path = $(this).data('include-example');
      var partial = fs.readFileSync(path, 'utf8');

      util.log('Including example in ' + file.relative + ', ' + path);

      pygmentize({ lang: 'html', format: 'html' }, partial, function(err, result) {

        var div = $('<div></div>');
        var code = $(result.toString());

        $(div).addClass('Example_rendered')
          .append('\n' + partial);
        $(code).addClass('Example_code');
        $self.before('\n')
          .html('')
          .append('\n' + div)
          .append('\n' + code)
          .addClass('Example');

        isIncluded++;
        finish();

      });

    });

  });

};
