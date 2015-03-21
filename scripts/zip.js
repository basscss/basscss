
var fs = require('fs');
var path = require('path');
var Jszip = require('jszip');

var zip = new Jszip();

var css = fs.readFileSync(path.join(__dirname, '../css/basscss.css'), 'utf8');

zip.file('basscss.css', css);
var buffer = zip.generate({ type: 'nodebuffer' });

fs.writeFile(path.join(__dirname, '../css/basscss.zip'), buffer, function(err) {
    if (err) throw err;
});

