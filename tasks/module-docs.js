
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var header = require('gulp-header');
var footer = require('gulp-footer');
var marked = require('gulp-marked');
var markedExample = require('marked-example');
var camelcase = require('camel-case');

module.exports = function() {

  var exampleOptions = {
    classes: {
      container: 'mb2 bg-darken-1 rounded',
      rendered: 'p2',
      code: 'm0 p2 bg-darken-1 rounded-bottom'
    }
  };

  var markedOptions = {
    renderer: { code: markedExample(exampleOptions) }
  };

  var sources = require('../package.json').css;

  var modules = sources.modules;
  modules = modules.concat(sources.optionalModules);

  modules.forEach(function(module) {
    var filename = './node_modules/' + module + '/README.md';
    var data = require('../node_modules/' + module + '/package.json');
    var html = '{% extends "layouts/docs.html" %}\n' + 
      '{% set page = {} %}\n' +
      '{% set page.title = "' + module + '" %}\n' +
      '{% set isdocs = true %}\n' +
      '{% set ismodule = true %}\n' +
      '{% set module = modules.' + camelcase(module) + ' %}\n' +
      '{% set module.version = "' + data.version + '" %}\n' +
      '{% block content %}\n\n' +
      '{{ module.content | safe }}\n' +
      '\n\n{% endblock %}\n';

    fs.writeFileSync(path.join(__dirname, '../docs/src/templates/docs/modules/' + module + '/index.html'), html);
  });

};

