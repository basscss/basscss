module.exports = {
  plugins: [
    require('postcss-custom-media'),
    require('postcss-custom-properties', {
      preserve: true
    }),
  ]
}
