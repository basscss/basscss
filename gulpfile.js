
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

// Site-specific tasks
require('./gulp/docs-tasks');

