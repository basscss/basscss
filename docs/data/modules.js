
var path = require('path');
var moduleInfo = require('get-module-info');
var marked = require('marked');
var titleCase = require('title-case');
var modules = require('../../package.json').basscss.modules;
var obj = {};

modules = modules.map(function(name) {
  var mod = moduleInfo(name, { dirname: path.join(__dirname, '../..') });
  // Adjust this at the get-module-info level
  var title = mod.title.replace(/^Basscss\-/, '').replace(/ui\-/,'').replace(/utility\-/,'');
  mod.title = titleCase(title);
  return mod;
});

modules.forEach(function(mod) {
  mod.body = marked(mod.readme);
  obj[mod.name] = mod;
});

module.exports = obj;

