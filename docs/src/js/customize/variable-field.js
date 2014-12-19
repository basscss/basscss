
var fs = require('fs');

module.exports = function() {
  return {
    scope: true,
    template: fs.readFileSync('./docs/src/js/customize/variable-field.html.ng', 'utf8')
  }
};
