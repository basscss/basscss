
var fs = require('fs');

module.exports = function() {
  return {
    scope: true,
    template: fs.readFileSync('./docs/src/js/customize/module.html.ng', 'utf8')
  }
};
