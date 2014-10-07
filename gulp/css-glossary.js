
var fs = require('fs');
var through = require('through2');
var css = require('css');
var util = require('gulp-util');
var swig = require('swig');

module.exports = function(options) {

  var options = options || {};
  var src = options.css || null;
  if (!src) return false;

  return through.obj(function(file, encoding, callback) {

    util.log('Parsing CSS...');

    var stylesheet = fs.readFileSync(src, 'utf8');
    var obj = css.parse(stylesheet, {});
    var data = obj.stylesheet;
    data.parsed = [];
    data.size = Math.floor(fs.statSync(src).size / 1000);

    for (var i = 0; i < data.rules.length; i++) {
      var rule = data.rules[i];
      if (rule.selectors) {
        if (rule.declarations) {
          var declarations = rule.declarations;
          var decs = '';
          for (var j = 0; j < declarations.length; j++) {
            decs += declarations[j].property + ': ' + declarations[j].value + '; ';
          }
          data.parsed.push({
            $index: data.parsed.length,
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
          data.parsed.push({
            $index: data.parsed.length,
            selectors: rule.rules[j].selectors.join(', '),
            declarations: decs,
            media: rule.media
          });
        }
      }
    }

    util.log('CSS Parsed');

    var rendered = swig.render(file.contents.toString(), { filename: file.path, locals: data });
    util.log('Table of Styles Rendered');

    file.contents = new Buffer(rendered);

    this.push(file);
    callback();

  });

};

