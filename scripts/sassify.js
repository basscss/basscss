
var fs = require('fs');
var path = require('path');
var cssscss = require('css-scss');
var cssnext = require('cssnext');
var pkg = require('../package.json');

var options = {
  features: {
    rem: false,
    customProperties: false,
    reduced: false,
    customMediaQueries: false,
    //color: false,
    //autoprefixer: false,
  }
};

var modules = pkg.basscss.modules;
modules = modules.concat(pkg.basscss.optional_modules);
modules = modules.concat(pkg.basscss.variables);

var dest = path.join(__dirname, '../scss/');

modules.forEach(function(m) {

  var css = '@import "' + m + '";';
  var imported = cssnext(css, options);
  var scss = cssscss(imported);
  var filename = '_' + m.replace('basscss-', '') + '.scss';

  fs.writeFileSync(dest + filename, scss);

});

