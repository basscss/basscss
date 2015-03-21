
// Replace all tasks with npm run scripts
// - [x] css (previously basswork)
// - [x] css header
// - [x] minify css
// - [x] autobass
// - [x] sassify
// - [x] serve
// - [ ] bower bump
// - [ ] s3
// - [ ] zip
// - [ ] favicon
// - [ ] customizer-data
// - [ ] customizer-js


var gulp = require('gulp');


// Upload versioned assets to S3. (Requires creditials)
gulp.task('s3', require('./tasks/s3'));

// Create download packages
gulp.task('zip', require('./tasks/zip'));

// Build for new release ['bump', 's3', 
gulp.task('release', ['bump', 's3', 'sassify', 'zip']);

// Create favicons
gulp.task('favicon', require('./tasks/favicon'));

// Create data json file for custom-css
gulp.task('customizer-data', require('./tasks/customizer-data'));



