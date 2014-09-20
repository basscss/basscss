
var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gzip = require('gulp-gzip');

var rework = require('gulp-rework');
var rnpm = require('rework-npm');
var media = require('rework-custom-media');
var vars = require('rework-vars');
var colors = require('rework-plugin-colors');
var calc = require('rework-calc');

// Site and documentation
var browsersync = require('browser-sync');
var stylestats = require('gulp-stylestats');


gulp.task('default', ['rework']);

gulp.task('rework', function() {
  gulp.src('./src/*.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});

// Create Sass partials
gulp.task('sassify', function() {
  gulp.src('basscss-base/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_base.scss')).pipe(gulp.dest('scss'));
  gulp.src('basscss-utilities/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_utilities.scss')).pipe(gulp.dest('scss'));
  gulp.src('basscss-positions/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_positions.scss')).pipe(gulp.dest('scss'));
  gulp.src('basscss-grid/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_grid.scss')).pipe(gulp.dest('scss'));
  gulp.src('basscss-table-object/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_table-object.scss')).pipe(gulp.dest('scss'));
  gulp.src('basscss-color-basic/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc )).pipe(autoprefixer())
    .pipe(rename('_color-basic.scss')).pipe(gulp.dest('scss'));
});


// Stylestats
gulp.task('stats', function() {
  gulp.src('./basscss.css')
    .pipe(stylestats());
});


// Site development
gulp.task('dev', ['watch', 'serve']);

gulp.task('watch', ['rework', 'site-rework', 'render'], function() {
  gulp.watch(
    ['./docs/templates/**/*.html', 'docs/partials/**/*', 'docs/examples/**/*', './docs/css/src/**/*', './src/**/*.css', './basscss-base/**/*', './basscss-utilities/**/*', './basscss-grid/**/*'],
    ['rework', 'site-rework', 'render', 'reload']
  );
});

gulp.task('reload', function() {
  browsersync.reload();
});

gulp.task('serve', function() {
  browsersync({ server: { baseDir: './' }, open: false, ghostMode: false });
});

// Site stylesheet
gulp.task('site-rework', function() {
  gulp.src('./docs/css/src/index.css')
    .pipe(rework( rnpm(), media(), vars(), colors(), calc ))
    .pipe(autoprefixer())
    .pipe(mincss())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./docs/css'));
});

// Build site
var include = require('./gulp/include');
var example = require('./gulp/include-example');
var nav = require('./gulp/is-active');
var pygmentize = require('./gulp/pygmentize');

gulp.task('render', function() {
  gulp.src('./docs/templates/**/*.html')
    .pipe(include())
    .pipe(example())
    .pipe(pygmentize())
    .pipe(nav())
    .pipe(gulp.dest('./'));
});


