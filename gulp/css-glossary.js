
var fs = require('fs');
var through = require('through2');
var cheerio = require('cheerio');
var css = require('css');
var mustache = require('mustache');

module.exports = function(options) {

  var options = options || {};
  var src = options.css || null;
  if (!src) return false;

  return through.obj(function(file, encoding, callback) {

    var $ = cheerio.load(file.contents.toString());
    var $container = $('[data-include-rules]');

    if (!$container.length) {
      this.push(file);
      callback();
      return false;
    }

    var stylesheet = fs.readFileSync(src, 'utf8');
    var obj = css.parse(stylesheet, {});
    var stylesheet = obj.stylesheet;
    stylesheet.parsed = [];

    for (var i = 0; i < stylesheet.rules.length; i++) {
      var rule = stylesheet.rules[i];
      if (rule.selectors) {
        if (rule.declarations) {
          var declarations = rule.declarations;
          var decs = '';
          for (var j = 0; j < declarations.length; j++) {
            decs += declarations[j].property + ': ' + declarations[j].value + '; ';
          }
          stylesheet.parsed.push({
            $index: stylesheet.parsed.length,
            selectors: rule.selectors.join(', '),
            declarations: decs
          });
        }
      }
      if (rule.rules) {
        for (var j = 0; j < rule.rules.length; j++) {
          var decs = '';
          for (var k = 0; k < rule.rules[j].declarations.length; k++) {
            //decs += declarations[j].property + ': ' + declarations[j].value + '; ';
            decs += rule.rules[j].declarations[k].property + ': ' + rule.rules[j].declarations[k].value + '; ';
          }
          stylesheet.parsed.push({
            $index: stylesheet.parsed.length,
            selectors: rule.rules[j].selectors.join(', '),
            declarations: decs, media: rule.media
          });
        }
      }
    }
    var rendered = mustache.render($container.html(), stylesheet);

    $container.html(rendered);

    //var $pre = $('<pre class="p2"></pre>');
    //$pre.text( JSON.stringify(obj, null, '  ') );
    //$container.append($pre);

    file.contents = new Buffer($.html());

    this.push(file);
    callback();


//
//    var $table = $('<table class="mb4 table-light"></table>');
//    var $thead = $('<thead><tr class="bg-light-gray"><th>Selector</th><th>Declarations</th></tr></thead>');
//    var $tbody = $('<tbody></tbody>');
//    $table.append($thead);
//
//    var $stats = $('<div class="py2 mb3"></div>');
//    $stats.append(
//      '<div class="h0 bold">' + rules.length + '</div>\n' +
//      '<div class="h5 caps px2">Rules</div>'
//    );
//
//    for (var i = 0; i < rules.length; i++) {
//      var $tr = $('<tr></tr>');
//      var selectors = rules[i].selectors || null;
//      var declarations = rules[i].declarations || null;
//      // Handle media queries
//      if (selectors) {
//        selectors = selectors.join(', ');
//        $tr.append($('<td class="col-3 bold">' + selectors + '</td>'));
//        var decs = '';
//        if (declarations) {
//          for (var j = 0; j < declarations.length; j++) {
//            decs += declarations[j].property + ': ' + declarations[j].value + '; ';
//          }
//          $tr.append('<td class="col-9">' + decs + '</td>');
//          $tbody.append($tr);
//        }
//      }
//      if (rules[i].rules) {
//        var $subth = $('<th class="bg-darken-2" colspan="2"></th>');
//        var subrules = rules[i].rules;
//        $subth.text(rules[i].media);
//        $tr.append($subth);
//        $tbody.append($tr);
//        for (var j = 0; j < subrules.length; j++) {
//          var $subtr = $('<tr class="bg-darken-1"></tr>');
//          //var subdecs = JSON.stringify(subrules[j].declarations) + '<br>';
//          var subdecs = '';
//          for (var k = 0; k < subrules[j].declarations.length; k++) {
//            subdecs += subrules[j].declarations[k].property + ': ' + subrules[j].declarations[k].value + '; ';
//          }
//          $subtr.append(
//            $(
//              '<td>' + subrules[j].selectors.join(', ') + '</td>\n' +
//              '<td>' + rules[i].media + ': ' + subdecs + '</td>'
//            )
//          );
//          $tbody.append($subtr);
//        }
//      }
//    }
//    $table.append($tbody);
//    $container
//      .append($stats)
//      .append($table);
//      //.append($pre);
//

  });

};

