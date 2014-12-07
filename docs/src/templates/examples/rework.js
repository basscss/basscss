var fs = require('fs');
var rework = require('rework');
var reworkNPM = require('rework-npm');
var reworkMedia = require('rework-custom-media');
var reworkVars = require('rework-vars');
var reworkColors = require('rework-plugin-colors');
var reworkCalc = require('rework-calc');

var src = fs.readFileSync('./src/base.css'. 'utf8');
var css = rework(src)
  .use(reworkNPM())
  .use(reworkMedia())
  .use(reworkVars())
  .use(reworkColors())
  .use(reworkCalc)
  .toString();
fs.writeFileSync('./css/base.css', css);
