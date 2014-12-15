
var fs = require('fs');

module.exports = function() {

  var modules = [];
  var npmUrl = '//www.npmjs.com/package/';

  var dependencies = Object.keys(require('../../package.json').dependencies);
  dependencies.forEach(function(d) {
    var version = require(d + '/package.json').version;
    var description = require(d + '/package.json').description;
    modules.push({
      name: d,
      version: version,
      description: description,
      permalink: npmUrl + d
    });
  });

  return modules;

};

