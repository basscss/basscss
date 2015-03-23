
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var sass = require('node-sass');
var cssstats = require('cssstats');

var filenames = fs.readdirSync(path.join(__dirname, '../scss'));

var partials = filenames.map(function(filename) {
  var src = fs.readFileSync(path.join(__dirname, '../scss/' + filename), 'utf8');
  return { src: src, name: filename };
});

var index = partials.map(function(partial) {
  return '@import "' + partial.name.replace(/^\_/,'').replace(/\.scss$/,'') + '";\n';
});
index.unshift('@import "defaults";\n\n');
index = index.join('');

var defaults = fs.readFileSync(path.join(__dirname, '../scss/_defaults.scss'), 'utf8');


module.exports = function() {

  function renderSass(partial) {
    it('should compile scss for ' + partial.name, function() {
      var src = defaults + '\n' + partial.src;
      assert.doesNotThrow(function() {
        sass.renderSync({ data: src });
      });
    });
  }

  partials.forEach(renderSass);

  it('should correctly import partials', function() {
    assert.doesNotThrow(function() {
      sass.renderSync({
        data: index,
        includePaths: [ path.join(__dirname, '../scss') ]
      });
    });
  });

};

