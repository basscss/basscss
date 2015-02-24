
var colorable = require('colorable');
var colors = require('colors.css/js/colors');

//var colors = [];
//Object.keys(colorsObj).map(function(key) {
//  var color = colorsObj[key];
//  colors.push(color);
//});

var result = colorable(colors);

//console.log(result);

var combinations = [];

Object.keys(result).map(function(key) {
  var color = result[key];
  color.combinations.map(function(combo) {
    combo.color = color;
    combinations.push(combo);
  });
  //combinations = combinations.concat(color.combinations);
});


module.exports = combinations;

