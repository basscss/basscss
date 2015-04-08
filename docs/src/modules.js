
var path = require('path');
var moduleInfo = require('get-module-info');
var modules = require('../../package.json').basscss.modules;

modules = modules.map(function(mod) {
  return moduleInfo(mod, { dirname: path.join(__dirname, '../..') });
});

module.exports = modules;

