
var fs = require('fs');

module.exports = function() {

  var result = [];
  var npmUrl = '//www.npmjs.com/package/';
  var sources = require('../../package.json').css;

  var modules = sources.modules;
  modules = modules.concat(sources.optionalModules);
  modules.forEach(function(module) {
    var pkg = require(module + '/package.json');
    result.push({
      name: module,
      version: pkg.version,
      description: pkg.description,
      npmLink: npmUrl + module,
      githubLink: pkg.homepage
    });
  });

  return result;

};

