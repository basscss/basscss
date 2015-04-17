
var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var Cleancss = require('clean-css');
var pkg = require('../package.json');

var postcss = require('postcss');

var removeComments = postcss.plugin('remove-comments', function(opts) {
  opts = opts || {};
  return function(root) {
    root.eachComment(function(comment) {
      comment.removeSelf();
    });
  }
});

compile = function() {
  var meta = [
      '/*',
      '',
      '    Basscss v' + pkg.version,
      '    ' + pkg.description,
      '    http://basscss.com',
      '',
      '*/',
      ''
    ].join('\n');
  var dir = path.join(__dirname, '../src/');
  var dest = path.join(__dirname, '../css/');

  var src = fs.readFileSync(dir + 'basscss.css', 'utf8');

  var css = cssnext(src, {
    features: {
      customProperties: {
        strict: false, // disable variable fallbacks from being redundantly added
      },
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  });
  css = meta + '\n\n' + postcss().use(removeComments()).process(css).css;
  var minified = new Cleancss({
      advanced: false,
    }).minify(css).styles;

  fs.writeFileSync(dest + 'basscss.css', css);
  fs.writeFileSync(dest + 'basscss.min.css', minified);
  console.log('Compiled to css/basscss.css and css/basscss.min.css');

};

compile();

