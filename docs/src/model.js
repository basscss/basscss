
var cssdata = require('./css-data');

module.exports = function() {

  var data = {};

  data.css = cssdata('./css/basscss.min.css');
  data.version = require('../../package.json').version;

  data.pages = {
    getting_started: {
      title: 'Getting Started',
      description: '',
      link: '/docs/getting-started'
    },
    base: {
      title: 'Base',
      description: '',
      link: '/docs/base',
      sections: [
        { title: 'Typography', link: '/docs/base/#typography' },
        { title: 'Forms', link: '/docs/base/#forms' },
        { title: 'Buttons', link: '/docs/base/#buttons' },
        { title: 'Tables', link: '/docs/base/#tables' }
      ]
    },
    utility: {
      title: 'Utility',
      description: '',
      link: '/docs/utility',
      sections: [
        { title: 'Typography', link: '/docs/utility/#typography' },
        { title: 'Layout', link: '/docs/utility/#layout' },
        { title: 'White Space Scale', link: '/docs/utility/#white-space' },
        { title: 'Responsive States', link: '/docs/utility/#responsive-states' },
        { title: 'Positions', link: '/docs/utility/#positions' }
      ]
    },
    layout: {
      title: 'Layout',
      description: '',
      link: '/docs/layout',
      sections: [
        { title: 'Grid', link: '/docs/layout/#grid' },
        { title: 'Table Object', link: '/docs/layout/#table-object' }
      ]
    },
    color: {
      title: 'Color',
      description: '',
      link: '/docs/color',
      sections: [
        { title: 'Colors', link: '/docs/color/#colors' },
        { title: 'Backgrounds', link: '/docs/color/#backgrounds' },
        { title: 'Borders', link: '/docs/color/#borders' },
        { title: 'Forms', link: '/docs/color/#forms' },
        { title: 'Buttons', link: '/docs/color/#buttons' },
        { title: 'Tables', link: '/docs/color/#tables' }
      ]
    }
  };

  data.guides = {
    basics: {
      title: 'Basics',
      description: '',
      link: '/docs/guides/basics',
      sections: [
        { title: 'Document Structure', link: '/docs/guides/basics/#markup' },
        { title: 'Multiclass CSS Pattern', link: '/docs/guides/basics/#multi-class-pattern' },
        { title: 'Typography', link: '/docs/guides/basics/#typography' },
        { title: 'Block-Level and Inline Elements', link: '/docs/guides/basics/#block-level-inline' },
        { title: 'Display Property', link: '/docs/guides/basics/#display' },
        { title: 'Box Model', link: '/docs/guides/basics/#box-model' },
        { title: 'Floats', link: '/docs/guides/basics/#floats' },
        { title: 'Widths', link: '/docs/guides/basics/#widths' },
        { title: 'Media Queries and Mobile-First Approach', link: '/docs/guides/basics/#media-queries' },
        { title: 'Positions', link: '/docs/guides/basics/#positions' },
        { title: 'Extending Basscss', link: '/docs/guides/basics/#extending-basscss' }
      ]
    },
    layout: {
      title: 'Page Layout',
      description: '',
      link: '/docs/guides/layout',
      sections: [
      ]
    },
    ui: {
      title: 'UI Elements',
      description: '',
      link: '/docs/guides/ui',
      sections: [
      ]
    },
    tips: {
      title: 'Tips & Tricks',
      description: '',
      link: '/docs/guides/tips',
      sections: [
      ]
    }
  };

  data.references =  {
    principles: { title: 'Design Principles', link: '/docs/principles' },
    rework: { title: 'Using Rework', link: '/docs/rework' },
    styles: { title: 'Table of Styles', link: '/docs/styles' }
    //stats: { title: 'Stats', link: '/docs/stats' },
    //variables: { title: 'Variables', link: '/docs/variables' }
  };

  return data;

};
