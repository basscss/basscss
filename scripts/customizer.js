
// Build customizer data

var fs = require('fs');
var path = require('path');
var customCssData = require('custom-css/tasks/data');
var pkg = require('../package.json');

var modules = pkg.basscss.modules;
modules = modules.concat(pkg.basscss.optional_modules);

var options = {
  modules: modules,
  variables: [
    'basscss-defaults',
  ],
  dirname: path.join(__dirname, '..')
};

var data = customCssData(options);

fs.writeFileSync( path.join(__dirname, '../docs/src/docs/customize/data.json'), JSON.stringify(data) );


