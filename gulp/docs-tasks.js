// Site-specific Gulp tasks

var gulp = require('gulp');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

var include = require('./include');
var example = require('./include-example');
var nav = require('./is-active');
var pygmentize = require('./pygmentize');
var glossary = require('./css-glossary');

var swig = require('gulp-swig');


// Site development
gulp.task('dev', ['watch-templates', 'watch-includes', 'watch-css', 'serve']);

gulp.task('serve', function() {
  gulp.src('./').pipe(webserver({}));
});

gulp.task('watch-css', ['basswork', 'site-basswork', 'themes-basswork', 'sassify'], function() {
  gulp.watch(
    ['./src/**/*.css', './docs/css/src/**/*.css', './docs/themes/**/src/**/*.css'],
    ['basswork', 'site-basswork', 'themes-basswork', 'sassify']
  );
});

// Build site
gulp.task('watch-templates', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(watch('./docs/templates/**/*.html', function(files) {
      console.log('watch update');
      return files.pipe(include())
        .pipe(example())
        .pipe(pygmentize())
        .pipe(nav())
        .pipe(glossary({ css: './basscss.min.css' }))
        .pipe(gulp.dest('./'));
    }));
});

gulp.task('watch-includes', function() {
  gulp.watch(['./docs/examples/**/*', './docs/partials/**/*'], ['render']);
});

// Render templates
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

gulp.task('swig', function() {
  gulp.src(['./docs/swig/swigtest.html', '!./docs/swig/layouts'])
    .pipe(swig())
    .pipe(gulp.dest('.'));
  /*
    var locals = { foo: 'Herro!', test: 'Hi' };
    var compiled = swig.renderFile('./docs/swig/index.html', locals);
    console.log(compiled);
  */
});

