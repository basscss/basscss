
var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var Lodocs = require('../../lodocs');


// Data
var data = require('../package.json');

data.root = path.join(__dirname, '..');
data.source = path.join(__dirname, '../docs/src');
data.dest = path.join(__dirname, '..');

data.layout = './layouts/docs.html';
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/0.0.3/bassdock.min.css';
data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/';

data.routes = require('../docs/src/routes');
data.showcase = require('../docs/src/showcase');
data.stats = require('../docs/src/stats');
data.defaults = require('../docs/src/variables')('./src/basscss.css');

data.modules = data.basscss.modules;

  data.partials = {};
  data.partials.head = fs.readFileSync('./docs/src/partials/head.html', 'utf8');
  data.partials.footer = fs.readFileSync('./docs/src/partials/footer.html', 'utf8');
  data.partials['side-nav'] = fs.readFileSync('./docs/src/partials/side-nav.html', 'utf8');
  data.partials['page-header'] = fs.readFileSync('./docs/src/partials/page-header.html', 'utf8');

  var lodocs = new Lodocs();
  lodocs.init(data);

module.exports = function() {

  lodocs.compile();
};

