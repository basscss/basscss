
var gulp = require('gulp');

gulp.task('default', ['basswork']);

// Compile source modules to production CSS
gulp.task('basswork', require('./tasks/basswork'));

// Bump Bower version because Bower makes no sense
gulp.task('bump', require('./tasks/bump'));

// Upload versioned assets to S3. (Requires creditials)
gulp.task('s3', require('./tasks/s3'));

// Convert CSS syntax to SCSS
gulp.task('sassify', require('./tasks/sassify'));

// Create download packages
gulp.task('zip', require('./tasks/zip'));

// Build for new release ['bump', 's3', 
gulp.task('release', ['bump', 's3', 'sassify', 'zip']);


// Site-specific tasks

// Run webserver
gulp.task('serve', require('./tasks/serve'));

// Compile templates
gulp.task('autobass', require('./tasks/autobass'));

// Create favicons
gulp.task('favicon', require('./tasks/favicon'));

// Create data json file for custom-css
gulp.task('customizer-data', require('./tasks/customizer-data'));

// Compile JS for customizer
gulp.task('customizer-js', require('./tasks/customizer-js'));


// Site development
gulp.task('dev', ['watch-templates', 'watch-css', 'watch-js', 'serve']);

// Watch for changes
gulp.task('watch-css', ['basswork', 'customizer-data'], function() {
  gulp.watch(['./src/**/*.css', './docs/src/css/**/*.css'], ['basswork', 'customizer-data']);
});

gulp.task('watch-templates', ['autobass'], function() {
  gulp.watch(['./docs/src/**/*'], ['autobass']);
});

gulp.task('watch-js', ['customizer-js'], function() {
  gulp.watch(['./docs/src/js/**/*'], ['customizer-js']);
});

