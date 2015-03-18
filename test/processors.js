
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssstats = require('cssstats');
var Cleancss = require('clean-css');

//var deepDiff = require('deep-diff').diff;

// Rework
var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkNpm = require('rework-npm');
var reworkVars = require('rework-vars');
var reworkColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

// Other processors
var basswork = require('basswork');
var cssnext = require('cssnext');
var myth = require('myth');
var reworkSuit = require('rework-suit');
var suitcss = require('suitcss-preprocessor');

// Custom processor
//var postcss = require('postcss');

var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');
var processors = [
  'rework',
  'basswork',
  'suitcssPlugin',
  //'suitcss',
  'myth',
  'cssnext',
];

var results = {
  release: fs.readFileSync(path.join(__dirname, '../css/basscss.css'), 'utf8'),
  rework: autoprefixer()
            .process(
              rework(src)
                .use(reworkNpm())
                .use(reworkVars())
                .use(reworkCustomMedia())
                .use(reworkCalc)
                .use(reworkColors())
                .toString()
            ).css,
  basswork: basswork(src),
  cssnext: cssnext(src, { features: { rem: false } }),
  myth: autoprefixer().process(
    rework(src)
      .use(reworkNpm())
      .use(reworkColors())
      .use(myth({ features: { import: false } }))
      .toString()
  ).css,
  suitcss: suitcss(src), // Seems to have an issue with outdated autoprefixer
  suitcssPlugin: autoprefixer()
    .process(
      rework(src)
      .use(reworkColors())
      .use(reworkSuit())
      .toString()
    ).css,
};

var minified = {
  release: new Cleancss().minify(results.release).styles,
  rework: new Cleancss().minify(results.rework).styles,
  basswork: new Cleancss().minify(results.basswork).styles,
  cssnext: new Cleancss().minify(results.cssnext).styles,
  myth: new Cleancss().minify(results.myth).styles,
  suitcss: new Cleancss().minify(results.suitcss).styles,
  suitcssPlugin: new Cleancss().minify(results.suitcssPlugin).styles,
};

var stats = {
  release: cssstats(minified.release),
  rework: cssstats(minified.rework),
  basswork: cssstats(minified.basswork),
  cssnext: cssstats(minified.cssnext),
  myth: cssstats(minified.myth),
  suitcss: cssstats(minified.suitcss),
  suitcssPlugin: cssstats(minified.suitcssPlugin),
};

function logStats(processor) {
  var log = 'Stats diff for ' + processor + '\n\n';
  stats[processor].declarations.all.forEach(function(decl, i) {
    var original = stats.release.declarations.all[i] || false;
    var value;
    if (original) {
      value = original.toString().trim(); 
    }
    log += 'original:test ' + value + ' : ' + decl.toString().trim() + '\n';
  });
  fs.writeFileSync(path.join(__dirname, './results/log-' + processor + '.log'), log);
}


describe('basscss-processors', function() {
  
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
    logStats(processor);
    testProcessors(processor);
  });


});


