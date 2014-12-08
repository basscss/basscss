// Site-specific Gulp tasks

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var swig = require('gulp-swig');

// gulp-image-resize requires GraphicsMagick or ImageMagick
// brew install graphicsmagick
// brew install imagemagick
var imageresize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var s3 = require('gulp-s3');

gulp.task('serve', function() {
  gulp.src('./').pipe(webserver({}));
});

gulp.task('swig', function() {
  var data = require('../docs/src/model');
  var options = {
    setup: function(swig) {
      require('swig-highlight').apply(swig);
      console.log('PATH', path.resolve(__dirname, '../docs/src/templates') );
      swig.setDefaults({
        loader: swig.loaders.fs(path.resolve(__dirname, '../docs/src/templates'))
      });
    },
    defaults: {
      cache: false
    },
    data: data
  };
  gulp.src([
      './docs/src/templates/**/*.html',
      '!./docs/src/templates/layouts/**/*',
      '!./docs/src/templates/partials/**/*',
      '!./docs/src/templates/macros/**/*',
      '!./docs/src/templates/examples/**/*'
    ])
    .pipe(swig(options))
    .pipe(gulp.dest('./'));
});

// Site stylesheet
gulp.task('site-basswork', function() {
  gulp.src('./docs/src/css/index.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

// Create favicons
gulp.task('favicon', function() {
  var svgtopng = require('svg-to-png');
  svgtopng.convert('./docs/src/svg/favicon.svg', './docs/images', {});
  svgtopng.convert('./docs/src/svg/apple-touch-icon.svg', './docs/images', {});
  svgtopng.convert('./docs/src/svg/built-badge.svg', './docs/images', {});
});


// Showcase Data
// Currently unused
gulp.task('showcase', require('./showcase'));

// Showcase Images
gulp.task('images', function() {
  gulp.src('./docs/src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./docs/images'))
    .pipe(imageresize({ format: 'jpg' }))
    .pipe(rename({ extname: '.jpg' }))
    .pipe(imagemin())
    .pipe(gulp.dest('./docs/images'))
    .pipe(imageresize({ width: 640 }))
    .pipe(rename({ suffix: '-640' }))
    .pipe(gulp.dest('./docs/images'));
});

gulp.task('s3-images', function() {
  var config = require('../aws.json');
  gulp.src('./docs/images/*')
    .pipe(s3(config, {
      uploadPath: 'basscss/assets/'
    }));
});

// Watch
gulp.task('watch-css', ['basswork', 'site-basswork'], function() {
  gulp.watch(['./src/**/*.css', './docs/src/css/**/*.css'],['basswork', 'site-basswork']);
});

gulp.task('watch-templates', ['swig'], function() {
  gulp.watch(['./docs/src/templates/**/*.html', './docs/src/model.js'], ['swig']);
});

gulp.task('watch-includes', function() {
  gulp.watch(['./docs/src/examples/**/*', './docs/src/templates/partials/**/*'], ['swig']);
});

// Site development
gulp.task('dev', ['watch-templates', 'watch-includes', 'watch-css', 'serve']);

