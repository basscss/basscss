
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssnext = require('cssnext');

var processors = require('./processors');
var scss = require('./scss');
var usage = require('./doiuse');

var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');

var css = cssnext(src);

describe('basscss', function() {

  processors(src);
  scss();
  //usage(css);

});

