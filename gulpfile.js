
var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var gzip = require('gulp-gzip');
var header = require('gulp-header');
var bump = require('gulp-bump');
var s3 = require('gulp-s3');

// Custom Rework wrapper
var basswork = require('gulp-basswork');

gulp.task('default', ['basswork']);

// Compile source modules to production CSS
gulp.task('basswork', function() {
  var data = require('./package.json');
  var meta = '/*\n\n' +
             '    Basscss v' + data.version + '\n\n' +
             '    ' + data.description + '\n' +
             '    http://basscss.com' + '\n\n*/\n\n';
  gulp.src('./src/basscss.css')
    .pipe(basswork())
    .pipe(header(meta))
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
    .pipe(gzip())
    .pipe(gulp.dest('./css'));
});

// Bump Bower version because Bower makes no sense
gulp.task('bump', function() {
  var version = require('./package.json').version;
  gulp.src('./bower.json')
    .pipe(bump({version: version}))
    .pipe(gulp.dest('.'));
});

// Upload versioned assets to S3. (Requires creditials)
gulp.task('s3', function() {
  var version = require('./package.json').version;
  var config = require('./aws.json');
  gulp.src('./css/*.gz')
    .pipe(s3(config, {
      uploadPath: 'basscss/' + version + '/'
    }));
});

// Get all unique variables from modules
gulp.task('variables', require('./tasks/variables'));

// Convert CSS syntax to SCSS
gulp.task('sassify', require('./tasks/sassify'));


// Site-specific tasks
//require('./tasks/docs');

// Run webserver
gulp.task('serve', require('./tasks/serve'));

// Compile Swig templates
gulp.task('swig', require('./tasks/swig'));

// Compile CSS for docs site
gulp.task('site-basswork', require('./tasks/site-basswork'));

// Create favicons
gulp.task('favicon', require('./tasks/favicon'));

// Optimize Showcase images
gulp.task('images', require('./tasks/images'));

// Upload Showcase images to S3
gulp.task('s3-images', require('./tasks/s3-images'));

// Site development
gulp.task('dev', ['watch-templates', 'watch-css', 'serve']);

// Watch for changes
gulp.task('watch-css', ['basswork', 'site-basswork'], function() {
  gulp.watch(['./src/**/*.css', './docs/src/css/**/*.css'], ['basswork', 'site-basswork']);
});

gulp.task('watch-templates', ['swig'], function() {
  gulp.watch([
      './docs/src/templates/**/*.html',
      './docs/src/model.js',
      './docs/src/templates/examples/**/*'
    ], ['swig']);
});


