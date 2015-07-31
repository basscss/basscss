
var fs = require('fs')
var path = require('path')
var postcss = require('postcss')
var cssnext = require('cssnext')
var cssstats = require('cssstats')
var reporter = require('postcss-reporter')
var filesize = require('filesize')
var Cleancss = require('clean-css')
var pkg = require('../package.json')


var removeComments = postcss.plugin('remove-comments', function(opts) {
  opts = opts || {}
  return function(root) {
    root.eachComment(function(comment) {
      comment.removeSelf()
    })
  }
})

var removeRoot = postcss.plugin('remove-root', function(opts) {
  opts = opts || {}
  return function(root) {
    root.eachRule(function(rule) {
      if (rule.selector === ':root') {
        rule.removeSelf()
      }
    })
  }
})

compile = function() {
  var dir = path.join(__dirname, '../src/')
  var dest = path.join(__dirname, '../css/')

  var src = fs.readFileSync(dir + 'basscss.css', 'utf8')

  var result =
    postcss()
    .use(cssnext({
      features: {
        customProperties: {
          strict: false, // disable variable fallbacks from being redundantly added
        },
        rem: false,
        pseudoElements: false,
        colorRgba: false
      }
    }))
    .use(removeComments())
    .use(removeRoot())
    .use(cssstats())
    .use(reporter())
    .process(src)

  var css = result.css
  var minified = new Cleancss({
      advanced: false,
    }).minify(css).styles

  var stats = result.messages.filter(function (message) {
    return message.stats
  })
  .map(function (message) {
    return message.stats
  })[0]

  console.log('Size: ' + filesize(stats.size))
  console.log('Gzipped: ' + filesize(stats.gzipSize))
  console.log('Rules: ' + stats.rules.total)
  console.log('Selectors: ' + stats.selectors.total)
  console.log('Declarations: ' + stats.declarations.total)

  css =
    [
      '/*',
      '',
      '    Basscss v' + pkg.version,
      '    ' + pkg.description,
      '    http://basscss.com',
      '',
      '    ' + filesize(stats.size),
      '    ' + filesize(stats.gzipSize) + ' Gzipped',
      '    ' + stats.rules.total + ' Rules',
      '    ' + stats.selectors.total + ' Selectors',
      '    ' + stats.declarations.total + ' Declarations',
      '    ' + Object.keys(stats.declarations.properties).length + ' Properties',
      '',
      '*/',
      '',
      '',
      css
    ].join('\n')

  fs.writeFileSync(dest + 'basscss.css', css)
  fs.writeFileSync(dest + 'basscss.min.css', minified)
  console.log('Compiled to css/basscss.css and css/basscss.min.css')

}

compile()

