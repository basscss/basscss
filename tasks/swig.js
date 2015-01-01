
var gulp = require('gulp');
var path = require('path');
var swig = require('gulp-swig');

var fm = require('front-matter');
var rename = require('gulp-rename');
var marked = require('marked');
var markedExample = require('marked-example');
var through = require('through2');

var model = require('../docs/src/model');

var options = {
  setup: function(swig) {
    require('swig-highlight').apply(swig);
    swig.setDefaults({
      loader: swig.loaders.fs(path.resolve(__dirname, '../docs/src/templates'))
    });
  },
  defaults: {
    cache: false
  },
  data: model
};

var exampleOptions = {
  classes: {
    container: 'mb2 bg-darken-1 rounded',
    rendered: 'p2',
    code: 'm0 p2 bg-darken-1 rounded-bottom'
  }
};

var renderer = new marked.Renderer();
renderer.code = markedExample(exampleOptions);

var mdSwig = function(opt) {
  return through.obj(function(file, encoding, callback) {
    var contents = file.contents.toString();
    var matter = fm(contents);
    var html = marked(matter.body, { renderer: renderer });
    var layout = matter.attributes.layout || null;
    var page = matter.attributes.page || null;
    html = '{% block content %}\n' + html + '\n{% endblock %}\n';
    if (page) {
      html = '{% set page = ' + page + ' %}\n' + html;
    }
    if (layout) {
      html = '{% extends "' + layout + '" %}\n' + html;
    } else {
      html = '{% extends "layouts/docs.html" %}\n' + html;
    }
    file.contents = new Buffer(html);
    this.push(file);
    callback();
  });
};

module.exports = function() {
  gulp.src([
      './docs/src/templates/**/*.html',
      '!./docs/src/templates/layouts/**/*',
      '!./docs/src/templates/partials/**/*',
      '!./docs/src/templates/macros/**/*',
      '!./docs/src/templates/examples/**/*'
    ])
    .pipe(swig(options))
    .pipe(gulp.dest('./'));

  gulp.src('./docs/src/templates/**/*.md')
    .pipe(mdSwig())
    .pipe(rename({ extname: '.html' }))
    .pipe(swig(options))
    .pipe(gulp.dest('./'));
};

