module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-custom-properties', {
      preserve: true
    }),
    require('postcss-calc'),
    require('cssstats'),
    require('postcss-discard-comments'),
    require('autoprefixer'),
    require('postcss-reporter')
  ]
}
