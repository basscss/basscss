
var fs = require('fs');
var path = require('path');

var Autobass = require('autobass');

// Data
var data = require('../package.json');

data.root = path.join(__dirname, '..');
data.source = path.join(__dirname, '../docs/src');
data.dest = path.join(__dirname, '..');

data.layout = './layouts/docs.html';
data.baseurl = '//basscss.com';
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.0/bassdock.min.css';

data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/';

data.routes = require('../docs/src/routes');
data.showcase = require('../docs/src/showcase');
data.stats = require('../docs/src/stats');
data.colorCombinations = require('../docs/src/color-combinations');

data.modules = data.basscss.modules;
data.optional_modules = data.basscss.optional_modules;

data.routes.docs.routes.modules = {
  title: 'Modules'
};


data.partials = {};
data.partials.head = fs.readFileSync('./docs/src/partials/head.html', 'utf8');
data.partials.footer = fs.readFileSync('./docs/src/partials/footer.html', 'utf8');
data.partials['side-nav'] = fs.readFileSync('./docs/src/partials/side-nav.html', 'utf8');
data.partials['page-header'] = fs.readFileSync('./docs/src/partials/page-header.html', 'utf8');
data.partials['showcase-widget'] = fs.readFileSync('./docs/src/partials/showcase-widget.html', 'utf8');
data.partials.pagination = fs.readFileSync('./docs/src/partials/pagination.html', 'utf8');
data.partials['color-combo-card'] = fs.readFileSync('./docs/src/partials/color-combo-card.html', 'utf8');

data.partials['module-section'] = fs.readFileSync('./docs/src/partials/module-section.html', 'utf8');
data.partials['module-header'] = fs.readFileSync('./docs/src/partials/module-header.html', 'utf8');
data.partials['module-footer'] = fs.readFileSync('./docs/src/partials/module-footer.html', 'utf8');

data.helpers = require('../docs/src/helpers');

// Init and compile
var autobass = new Autobass();
autobass.init(data);

autobass.compile();

