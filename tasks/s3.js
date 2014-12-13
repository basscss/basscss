
var gulp = require('gulp');
var s3 = require('gulp-s3');
var config = require('../aws.json');

module.exports = function() {
  var version = require('./package.json').version;
  gulp.src('./css/*.gz')
    .pipe(s3(config, {
      uploadPath: 'basscss/' + version + '/'
    }));
};
