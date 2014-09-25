var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gzip = require('gulp-gzip');

var rework = require('gulp-rework');
var reworkNPM = require('rework-npm');
var reworkMedia = require('rework-custom-media');
var reworkVars = require('rework-vars');
var reworkColors = require('rework-plugin-colors');
var reworkCalc = require('rework-calc');

gulp.task('rework', function() {
  gulp.src('./src/*.css')
    .pipe(rework( reworkNPM(), reworkMedia(), reworkVars(), reworkColors(), reworkCalc ))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
    .pipe(gzip())
    .pipe(gulp.dest('./css'));
});
