
var fs = require('fs');
var cssdata = require('custom-css/tasks/data');

module.exports = function() {

  var p = require('../package.json');
  var modules = cssdata(p.css.modules);
  var optionals = cssdata(p.css.optionalModules);
  var variables = cssdata(p.css.variables);

  fs.writeFileSync('./docs/customize/modules.json', JSON.stringify(modules));
  fs.writeFileSync('./docs/customize/optionals.json', JSON.stringify(optionals));
  fs.writeFileSync('./docs/customize/variables.json', JSON.stringify(variables));

};

