
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssstats = require('cssstats');
var Cleancss = require('clean-css');

// Rework
var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkNpm = require('rework-npm');
var reworkVars = require('rework-vars');
var reworkColor = require('rework-color-function');
var reworkPluginColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

// Other processors
var basswork = require('basswork');
var cssnext = require('cssnext');
var myth = require('myth');
var reworkSuit = require('rework-suit');
var suitcss = require('suitcss-preprocessor');

// Custom processor
//var postcss = require('postcss');

//var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');

module.exports = function(src) {

  var processors = [
    'rework',
    'basswork',
    'suitcss',
    'myth',
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
    myth: autoprefixer().process(
      rework(src)
        .use(reworkNpm())
        .use(myth({ features: { import: false } }))
        .toString()
    ).css,
    suitcss: autoprefixer().process(
      rework(src)
        .use(reworkColor)
        .use(reworkSuit())
        .toString()
    ).css,
  };

  var minified = {};
  minified.release = new Cleancss().minify(results.release).styles;
  processors.forEach(function(processor) {
    minified[processor] = new Cleancss().minify(results[processor]).styles;
  });

  var stats = {};
  stats.release = cssstats(minified.release);
  processors.forEach(function(processor) {
    stats[processor] = cssstats(minified[processor]);
  });


  function writeCss(processor) {
    var css = results[processor];
    var dir = path.join(__dirname, './results');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(dir + '/' + processor + '.css', css);
  };

  function writeDeclarations(processor) {
    var string = '\n';
    var dir = path.join(__dirname, './results');
    stats[processor].declarations.all.forEach(function(dec, i) {
      var releaseDec = stats.release.declarations.all[i] || {};
      string += dec.prop + ': ' + dec.value + '\n' + releaseDec.prop + ': ' + releaseDec.value + '\n\n';
    });
    fs.writeFileSync(dir + '/' + processor + '-declarations.txt', string);
  };

  //describe('basscss-processors', function() {
    
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
      writeCss(processor);
      writeDeclarations(processor);
    });

  //});

};

