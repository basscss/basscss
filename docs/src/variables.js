
var fs = require('fs');
var rework = require('rework');
var rnpm = require('rework-npm');
var postcss = require('postcss');

module.exports = function(src) {

  var css = fs.readFileSync(src, 'utf8');
  var variables = [];
  var imported = rework(css).use(rnpm({ })).toString();
  var root = postcss.parse(imported);
  var result = '';

  function findUniques(array) {
    var uniques = [];
    function arrObjIndexOf(arr, key, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == val) return i;
      }
      return -1;
    }
    array.forEach(function(d) {
      var i = arrObjIndexOf(uniques, 'prop', d.prop);
      if (i == -1) uniques.push(d);
      // Replace previous duplicate with last declared
      else uniques[i] = d;
    });
    return uniques;
  }

  function collectVariables(rule) {
    rule.eachDecl(function(d) {
      variables.push(d);
    });
  }

  root.eachRule(function(rule) {
    if (rule.selector != ':root') return;
    collectVariables(rule);
  });

  variables = findUniques(variables);

  return variables;

};

