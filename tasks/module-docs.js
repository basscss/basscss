
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

  var sources = require('../package.json').basscss;

  var modules = sources.modules;

  modules.forEach(function(module) {
    var filename = './node_modules/' + module + '/README.md';
    var data = require('../node_modules/' + module + '/package.json');
    var html = '{% extends "layouts/module.html" %}\n' + 
      '{% set page = modules.' + camelcase(module) + ' %}\n' +
      '{% set isdocs = true %}\n' +
      '{% set module = modules.' + camelcase(module) + ' %}\n' +
      '{% block content %}\n\n' +
      '<!-- {{ module.header | safe }} -->\n' +
      '<div class="flex flex-wrap flex-center mb3">\n' +
      '<div class="flex-auto">\n' +
      '<h1 class="h4 m0">{{ module.name }}\n' +
      '<span class="h6">v{{ module.version }}</span>\n' +
      '{% if module.optional %}' +
      '<span class="h6 caps red">Optional</span>\n' +
      '{% endif %}' +
      '</h1>\n' +
      '<h1 class="caps m0">{{ module.title }}</h1>\n' +
      '</div>\n' +
      '<div class="mxn1 mb2">\n' +
      '<a href="{{ module.npmLink }}" class="h6 button button-narrow button-nav-light">NPM</a>\n' +
      '<a href="{{ module.githubLink }}" class="h6 button button-narrow button-nav-light">Github</a>\n' +
      '</div>\n' +
      '</div>\n' +
      '{{ module.content | safe }}\n' +
      '\n\n{% endblock %}\n';

    fs.writeFileSync(path.join(__dirname, '../docs/src/templates/docs/modules/' + module + '/index.html'), html);
  });

};

