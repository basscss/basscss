// Site-specific Gulp tasks

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var swig = require('gulp-swig');
var imageresize = require('gulp-image-resize'); // *
var imagemin = require('gulp-imagemin');
var s3 = require('gulp-s3');

// * gulp-image-resize requires GraphicsMagick or ImageMagick
//   brew install graphicsmagick
//   brew install imagemagick



