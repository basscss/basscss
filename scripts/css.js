
var fs = require('fs')
var path = require('path')
var cssnext = require('cssnext')
var cssstats = require('cssstats')
var filesize = require('filesize')
var Cleancss = require('clean-css')
var pkg = require('../package.json')

var postcss = require('postcss')

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

  var css = cssnext(src, {
    features: {
      customProperties: {
        strict: false, // disable variable fallbacks from being redundantly added
      },
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  })
  css =
    postcss()
    .use(removeComments())
    .use(removeRoot())
    .process(css)
    .css
  var minified = new Cleancss({
      advanced: false,
    }).minify(css).styles

  var stats = cssstats(css)
  console.log('Size: ' + filesize(stats.size))
  console.log('Gzipped: ' + filesize(stats.gzipSize))
  console.log('Rules: ' + stats.rules.length)
  console.log('Selectors: ' + stats.aggregates.selectors)
  console.log('Declarations: ' + stats.aggregates.declarations)

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
      '    ' + stats.rules.length + ' Rules',
      '    ' + stats.aggregates.selectors + ' Selectors',
      '    ' + stats.aggregates.declarations + ' Declarations',
      '    ' + stats.aggregates.properties.length + ' Properties',
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

