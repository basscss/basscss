
module.exports = {
  removePrefix: function(string) {
    if (!string) return false;
    var result = string.replace(/^Basscss|^basscss-/, '');
    return result;
  }
};
