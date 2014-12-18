
var fs = require('fs');

require('custom-css');

var app = angular.module('app', ['custom-css']);

app.directive('cssModule', require('./module'));
app.directive('variableField', require('./variable-field'));
