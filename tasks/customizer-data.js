
var fs = require('fs');
var cssData = require('custom-css/tasks/data');

module.exports = function() {
  var p = require('../package.json');
  var result = cssData(p);
  fs.writeFileSync('./docs/customizer/data.json', JSON.stringify(result, null, 2));
};

