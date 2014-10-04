// Site-specific Gulp tasks

var gulp = require('gulp');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

// Site development
gulp.task('dev', ['watch-html', 'watch-css', 'serve']);

//gulp.task('watch-html', ['render'], function() {
//  gulp.watch(
//    ['./docs/templates/**/*.html', 'docs/partials/**/*', 'docs/examples/**/*'],
//    ['render']
//  );
//});

gulp.task('watch-css', ['basswork', 'site-basswork', 'themes-basswork', 'sassify'], function() {
  gulp.watch(
    ['./src/**/*.css', './docs/css/src/**/*.css', './docs/themes/**/src/**/*.css'],
    ['basswork', 'site-basswork', 'themes-basswork', 'sassify']
  );
});

gulp.task('serve', function() {
  gulp.src('./').pipe(webserver({}));
});

// Build site
var include = require('./include');
var example = require('./include-example');
var nav = require('./is-active');
var pygmentize = require('./pygmentize');
var glossary = require('./css-glossary');

gulp.task('watch-html', function() {
//['./docs/templates/**/*.html', 'docs/partials/**/*', 'docs/examples/**/*'],
  gulp.src('./docs/templates/**/*.html')
    .pipe(watch('./docs/templates/**/*.html', function(files) {
    console.log('watch', files);
      return files.pipe(include())
        .pipe(example())
        .pipe(pygmentize())
        .pipe(nav())
        .pipe(glossary({ css: './basscss.min.css' }))
        .pipe(gulp.dest('./'));
    }));
});

gulp.task('render', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(include())
    .pipe(example())
    .pipe(pygmentize())
    .pipe(nav())
    .pipe(glossary({ css: './basscss.min.css' }))
    .pipe(gulp.dest('./'));
});

// Site stylesheet
gulp.task('site-basswork', function() {
  gulp.src('./docs/css/src/index.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

// Themes
gulp.task('themes-basswork', function() {
  gulp.src('./docs/themes/bassmap/src/bassmap.css')
    .pipe(basswork()).pipe(gulp.dest('./docs/themes/bassmap'));
  gulp.src('./docs/themes/bassdock/src/bassdock.css')
    .pipe(basswork()).pipe(gulp.dest('./docs/themes/bassdock'));
});

