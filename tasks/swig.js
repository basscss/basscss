
var gulp = require('gulp');
var path = require('path');
var swig = require('gulp-swig');

module.exports = function() {
  var data = require('../docs/src/model');
  var options = {
    setup: function(swig) {
      require('swig-highlight').apply(swig);
      console.log('PATH', path.resolve(__dirname, '../docs/src/templates') );
      swig.setDefaults({
        loader: swig.loaders.fs(path.resolve(__dirname, '../docs/src/templates'))
      });
    },
    defaults: {
      cache: false
    },
    data: data
  };
  gulp.src([
      './docs/src/templates/**/*.html',
      '!./docs/src/templates/layouts/**/*',
      '!./docs/src/templates/partials/**/*',
      '!./docs/src/templates/macros/**/*',
      '!./docs/src/templates/examples/**/*'
    ])
    .pipe(swig(options))
    .pipe(gulp.dest('./'));
};

