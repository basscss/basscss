
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');

module.exports = function() {

  var sites = [];
  var data = require('../docs/src/model')().showcase;
  var imgdir = path.resolve(__dirname, '../docs/src/images/') + '/';

  console.log(imgdir);

  for (key in data) {
    var url = data[key].url;
    sites.push({ url: url, name: key });
  };

  sites.push({ url: 'http://basscss.com', name: 'basscss' });

  sites.forEach(function(site) {
  });

};
