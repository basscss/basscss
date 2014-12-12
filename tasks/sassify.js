
var fs = require('fs');
var cssscss = require('css-scss');
var rework = require('rework');
var rnpm = require('rework-npm');

module.exports = function() {
  var packages = Object.keys(require('../package.json').dependencies);
  packages.forEach(function(p) {
    var cssString = '@import "' + p + '";';
    var imported = rework(cssString)
      .use(rnpm({ }))
      .toString();
    var result = cssscss(imported);
    var filename = p.replace('basscss-', '_') + '.scss';
    fs.writeFileSync('./scss/' + filename, result);
  });
 
};

