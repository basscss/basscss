
var postcss = require('postcss')

// Not currently implemented
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

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-color-function',
    'cssstats',
    'postcss-discard-comments',
    'autoprefixer',
    'postcss-reporter'
  ],
  input: 'src/basscss.css',
  dir: 'css'
}


