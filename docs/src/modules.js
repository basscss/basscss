
var path = require('path');
var moduleInfo = require('get-module-info');
var marked = require('marked');
var modules = require('../../package.json').basscss.modules;
var obj = {};

modules = modules.map(function(mod) {
  return moduleInfo(mod, { dirname: path.join(__dirname, '../..') });
});

modules.forEach(function(mod) {
  mod.body = marked(mod.readme);
  obj[mod.name] = mod;
});

module.exports = obj;

