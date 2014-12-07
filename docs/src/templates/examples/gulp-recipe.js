var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');

var basswork = require('gulp-basswork');

gulp.task('basswork', function() {
  gulp.src('./src/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
});
