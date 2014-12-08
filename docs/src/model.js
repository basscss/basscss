
var fs = require('fs');
var cssstats = require('css-statistics');
var cssdata = require('./css-data');

module.exports = function() {

  var data = {};
  var cssSource = fs.readFileSync('./css/basscss.css', 'utf8');

  data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/';
  data.css = cssdata('./css/basscss.min.css');
  data.version = require('../../package.json').version;

  data.pages = {
    getting_started: {
      title: 'Getting Started',
      description: '',
      link: '/docs/getting-started',
      next_page: 'base'
    },
    base: {
      title: 'Base',
      description: '',
      link: '/docs/base',
      previous_page: 'getting_started',
      next_page: 'utility',
      sections: [
        { title: 'Typography', link: '/docs/base/#typography' },
        { title: 'Forms', link: '/docs/base/#forms' },
        { title: 'Buttons', link: '/docs/base/#buttons' },
        { title: 'Tables', link: '/docs/base/#tables' },
        { title: 'Variables', link: '/docs/base/#variables' }
      ]
    },
    utility: {
      title: 'Utility',
      description: '',
      link: '/docs/utility',
      previous_page: 'base',
      next_page: 'layout',
      sections: [
        { title: 'Typography', link: '/docs/utility/#typography' },
        { title: 'Layout', link: '/docs/utility/#layout' },
        { title: 'White Space Scale', link: '/docs/utility/#white-space' },
        { title: 'Responsive States', link: '/docs/utility/#responsive-states' },
        { title: 'Positions', link: '/docs/utility/#positions' },
        { title: 'Variables', link: '/docs/utility/#variables' }
      ]
    },
    layout: {
      title: 'Layout',
      description: '',
      link: '/docs/layout',
      previous_page: 'utility',
      next_page: 'color',
      sections: [
        { title: 'Grid', link: '/docs/layout/#grid' },
        { title: 'Table Object', link: '/docs/layout/#table-object' }
      ]
    },
    color: {
      title: 'Color',
      description: '',
      link: '/docs/color',
      previous_page: 'layout',
      sections: [
        { title: 'Colors', link: '/docs/color/#colors' },
        { title: 'Backgrounds', link: '/docs/color/#backgrounds' },
        { title: 'Borders', link: '/docs/color/#borders' },
        { title: 'Forms', link: '/docs/color/#forms' },
        { title: 'Buttons', link: '/docs/color/#buttons' },
        { title: 'Tables', link: '/docs/color/#tables' },
        { title: 'Variables', link: '/docs/color/#variables' }
      ]
    }
  };

  data.guides = {
    basics: {
      title: 'Basics',
      description: 'CSS and Web Design Fundamentals',
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
    //layout: {
    //  title: 'Page Layout',
    //  description: '',
    //  link: '/docs/guides/layout',
    //  sections: [
    //  ]
    //},
    ui: {
      title: 'UI Elements',
      description: 'Styling Custom Controls for Interactivity',
      link: '/docs/guides/ui',
      sections: [
        { title: 'Button Sizes', link: '/docs/guides/ui/#button-sizes' },
        { title: 'Navigation', link: '/docs/guides/ui/#navigation' },
        { title: 'Breadcrumbs', link: '/docs/guides/ui/#breadcrumbs' },
        { title: 'Pagination', link: '/docs/guides/ui/#pagination' },
        { title: 'Button Groups', link: '/docs/guides/ui/#button-groups' },
        { title: 'Input Groups', link: '/docs/guides/ui/#input-groups' },
        { title: 'Dropdowns', link: '/docs/guides/ui/#dropdowns' },
        { title: 'Navbars', link: '/docs/guides/ui/#navbars' },
        { title: 'Boxes', link: '/docs/guides/ui/#boxes' },
        { title: 'Flash Messages', link: '/docs/guides/ui/#flash-messages' },
        { title: 'Badges', link: '/docs/guides/ui/#badges' }
      ]
    },
    tips: {
      title: 'Tips & Tricks',
      description: 'Getting the Most Out of Basscss',
      link: '/docs/guides/tips',
      sections: [
        { title: 'Avoid Overrides', link: '/docs/guides/tips/#avoid-overrides' },
        { title: 'Utility Styles are Immutable', link: '/docs/guides/tips/#utility-styles' },
        { title: 'Look Before Adding', link: '/docs/guides/tips/#look-before-adding' },
        { title: 'Avoid Magic Numbers', link: '/docs/guides/tips/#avoid-magic-numbers' },
        { title: 'Don’t Use Contextual Selectors', link: '/docs/guides/tips/#contextual-selectors' },
        { title: 'Handle Complexity in Markup', link: '/docs/guides/tips/#handle-complexity-in-markup' },
        { title: 'Keep Specificity Low', link: '/docs/guides/tips/#keep-specificity-low' },
        { title: 'Don’t Nest Selectors', link: '/docs/guides/tips/#dont-nest-selectors' },
        { title: 'Don’t Use IDs as Selectors', link: '/docs/guides/tips/#dont-use-ids' },
        { title: 'Separate Structure and Skin', link: '/docs/guides/tips/#separate-structure-and-skin' }
      ]
    }
  };

  data.references =  {
    principles: { title: 'Design Principles', link: '/docs/principles' },
    rework: { title: 'Using Rework', link: '/docs/rework' },
    styles: { title: 'Table of Styles', link: '/docs/styles' },
    showcase: { title: 'Built with Basscss', link: '/docs/showcase' },
    stats: { title: 'Stats', link: '/docs/stats' }
    //variables: { title: 'Variables', link: '/docs/variables' }
  };

  data.showcase = {
    singlesclub: {
      title: 'Singles Club',
      url: 'http://singlesclub.fm/',
      description: 'Part record club. Part music journal.',
      image: 'singlesclub-640.jpg'
    },
    assembly_blog: {
      title: 'Assembly Blog',
      url: 'http://blog.assembly.com/',
      description: '',
      image: 'assembly_blog-640.jpg'
    },
    monodraw: {
      title: 'Monodraw for Mac',
      url: 'http://monodraw.helftone.com/',
      description: 'Powerful ASCII art editor designed for the Mac.',
      image: 'monodraw-640.jpg'
    },
    pixyll: {
      title: 'Pixyll',
      url: 'http://pixyll.com/',
      description: 'A simple, beautiful theme for Jekyll that emphasizes content rather than aesthetic fluff.',
      image: 'pixyll-640.jpg'
    },
    nurturingability: {
      title: 'Nurturing Ability',
      url: 'http://www.nurturingability.com.au/',
      description: 'Helping our Most Helpless One Family at a Time',
      image: 'nurturingability-640.jpg'
    },
    linknest: {
      title: 'Linknest',
      url: 'https://linknest.cc/',
      description: 'Bookmarks made simple',
      image: 'linknest-640.jpg'
    },
    cssstats: {
      title: 'CSS Stats',
      url: 'http://cssstats.com/',
      description: 'Potentially interesting stats on stylesheets',
      image: 'cssstats-640.jpg'
    }
  };

  data.stats = cssstats(cssSource);

  return data;

};
