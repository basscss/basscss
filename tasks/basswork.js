
var gulp = require('gulp');
var basswork = require('gulp-basswork');
var header = require('gulp-header');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var gzip = require('gulp-gzip');

module.exports = function() {
  var data = require('../package.json');
  var meta = '/*\n\n' +
             '    Basscss v' + data.version + '\n\n' +
             '    ' + data.description + '\n' +
             '    http://basscss.com' + '\n\n*/\n\n';
  gulp.src('./src/basscss.css')
    .pipe(basswork({ source: '../src/basscss.css' }))
    //.pipe(basswork())
    .pipe(header(meta))
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
    .pipe(gzip())
    .pipe(gulp.dest('./css'));
};

