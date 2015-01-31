
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var _ = require('lodash');

var fm = require('front-matter');
var rename = require('gulp-rename');
var marked = require('marked');
var markedExample = require('marked-example');
var through = require('through2');

//var model = require('../docs/src/model');

var data = require('../package.json');

data.partials = {};
// Wrap in partials/index.js ?
data.partials.footer = fs.readFileSync(path.join(__dirname, '../docs/src/partials/footer.html'), 'utf8');

/*
var options = {
  setup: function(swig) {
    require('swig-highlight').apply(swig);
    swig.setDefaults({
      loader: swig.loaders.fs(path.resolve(__dirname, '../docs/src'))
    });
  },
  defaults: {
    cache: false
  },
  data: model
};
*/

var exampleOptions = {
  classes: {
    container: 'mb2 bg-darken-1 rounded',
    rendered: 'p2',
    code: 'm0 p2 bg-darken-1 rounded-bottom'
  }
};

var renderer = new marked.Renderer();
renderer.code = markedExample(exampleOptions);

var md = function(opt) {
  return through.obj(function(file, encoding, callback) {
    var contents = file.contents.toString();
    var html = marked(contents, { renderer: renderer });

      // Front matter example
      //var matter = fm(contents);
      //var html = marked(matter.body, { renderer: renderer });
      //var layout = matter.attributes.layout || null;
      //var page = matter.attributes.page || null;
      //var isguide = matter.attributes.isguide || false;
 
      /*
      html = '{% block content %}\n' + html + '\n{% endblock %}\n';
      if (isguide) {
        html = '{% set isguide = true %}\n' + html;
      }
      if (page) {
        html = '{% set page = ' + page + ' %}\n' + html;
      }
      if (layout) {
        html = '{% extends "' + layout + '" %}\n' + html;
      } else {
        html = '{% extends "layouts/docs.html" %}\n' + html;
      }
      */

    file.contents = new Buffer(html);
    this.push(file);
    callback();
  });
};

// Consider layout as an option
var layout = fs.readFileSync(path.join(__dirname, '../docs/src/layouts/base.html'), 'utf8');

var tpl = function(opt) {
  return through.obj(function(file, encoding, callback) {
    var contents = file.contents.toString();
    data.content = contents;
    var template = _.template(layout);
    var html = template(data);
    file.contents = new Buffer(html);
    this.push(file);
    callback();
  });
};

module.exports = function() {
  gulp.src([ './docs/src/templates/**/*.html' ])
    .pipe(tpl())
    .pipe(rename({ extname: '.lodash.html' }))
    .pipe(gulp.dest('./'));

  gulp.src('./docs/src/templates/**/*.md')
    .pipe(md())
    .pipe(rename({ extname: '.lodash.html' }))
    .pipe(tpl())
    .pipe(gulp.dest('./'));
};

