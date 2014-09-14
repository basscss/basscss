
var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync');

var rework = require('gulp-rework');
var rnpm = require('rework-npm');
var media = require('rework-custom-media');
var vars = require('rework-vars');
var colors = require('rework-plugin-colors');
var calc = require('rework-calc');

gulp.task('default', []);

gulp.task('rework', function() {
  gulp.src('./src/basscss.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
  browsersync({ server: { baseDir: './' }, open: false });
});

