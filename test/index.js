
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssstats = require('cssstats');
var Cleancss = require('clean-css');
var diff = require('diff');

var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkVars = require('rework-vars');
var reworkNpm = require('rework-npm');
var reworkColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

var basswork = require('basswork');

var postcss = require('postcss');

var cssnext = require('cssnext');
var myth = require('myth');
var suitcss = require('suitcss-preprocessor');

var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');

var results = {
  basswork: basswork(src),
  cssnext: cssnext(src),
  myth: myth(src),
  suitcss: suitcss(src),
};


// Write results to disk
fs.writeFileSync(path.join(__dirname, './results/basswork.css'), results.basswork);
fs.writeFileSync(path.join(__dirname, './results/cssnext.css'), results.cssnext);
fs.writeFileSync(path.join(__dirname, './results/myth.css'), results.myth);
fs.writeFileSync(path.join(__dirname, './results/suitcss.css'), results.suitcss);

var minified = {
  basswork: new Cleancss().minify(results.basswork).styles,
  cssnext: new Cleancss().minify(results.cssnext).styles,
  myth: new Cleancss().minify(results.myth).styles,
  suitcss: new Cleancss().minify(results.suitcss).styles,
};


var diffs = {
  cssnext: diff.diffCss(minified.basswork, minified.cssnext),
};

diffs.cssnext.forEach(function(part) {
  var color = part.added ? 'green' :
      part.removed ? 'red' : 'grey';
  //console.log('diff added/removed', part.added, part.removed);
  if (part.added || part.removed) {
    console.log(part.added ? 'Added: ' : 'Removed: ' + part.value );
  }
  //process.stderr.write(part.value[color]);
});

var stats = {
  basswork: cssstats(minified.basswork),
  cssnext: cssstats(minified.cssnext),
  myth: cssstats(minified.myth),
  suitcss: cssstats(minified.suitcss),
};

//var CleanCSS = require('clean-css');
//var source = 'a{font-weight:bold;}';
//var minified = new CleanCSS().minify(source).styles;

describe('basscss-processors', function() {
  
  it('Should be a string', function() {
    assert.equal(typeof results.basswork, 'string');
    assert.equal(typeof results.cssnext, 'string');
    assert.equal(typeof results.myth, 'string');
    assert.equal(typeof results.suitcss, 'string');
  });


  // cssnext
  it('Should produce same stats selectors results as cssnext', function() {
    assert.equal(stats.basswork.aggregates.selectors, stats.cssnext.aggregates.selectors);
  });

  it('Should produce same stats declarations results as cssnext', function() {
    assert.equal(stats.basswork.aggregates.declarations, stats.cssnext.aggregates.declarations);
  });

  it('Should produce same stats properties results as cssnext', function() {
    assert.equal(stats.basswork.aggregates.properties.length, stats.cssnext.aggregates.properties.length);
  });

  /*
    // myth
    it('Should produce same stats selectors results as myth', function() {
      assert.equal(stats.basswork.aggregates.selectors, stats.myth.aggregates.selectors);
    });

    it('Should produce same stats declarations results as myth', function() {
      assert.equal(stats.basswork.aggregates.declarations, stats.myth.aggregates.declarations);
    });

    it('Should produce same stats properties results as myth', function() {
      assert.equal(stats.basswork.aggregates.properties.length, stats.myth.aggregates.properties.length);
    });


    // suitcss
    it('Should produce same stats selectors results as suitcss', function() {
      assert.equal(stats.basswork.aggregates.selectors, stats.suitcss.aggregates.selectors);
    });

    it('Should produce same stats declarations results as suitcss', function() {
      assert.equal(stats.basswork.aggregates.declarations, stats.suitcss.aggregates.declarations);
    });

    it('Should produce same stats properties results as suitcss', function() {
      assert.equal(stats.basswork.aggregates.properties.length, stats.suitcss.aggregates.properties.length);
    });
  */


});


