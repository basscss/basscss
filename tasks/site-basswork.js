
var gulp = require('gulp');
var basswork = require('gulp-basswork');
var mincss = require('gulp-minify-css');
var rename = require('gulp-rename');

// Site stylesheet
module.exports = function() {
  gulp.src('./docs/src/css/index.css')
    .pipe(basswork())
    //.pipe(rename('base.css'))
    //.pipe(gulp.dest('./docs/css'))
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
};

