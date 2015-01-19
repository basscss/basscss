
var fs = require('fs');
var path = require('path');
var camelcase = require('camel-case');
var swig = require('swig');

module.exports = function() {

  var modules = require('../package.json').basscss.modules;
  var model = new require('../docs/src/model.js')();

  require('swig-highlight').apply(swig);
  swig.setDefaults({
    loader: swig.loaders.fs(path.resolve(__dirname, '../docs/src/templates'))
  });

  modules.forEach(function(module) {
    var filename = './node_modules/' + module + '/README.md';
    var html = '{% extends "layouts/docs.html" %}\n' + 
      '{% block content %}\n\n' +
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

    var tpl = swig.compile(html, { filename: '/docs/modules/' + camelcase(module) + '.html' });
    model.page = model.modules[camelcase(module)];
    model.module = model.modules[camelcase(module)];

    var rendered = tpl(model);

    var dir = path.join(__dirname, '../docs/modules/' + module);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    fs.writeFileSync(dir + '/index.html', rendered);
  });

};

