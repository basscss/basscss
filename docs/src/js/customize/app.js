
var fs = require('fs');

require('custom-css');
require('angular-local-storage');

var app = angular.module('app', ['custom-css', 'LocalStorageModule']);

app.directive('cssModule', require('./module'));
app.directive('variableField', require('./variable-field'));

app.controller('AppCtrl', function($scope) {
  $scope.options = {
    header: '/*\n  Basscss Custom Build\n  http://basscss.com\n*/'
  };
});

