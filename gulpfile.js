
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


gulp.task('default', ['rework']);

gulp.task('dev', ['watch', 'serve']);

gulp.task('watch', ['rework', 'include'], function() {
  gulp.watch(['./**/*.html', './src/**/*.css', '!./_site/**/*'], ['rework', 'include', 'reload']);
});


gulp.task('rework', function() {
  console.log('rework');
  gulp.src('./src/basscss.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'));
});

// Custom file includes
var include = require('./gulp/include');
gulp.task('include', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(include())
    .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
  console.log('reload');
  browsersync.reload();
});

gulp.task('serve', function() {
  browsersync({ server: { baseDir: './' }, open: false });
});

