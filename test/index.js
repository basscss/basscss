
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssstats = require('cssstats');
var Cleancss = require('clean-css');

var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkVars = require('rework-vars');
var reworkNpm = require('rework-npm');
var reworkColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

var basswork = require('basswork');
var cssnext = require('cssnext');
var myth = require('myth');
var suitcss = require('suitcss-preprocessor');

var postcss = require('postcss');

var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');
var processors = [
  'basswork',
  'cssnext',
  'myth',
  'suitcss',
];

var results = {
  release: fs.readFileSync(path.join(__dirname, '../css/basscss.css'), 'utf8'),
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
  release: new Cleancss().minify(results.release).styles,
  basswork: new Cleancss().minify(results.basswork).styles,
  cssnext: new Cleancss().minify(results.cssnext).styles,
  myth: new Cleancss().minify(results.myth).styles,
  suitcss: new Cleancss().minify(results.suitcss).styles,
};

var stats = {
  release: cssstats(minified.release),
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

  function testStats(processor) {
    it('Should produce same stats selectors results as ' + processor, function() {
      assert.equal(stats.release.aggregates.selectors, stats[processor].aggregates.selectors);
    });
    it('Should produce same stats declarations results as ' + processor, function() {
      assert.equal(stats.release.aggregates.declarations, stats[processor].aggregates.declarations);
    });
    it('Should produce same stats properties results as ' + processor, function() {
      assert.equal(stats.release.aggregates.properties.length, stats[processor].aggregates.properties.length);
    });
  };

  processors.forEach(function(processor) {
    testStats(processor);
  });


});


