
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var postcss = require('postcss');
var doiuse = require('doiuse');

module.exports = function(css) {

  describe('doiuse', function(done) {
    postcss(doiuse({
      browsers:['ie >= 6', '> 1%'],
      onFeatureUsage: function(usageInfo) {
        console.log(usageInfo.message);
        done();
      }
    })).process(css);
  });


};

