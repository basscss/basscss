
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssstats = require('cssstats');

// Rework
var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkNpm = require('rework-npm');
var reworkVars = require('rework-vars');
var reworkColor = require('rework-color-function');
var reworkPluginColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

var cssnext = require('cssnext');
var basswork = require('basswork');


module.exports = function(src) {

  var processors = [
    'rework',
    'basswork',
    'cssnext',
  ];

  var results = {
    release: fs.readFileSync(path.join(__dirname, '../css/basscss.css'), 'utf8'),
    rework: autoprefixer().process(
      rework(src)
        .use(reworkNpm())
        .use(reworkVars())
        .use(reworkCustomMedia())
        .use(reworkCalc)
        .use(reworkColor)
        .toString()
    ).css,
    basswork: basswork(src),
    cssnext: cssnext(src, { features: { rem: false } }),
  };

  var stats = {};
  stats.release = cssstats(results.release);
  processors.forEach(function(processor) {
    stats[processor] = cssstats(results[processor]);
  });

    
  function testProcessors(processor) {
    it(processor + ' result should be a string', function() {
      assert.equal(typeof results[processor], 'string');
    });
    it('Should have the same number of rules as ' + processor, function() {
      assert.equal(stats.release.rules.length, stats[processor].rules.length);
    });
    it('Should have the same number of selectors as ' + processor, function() {
      assert.equal(stats.release.aggregates.selectors, stats[processor].aggregates.selectors);
    });
    it('Should have the same number of declarations as ' + processor, function() {
      assert.equal(stats.release.aggregates.declarations, stats[processor].aggregates.declarations);
    });
    it('Should have the same number of properties as ' + processor, function() {
      assert.equal(stats.release.aggregates.properties.length, stats[processor].aggregates.properties.length);
    });
  };

  processors.forEach(function(processor) {
    testProcessors(processor);
  });

};

