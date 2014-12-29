
var fs = require('fs');
var highlight = require('highlight.js');

require('custom-css');
require('angular-local-storage');

var app = angular.module('app', ['custom-css', 'ngSanitize', 'LocalStorageModule']);

app.directive('cssModule', require('./module'));
app.directive('variableField', require('./variable-field'));

app.filter('highlight', function() {
  return function(string) {
    return highlight.highlight('css', string).value;
  };
});

app.controller('AppCtrl', function($scope) {
  $scope.options = {
    header: '/*\n  Basscss Custom Build\n  http://basscss.com\n*/'
  };
});

