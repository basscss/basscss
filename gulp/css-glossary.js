
var fs = require('fs');
var through = require('through2');
var cheerio = require('cheerio');
var css = require('css');
var mustache = require('mustache');
var util = require('gulp-util');

module.exports = function(options) {

  var options = options || {};
  var src = options.css || null;
  if (!src) return false;

  return through.obj(function(file, encoding, callback) {

    var $ = cheerio.load(file.contents.toString());
    var $container = $('[data-include-rules]');

    if (!$container.length) {
      this.push(file);
      callback();
      return false;
    }

    util.log('Parsing CSS...');

    var stylesheet = fs.readFileSync(src, 'utf8');
    var obj = css.parse(stylesheet, {});
    var stylesheet = obj.stylesheet;
    stylesheet.parsed = [];
    stylesheet.size = Math.floor(fs.statSync(src).size / 1000);

    for (var i = 0; i < stylesheet.rules.length; i++) {
      var rule = stylesheet.rules[i];
      if (rule.selectors) {
        if (rule.declarations) {
          var declarations = rule.declarations;
          var decs = '';
          for (var j = 0; j < declarations.length; j++) {
            decs += declarations[j].property + ': ' + declarations[j].value + '; ';
          }
          stylesheet.parsed.push({
            $index: stylesheet.parsed.length,
            selectors: rule.selectors.join(', '),
            declarations: decs
          });
        }
      }
      if (rule.rules) {
        for (var j = 0; j < rule.rules.length; j++) {
          var decs = '';
          for (var k = 0; k < rule.rules[j].declarations.length; k++) {
            decs += rule.rules[j].declarations[k].property + ': ' + rule.rules[j].declarations[k].value + '; ';
          }
          stylesheet.parsed.push({
            $index: stylesheet.parsed.length,
            selectors: rule.rules[j].selectors.join(', '),
            declarations: decs, media: rule.media
          });
        }
      }
    }

    util.log('CSS Parsed');

    var rendered = mustache.render($container.html(), stylesheet);

    util.log('Table of Styles Rendered');

    $container.html(rendered);

    file.contents = new Buffer($.html());

    this.push(file);
    callback();

  });

};

