
var fs = require('fs');

require('custom-css');
require('angular-local-storage');

var app = angular.module('app', ['custom-css', 'LocalStorageModule']);

app.directive('cssModule', require('./module'));
app.directive('variableField', require('./variable-field'));
