module.exports = {
  plugins: [
    "postcss-import",
    "postcss-custom-media",
    "postcss-custom-properties",
    "postcss-calc",
    "cssstats",
    "postcss-discard-comments",
    "postcss-remove-root",
    "autoprefixer",
    "postcss-reporter"
  ].map(require)
};
