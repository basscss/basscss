
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var through = require('through2');
var cssscss = require('css-scss');
var rework = require('rework');
var rnpm = require('rework-npm');

// Custom Gulp plugin
var plugin = function() {
  return through.obj(function(file, encoding, callback) {

    var src = file.contents.toString();
    var root = path.dirname(file.path);
    var imported = rework(src)
      .use(rnpm({ root: root }))
      .toString();
    var result = cssscss(imported);

    file.contents = new Buffer(result);
    this.push(file);
    callback();

  });
};

module.exports = function() {
  gulp.src('./scss/src/*.css')
    .pipe(plugin())
    .pipe(rename({ extname: '.scss' }))
    .pipe(gulp.dest('./scss'));
};

