
var _ = require('lodash');
var marked = require('marked');
var example = require('marked-example');

var renderer = new marked.Renderer();

renderer.code = example({
  classes: {
    container: 'mb2 bg-darken-1 rounded',
    rendered: 'p2',
    code: 'm0 p2 bg-darken-1 rounded-bottom'
  }
});

renderer.heading = function (text, level) {
  var name = _.kebabCase(text);
  var result;
  if (level < 4) {
    result =
      '<h' + level + ' id="' + name + '">'+
      '<a href="#' + name + '">'+ text + '</a>'+
      '</h' + level + '>';
  } else {
    result = '<h' + level + '>' + text + '</h' + level + '>';
  }
  return result;
}

module.exports = renderer;

