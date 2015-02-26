
var colorable = require('colorable');
var colors = require('colors.css/js/colors');

var result = colorable(colors, { threshold: 3.5 });

var combinations = [];

Object.keys(result).map(function(key) {
  var color = result[key];
  color.combinations.map(function(combo) {
    combo.pair = color;
    combinations.push(combo);
    //console.log(combo.accessibility, combo.name);
  });
});

combinations.sort(function(a, b) {
  return b.contrast - a.contrast;
});


module.exports = combinations;

