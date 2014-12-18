
var fs = require('fs');
var cssdata = require('custom-css/tasks/data');

module.exports = function() {

  var p = require('../package.json');
  var modules = cssdata(p.css.modules);
  var optionals = cssdata(p.css.optionalModules);
  var variables = cssdata(p.css.variables);

  fs.writeFileSync('./docs/customizer/modules.json', JSON.stringify(modules));
  fs.writeFileSync('./docs/customizer/optionals.json', JSON.stringify(optionals));
  fs.writeFileSync('./docs/customizer/variables.json', JSON.stringify(variables));

};

