
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var markedExample = require('marked-example');
var camelcase = require('camel-case');
var cheerio = require('cheerio');

module.exports = function() {

  var result = {};
  var npmUrl = '//www.npmjs.com/package/';
  var sources = require('../../package.json').css;

  var exampleOptions = {
    classes: {
      container: 'mb2 bg-darken-1 rounded',
      rendered: 'p2',
      code: 'm0 p2 bg-darken-1 rounded-bottom'
    }
  };

  var renderer = new marked.Renderer();
  renderer.code = markedExample(exampleOptions);

  var modules = sources.modules;
  modules = modules.concat(sources.optionalModules);

  modules.forEach(function(module) {
    var pkg = require(module + '/package.json');
    var md = fs.readFileSync('./node_modules/' + module + '/README.md', 'utf8');
    var content = marked(md, { renderer: renderer });
    var isOptional;
    if (pkg.basscss) isOptional = pkg.basscss.optional || false;

    var $ = cheerio.load(content);
    var header = cheerio.load('');
    var title = $.root().children().first('h1').html();
    title = title.replace('Basscss ', '');
    header.root().append($.root().children().first('h1')).append($.root().children().first('p'));


    result[camelcase(module)] = {
      name: module,
      version: pkg.version,
      description: pkg.description,
      title: title,
      header: header.html(),
      content: $.html(),
      optional: isOptional,
      npmLink: npmUrl + module,
      githubLink: pkg.homepage
    };
  });

  return result;

};

