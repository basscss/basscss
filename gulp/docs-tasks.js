// Site-specific Gulp tasks

var gulp = require('gulp');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

var pygmentize = require('./pygmentize');
var glossary = require('./css-glossary');

var swig = require('gulp-swig');


// Site development
gulp.task('dev', ['watch-templates', 'watch-includes', 'watch-css', 'serve']);

gulp.task('serve', function() {
  gulp.src('./').pipe(webserver({}));
});

gulp.task('watch-css', ['basswork', 'site-basswork', 'styles'], function() {
  gulp.watch(['./src/**/*.css', './docs/css/src/**/*.css'],['basswork', 'site-basswork', 'styles']);
});

gulp.task('watch-templates', ['swig'], function() {
  gulp.watch(['./docs/templates/**/*.html'], ['swig']);
});

gulp.task('watch-includes', function() {
  gulp.watch(['./docs/examples/**/*', './docs/templates/partials/**/*'], ['swig']);
});

gulp.task('swig', function() {
  gulp.src([
      './docs/templates/**/*.html',
      '!./docs/templates/docs/styles/**/*',
      '!./docs/templates/layouts/**/*',
      '!./docs/templates/partials/**/*',
      '!./docs/templates/examples/**/*'
    ])
    .pipe(swig({ defaults: { cache: false } }))
    .pipe(pygmentize())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
  gulp.src('./docs/templates/docs/styles/*.html')
    .pipe(glossary({ css: './basscss.min.css' }))
    .pipe(gulp.dest('./docs/styles'));
});

// Site stylesheet
gulp.task('site-basswork', function() {
  gulp.src('./docs/css/src/index.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

