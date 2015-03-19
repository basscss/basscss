
var fs = require('fs');
var cssscss = require('css-scss');
var rework = require('rework');
var rnpm = require('rework-npm');

module.exports = function() {
  var modules = require('../package.json').basscss.modules;
  modules = modules.concat(require('../package.json').basscss.variables);
  modules.forEach(function(m) {
    var cssString = '@import "' + m + '";';
    var imported = rework(cssString)
      .use(rnpm())
      .toString();
    var result = cssscss(imported);
    var filename = m.replace('basscss-', '') + '.scss';
    filename = '_' + filename;
    fs.writeFileSync('./scss/' + filename, result);
  });
 
};

