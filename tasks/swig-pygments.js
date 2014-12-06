
var pygmentize = require('pygmentize-bundled');

module.exports = {

  parse: function(str, line, parser) {
    console.log('parse', str, line, parser);
    return true;
  },

  compile: function(compiler, args, content, parents, options, blockName) {
    var string = content[0];
    console.log('content', content);
    console.log('args', args[0]);
    var lang = args[0] || 'html';
    console.log(lang);

    pygmentize({ lang: lang, format: 'html' }, string, function(err, result) {
      if (result) {
        content[0] = result.toString();
        console.log('content', content);
        return compiler(content, parents, options, blockName);
      }
    });
  },

  ends: true

};

