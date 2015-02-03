
var gulp = require('gulp');

module.exports = function() {

  var imagemin = require('gulp-imagemin');
  var imageresize = require('gulp-image-resize');
  var rename = require('gulp-rename');

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
};
