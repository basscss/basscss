// Site-specific Gulp tasks

var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gzip = require('gulp-gzip');

var basswork = require('gulp-basswork');
var browsersync = require('browser-sync');

// Site development
gulp.task('dev', ['watch', 'serve']);

gulp.task('watch', ['rework', 'site-rework', 'sassify', 'render'], function() {
  gulp.watch(
    ['./docs/templates/**/*.html', 'docs/partials/**/*', 'docs/examples/**/*', './docs/css/src/**/*', './src/**/*.css', './basscss-base/**/*', './basscss-utilities/**/*', './basscss-grid/**/*'],
    ['rework', 'site-rework', 'sassify', 'render', 'reload']
  );
});

gulp.task('reload', function() {
  browsersync.reload();
});

gulp.task('serve', function() {
  browsersync({ server: { baseDir: './' }, open: false, ghostMode: false });
});

// Site stylesheet
gulp.task('site-rework', function() {
  gulp.src('./docs/css/src/index.css')
    .pipe(basswork())
    //.pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    //.pipe(autoprefixer())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

// Build site
var include = require('./include');
var example = require('./include-example');
var nav = require('./is-active');
var pygmentize = require('./pygmentize');

gulp.task('render', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(include())
    .pipe(example())
    .pipe(pygmentize())
    .pipe(nav())
    .pipe(gulp.dest('./'));
});


