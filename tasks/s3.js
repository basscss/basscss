
var gulp = require('gulp');
var s3 = require('gulp-s3');

module.exports = function() {
  var version = require('../package.json').version;
  var config = require('../aws.json');
  gulp.src('./css/*.gz')
    .pipe(s3(config, {
      uploadPath: 'basscss/' + version + '/'
    }));
};
