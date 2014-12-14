
var gulp = require('gulp');

// Custom Rework wrapper
var basswork = require('gulp-basswork');

gulp.task('default', ['basswork']);

// Compile source modules to production CSS
gulp.task('basswork', require('./tasks/basswork'));

// Bump Bower version because Bower makes no sense
gulp.task('bump', require('./tasks/bump'));

// Upload versioned assets to S3. (Requires creditials)
gulp.task('s3', require('./tasks/s3'));

// Convert CSS syntax to SCSS
gulp.task('sassify', require('./tasks/sassify'));


// Site-specific tasks

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
      './docs/src/templates/**/*',
      './docs/src/model.js'
    ], ['swig']);
});


