
var fs = require('fs');
var gulp = require('gulp');
var browserify = require('gulp-browserify');

module.exports = function() {
  gulp.src('./docs/src/js/customizer/app.js')
    .pipe(browserify({
      transform: ['brfs']
    }))
    .pipe(gulp.dest('./docs/customizer'));
};

