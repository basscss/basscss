
var gulp = require('gulp');
var zip = require('gulp-zip');

module.exports = function() {
  gulp.src('./css/*.css')
    .pipe(zip('basscss.zip'))
    .pipe(gulp.dest('./css'));
};
