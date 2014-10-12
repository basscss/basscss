
var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var gzip = require('gulp-gzip');
var header = require('gulp-header');

// Custom Rework wrapper
var basswork = require('gulp-basswork');

gulp.task('default', ['basswork']);

gulp.task('basswork', function() {
  var data = require('./package.json');
  var meta = '/*\n\n' +
             '    Basscss v' + data.version + '\n\n' +
             '    ' + data.description + '\n' +
             '    http://basscss.com' + '\n\n*/\n\n';
  gulp.src('./src/*.css')
    .pipe(basswork())
    .pipe(header(meta))
    .pipe(gulp.dest('.'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});

// Site-specific tasks
require('./gulp/docs-tasks');

