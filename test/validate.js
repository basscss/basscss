
var fs = require('fs');
var path = require('path');
var mocha = require('mocha');
var assert = require('assert');
var validator = require('css-validator');

module.exports = function(css) {

    it('should be a string', function() {
      assert.equal(typeof css, 'string');
    });

    var stream = validator({ text: css });
    //console.log(stream);

    /*
    validator({ text: css }, function (err, data) {
      if (err) { console.error(err); }
      console.log(data);

      it('should be valid CSS', function() {
        assert.strictEqual(data.validity, true);
      });
      it('should have no errors', function() {
        assert.deepEqual(data.errors, []);
      });
      it('should have no warnings', function() {
        assert.deepEqual(data.warnings, []);
      });

    });
    */

};

