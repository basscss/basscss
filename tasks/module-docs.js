
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
      '{% block content %}\n' +
      '{{ module.content | safe }}\n' +
      '{% endblock %}\n';

    var tpl = swig.compile(html, { filename: '/docs/modules/' + camelcase(module) + '.html' });
    model.page = model.modules[camelcase(module)];
    model.module = model.modules[camelcase(module)];

    var rendered = tpl(model);

    var dir = path.join(__dirname, '../docs/modules/' + module);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    fs.writeFileSync(dir + '/index.html', rendered);
  });

};

