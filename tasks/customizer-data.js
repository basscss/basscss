
var fs = require('fs');
var cssdata = require('custom-css/tasks/data');

module.exports = function() {

  var p = require('../package.json');
  var modules = cssdata(p.basscss.modules);
  var variables = cssdata(p.basscss.variables);

  fs.writeFileSync('./docs/customize/modules.json', JSON.stringify(modules));
  fs.writeFileSync('./docs/customize/variables.json', JSON.stringify(variables));

};

