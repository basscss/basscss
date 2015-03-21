
var fs = require('fs');
var path = require('path');
var version = require('../package.json').version;
var bower = require('../bower.json');

bower.version = version;

var json = JSON.stringify(bower);
fs.writeFileSync(path.join(__dirname, '../bower.json'), json);
console.log('Bower bumped to ' + version);

