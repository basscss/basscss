
var path = require('path');
var moduleInfo = require('get-module-info');
var titleCase = require('title-case');
var marked = require('marked');
var renderer = require('./marked-renderer');
var modules = require('../../package.json').basscss.modules;
var obj = {};

modules = modules.map(function(name) {
  var mod = moduleInfo(name, { dirname: path.join(__dirname, '../..') });
  // Adjust this at the get-module-info level
  var title = mod.title.replace(/^Basscss\-/, ''); //.replace(/ui\-/,'').replace(/utility\-/,'');
  mod.title = titleCase(title);
  mod.body = marked(mod.readme, { renderer: renderer });
  mod.content = true;
  mod.path = '/' + mod.name.replace(/^basscss\-/,'');
  mod.module = true;
  return mod;
});


module.exports = modules;

