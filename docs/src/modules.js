
var fs = require('fs');

module.exports = function() {

  var modules = [];
  var npmUrl = 'http://npmjs.com/package/';

  var dependencies = Object.keys(require('../../package.json').dependencies);
  dependencies.forEach(function(d) {
    var version = require(d + '/package.json').version;
    modules.push({
      name: d,
      version: version,
      permalink: npmUrl + d
    });
  });

  return modules;

};

