
var gulp = require('gulp');
var s3 = require('gulp-s3');

module.exports = function() {
  var config = require('../aws.json');
  gulp.src('./docs/images/*')
    .pipe(s3(config, {
      uploadPath: 'basscss/assets/'
    }));
};

