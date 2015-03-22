
var React = require('react');
var CustomCss = React.createFactory(require('custom-css'));
var data = require('./data.json');

React.render(CustomCss(data), document.querySelector('#customizer-app'));

