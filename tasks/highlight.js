
var pygmentize = require('pygmentize-bundled-cached');

module.exports = function(string, options) {
  console.log('highlight', string);

  var options = options || {};

  var lang = options.lang || 'html';

  pygmentize({ lang: lang, format: 'html' }, string, function(err, result) {
    console.log(err, result.toString());
    if (err) return err;
    return result.toString();
  });

  //return 'HIGHLIGHT' + string;
 
};

