
var fs = require('fs');
var css= require('css');

module.exports = function(src) {

  var stylesheet = fs.readFileSync(src, 'utf8');
  var obj = css.parse(stylesheet, {});
  var data = obj.stylesheet;

  data.parsed = [];
  data.size = (Math.round(fs.statSync(src).size / 100) / 10).toFixed(1);
  data.gzSize = (Math.round(fs.statSync(src + '.gz').size / 100) / 10).toFixed(1) || null;

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

  return data;

};

