
var svgtopng = require('svg-to-png');

module.exports = function() {
  svgtopng.convert('./docs/src/svg/favicon.svg', './docs/images', {});
  svgtopng.convert('./docs/src/svg/apple-touch-icon.svg', './docs/images', {});
  svgtopng.convert('./docs/src/svg/built-badge.svg', './docs/images', {});
};
