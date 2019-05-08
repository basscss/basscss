
var fs = require('fs')
var path = require('path')
var assert = require('assert')
var postcss = require('postcss')
var postcssCustomProperties = require('postcss-custom-properties')

var src = fs.readFileSync(path.join(__dirname, '../basscss.css'), 'utf8')

var css

describe('basscss', function() {
  it('should compile', function(done) {
    assert.doesNotThrow(function() {
      postcss([
        postcssCustomProperties,
      ])
      .process(src)
      .then(function (result) {
        css = result.css
        done()
      })
    })
  })

  it('should compile to string', function() {
    assert.equal(typeof css, 'string')
  })
})
