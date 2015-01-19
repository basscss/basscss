
var fs = require('fs');
var cssstats = require('cssstats');
var cssdata = require('./css-data');
var variables = require('./variables');
var modules = require('./modules');
var Humanize = require('humanize-plus');

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
        { title: 'Typography', id: 'typography', link: '/docs/base/#typography', module: 'basscssBaseTypography' },
        { title: 'Forms', id: 'forms', link: '/docs/base/#forms', module: 'basscssBaseForms' },
        { title: 'Buttons', id: 'buttons', link: '/docs/base/#buttons', module: 'basscssBaseButtons' },
        { title: 'Tables', id: 'tables', link: '/docs/base/#tables', module: 'basscssBaseTables' }
      ]
    },
    utility: {
      title: 'Utility',
      description: '',
      link: '/docs/utility',
      previous_page: 'base',
      next_page: 'layout',
      sections: [
        { title: 'Typography', id: 'typography', link: '/docs/utility/#typography', module: 'basscssUtilityTypography' },
        { title: 'Layout', id: 'layout', link: '/docs/utility/#layout', module: 'basscssUtilityLayout' },
        { title: 'White Space Scale', id: 'white-space', link: '/docs/utility/#white-space', module: 'basscssUtilityWhiteSpace' },
        { title: 'Responsive States', id: 'responsive-states', link: '/docs/utility/#responsive-states', module: 'basscssUtilityResponsiveStates' },
        { title: 'Positions', id: 'positions', link: '/docs/utility/#positions', module: 'basscssPositions' }
      ]
    },
    layout: {
      title: 'Layout',
      description: '',
      link: '/docs/layout',
      previous_page: 'utility',
      next_page: 'color',
      sections: [
        {
          title: 'Grid',
          link: '/docs/layout/#grid',
          id: 'grid',
          module: 'basscssGrid',
          subsections: [
            //{ title: 'Responsive Grid', link: '/docs/layout/#responsive-grid' },
            //{ title: 'Gutters', link: '/docs/layout/#grid-gutters' },
            //{ title: 'Nesting', link: '/docs/layout/#grid-nesting' },
            //{ title: 'Reversed', link: '/docs/layout/#grid-reversed' },
            //{ title: 'Centering Columns', link: '/docs/layout/#grid-centering' }
          ]
        },
        {
          title: 'Table Object',
          link: '/docs/layout/#table-object',
          id: 'table-object',
          module: 'basscssTableObject',
          subsections: [
            //{ title: 'Flag Object', link: '/docs/layout/#table-flag-object' },
            //{ title: 'Equal Width Cells', link: '/docs/layout/#table-fixed' },
            //{ title: 'Responsive Table Object', link: '/docs/layout/#responsive-table-object' },
            //{ title: 'Table Grid', link: '/docs/layout/#table-grid' }
          ]
        },
        {
          title: 'Flex Object',
          link: '/docs/layout/#flex-object',
          id: 'flex-object',
          module: 'flexObject',
          subsections: []
        }
      ]
    },
    color: {
      title: 'Color',
      description: '',
      link: '/docs/color',
      sections: [
        { title: 'Colors', link: '/docs/color/#colors', id: 'colors', module: 'basscssColors' },
        { title: 'Borders', link: '/docs/color/#borders', id: 'borders', module: 'basscssColorBorders' },
        { title: 'Forms', link: '/docs/color/#forms', id: 'forms', module: 'basscssColorForms' },
        { title: 'Forms Dark', link: '/docs/color/#forms-dark', id: 'forms-dark', module: 'basscssColorFormsDark' },
        { title: 'Buttons', link: '/docs/color/#buttons', id: 'buttons', module: 'basscssColorButtons' },
        { title: 'Tables', link: '/docs/color/#tables', id: 'tables', module: 'basscssColorTables' }
      ]
    }
  };

  data.guides = {
    basics: {
      title: 'Basics',
      description: 'CSS and Web Design Fundamentals',
      link: '/docs/guides/basics',
      sections: [
        { title: 'Document Structure', link: '/docs/guides/basics/#document-structure' },
        { title: 'Multiclass CSS Pattern', link: '/docs/guides/basics/#multiclass-css-pattern' },
        { title: 'Typography', link: '/docs/guides/basics/#writing-and-typography' },
        { title: 'Block-Level and Inline Elements', link: '/docs/guides/basics/#block-level-and-inline-elements' },
        { title: 'Display Property', link: '/docs/guides/basics/#display-property' },
        { title: 'Box Model', link: '/docs/guides/basics/#box-model' },
        { title: 'Floats', link: '/docs/guides/basics/#floats' },
        { title: 'Widths', link: '/docs/guides/basics/#widths' },
        { title: 'Media Queries and Mobile-First Approach', link: '/docs/guides/basics/#media-queries-and-mobile-first-approach' },
        { title: 'Positions', link: '/docs/guides/basics/#positions' },
        { title: 'Extending Basscss', link: '/docs/guides/basics/#extending-basscss' }
      ]
    },
    layout: {
      title: 'Page Layout',
      description: 'Using the Grid System to Create an Entire Page',
      link: '/docs/guides/layout',
      sections: [
        { title: 'Global Navigation', link: '/docs/guides/layout/#global-navigation' },
        { title: 'Hero Banner', link: '/docs/guides/layout/#hero-banner' },
        { title: 'Three-Up', link: '/docs/guides/layout/#three-up' },
        { title: 'Blog Teaser', link: '/docs/guides/layout/#blog-teaser' },
        { title: 'Gallery', link: '/docs/guides/layout/#gallery' },
        { title: 'Footer', link: '/docs/guides/layout/#footer' }
      ]
    },
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
        { title: 'Utility Styles are Immutable', link: '/docs/guides/tips/#utility-styles-are-immutable' },
        { title: 'Look Before Adding', link: '/docs/guides/tips/#look-before-adding' },
        { title: 'Avoid Magic Numbers', link: '/docs/guides/tips/#avoid-magic-numbers' },
        { title: 'Don’t Use Contextual Selectors', link: '/docs/guides/tips/#don-t-use-contextual-selectors' },
        { title: 'Handle Complexity in Markup', link: '/docs/guides/tips/#handle-complexity-in-markup' },
        { title: 'Keep Specificity Low', link: '/docs/guides/tips/#keep-specificity-low' },
        { title: 'Don’t Nest Selectors', link: '/docs/guides/tips/#don-t-nest-selectors' },
        { title: 'Don’t Use IDs as Selectors', link: '/docs/guides/tips/#don-t-use-ids-as-selectors' },
        { title: 'Separate Structure and Skin', link: '/docs/guides/tips/#separate-structure-and-skin' }
      ]
    }
  };

  data.references =  {
    principles: {
      title: 'Design Principles', link: '/docs/principles',
      sections: [
        { title: 'Open/Closed Principle', link: '/docs/principles/#follow-the-open-closed-principle' },
        { title: 'Design with Reuse in Mind', link: '/docs/principles/#design-with-reuse-in-mind' },
        { title: 'Don’t Make Assumptions', link: '/docs/principles/#don-t-make-assumptions' },
        { title: 'Clarity Over Cleverness', link: '/docs/principles/#clarity-over-cleverness' },
        { title: 'Balance Consistency with Flexibility', link: '/docs/principles/#balance-consistency-with-flexibility' },
        { title: 'Organizing Principles', link: '/docs/principles/#organizing-principles' },
        { title: 'Naming Conventions', link: '/docs/principles/#naming-conventions' },
      ]
    },
    showcase: { title: 'Built with Basscss', link: '/docs/showcase' },
    customBuilds: {
      title: 'Custom Builds', link: '/docs/custom-builds',
      sections: [
        { title: 'Rework', link: '/docs/custom-builds/#rework' },
        { title: 'Rework Syntax', link: '/docs/custom-builds/#rework-syntax' },
        { title: 'Sass', link: '/docs/custom-builds/#sass' },
        { title: 'Web App', link: '/docs/custom-builds/#web-app' }
      ]
    },
    customize: { title: 'Customize', link: '/docs/customize' },
    rework: {
      title: 'Using Rework', link: '/docs/rework',
      sections: [
        { title: 'Imports', link: '/docs/rework/#imports' },
        { title: 'Variables', link: '/docs/rework/#variables' },
        { title: 'Custom Media Queries', link: '/docs/rework/#custom-media-queries' },
        { title: 'Custom Builds', link: '/docs/rework/#custom-builds' },
      ]
    },
    styles: { title: 'Table of Styles', link: '/docs/styles' },
    stats: { title: 'Stats', link: '/docs/stats' },
    variables: { title: 'Variables', link: '/docs/variables' },
  };

  data.showcase = {
    singlesclub: {
      title: 'Singles Club',
      url: 'http://singlesclub.fm/',
      description: 'Part record club. Part music journal.',
      image: 'singlesclub-640.jpg'
    },
    colepeters: {
      title: 'Cole Peters',
      url: 'http://colepeters.com/',
      description: 'Designer, writer, sound artist',
      image: 'colepeters.png'
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

  data.modules = modules();
  data.defaults = variables('./src/basscss.css');
  data.stats = cssstats(cssSource);
  data.stats.sizeKB = Humanize.fileSize(data.stats.size);
  data.stats.gzipSizeKB = Humanize.fileSize(data.stats.gzipSize);

  return data;

};
