var basswork = require('basswork');
var fs = require('fs');

var src = fs.readFileSync('./src/base.css', 'utf8');
var css = basswork(src);
fs.writeFileSync('./css/base.css', css);
