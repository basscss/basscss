module.exports = {
  plugins: [
    require('postcss-custom-media'),
    require('postcss-custom-properties', {
      preserve: true
    }),
    require('postcss-calc'),
    require('postcss-discard-comments'),
    require('autoprefixer'),
    require('postcss-reporter')
  ]
}
