module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-custom-properties')({ preserve: false }),
    require('postcss-calc'),
    require('cssstats'),
    require('postcss-discard-comments'),
    require('postcss-remove-root'),
    require('autoprefixer'),
    require('postcss-reporter')
  ]
}
