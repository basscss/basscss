
var gulp = require('gulp');
var bump = require('gulp-bump');

module.exports = function() {
  var version = require('../package.json').version;
  gulp.src('./bower.json')
    .pipe(bump({version: version}))
    .pipe(gulp.dest('.'));
};
