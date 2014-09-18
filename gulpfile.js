
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

// Custom gulp plugins
var include = require('./gulp/include');
var example = require('./gulp/include-example');
var nav = require('./gulp/is-active');
var pygmentize = require('./gulp/pygmentize');
//var markdown = require('./gulp/markdown');


gulp.task('default', ['rework', 'site-rework']);

gulp.task('dev', ['watch', 'serve']);

gulp.task('watch', ['rework', 'site-rework', 'render'], function() {
  gulp.watch(
    ['./docs/templates/**/*.html', 'docs/partials/**/*', 'docs/examples/**/*', './docs/css/src/**/*', './src/**/*.css', './basscss-base/**/*', './basscss-utilities/**/*', './basscss-grid/**/*'],
    ['rework', 'site-rework', 'render', 'reload']
  );
});

gulp.task('reload', function() {
  browsersync.reload();
});

gulp.task('serve', function() {
  browsersync({ server: { baseDir: './' }, open: false });
});


gulp.task('rework', function() {
  gulp.src('./src/basscss.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'));
});


// Docs
gulp.task('site-rework', function() {
  gulp.src('./docs/css/src/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('render', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(include())
    .pipe(example())
    .pipe(pygmentize())
    .pipe(nav())
    .pipe(gulp.dest('./'));
});


