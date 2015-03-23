
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var cssnext = require('cssnext');
var validator = require('css-validator');

var processors = require('./processors');
var scss = require('./scss');
var usage = require('./doiuse');
var validate = require('./validate');

var src = fs.readFileSync(path.join(__dirname, '../src/basscss.css'), 'utf8');

var css = cssnext(src);

describe('basscss', function() {

  processors(src);
  scss();
  //validate(css);
  //usage(css);

});

