
var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var Cleancss = require('clean-css');
var pkg = require('../package.json');

//var header = require('gulp-header');
//var rename = require('gulp-rename');
//var mincss = require('gulp-minify-css');
//var gzip = require('gulp-gzip');

compile = function() {
  var meta = [
      '/*\n',
       '    Basscss v' + pkg.version,
       '    ' + pkg.description,
       '    http://basscss.com',
       '\n*/'
    ].join('\n');
  var dir = path.join(__dirname, '../src/');
  var dest = path.join(__dirname, '../css/');

  var src = fs.readFileSync(dir + 'basscss.css', 'utf8');

  var css = cssnext(src, { features: { rem: false } } );
  css = meta + '\n\n' + css;
  var minified = new Cleancss().minify(css).styles;

  fs.writeFileSync(dest + 'basscss.css', css);
  fs.writeFileSync(dest + 'basscss.min.css', minified);
  console.log('Compiled to css/basscss.css and css/basscss.min.css');

};

compile();

