
var gulp = require('gulp');
var zip = require('gulp-zip');

module.exports = function() {
  var version = require('../package.json').version;
  gulp.src('./css/*.css')
    .pipe(zip('basscss.' + version + '.zip'))
    .pipe(gulp.dest('./css'));
};
