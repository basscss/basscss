
var modules = {};

module.exports = {
  home: {
    path: '/',
    layout: './layouts/base.html',
  },
  docs: {
    routes: {
      'getting-started': {
        title: 'Getting Started',
        next_page: 'base'
      },
      base: {
        previous_page: 'getting_started',
        next_page: 'utility',
        sections: [
          { name: 'typography', module: 'basscss-base-typography' }, 
          { name: 'forms', module: 'basscss-base-forms' }, 
          { name: 'buttons', module: 'basscss-base-buttons' }, 
          { name: 'tables', module: 'basscss-base-tables' }, 
        ]
      },
      utility: {
        sections: [
          { name: 'typography', module: 'basscss-utility-typography' }, 
          { name: 'layout', module: 'basscss-utility-layout' }, 
          { name: 'white-space-scale', module: 'basscss-utility-white-space' }, 
          { name: 'responsive-states', module: 'basscss-utility-responsive-states' }, 
          { name: 'positions', module: 'basscss-positions' }, 
          { name: 'button-sizes', module: 'basscss-ui-utility-button-sizes' }, 
        ]
      },
      layout: {
        sections: [
          { name: 'grid', module: 'basscss-grid' }, 
          //{ name: 'table-object', module: 'basscss-table-object' }, 
          { name: 'flex-object', module: 'flex-object' }, 
        ]
      },
      color: {
        sections: [
          { name: 'base', module: 'basscss-color-base' }, 
          { name: 'button-outline', module: 'basscss-button-outline' }, 
          { name: 'button-transparent', module: 'basscss-button-transparent' }, 
          { name: 'colors', module: 'basscss-colors' }, 
          { name: 'borders', module: 'basscss-color-borders' }, 
          { name: 'forms', module: 'basscss-color-forms' }, 
          { name: 'forms-dark', module: 'basscss-color-forms-dark' }, 
          { name: 'tables', module: 'basscss-color-tables' }, 
          { name: 'background-images', module: 'basscss-background-images' }, 
        ]
      },
      guides: {
        routes: {
          basics: {
            description: 'Understanding the basics of designing for the web with CSS is essential to using Basscss effectively. This guide covers the fundamentals to help get you started.',
            //sections: [
            //  { title: 'Document Structure', link: '/docs/guides/basics/#document-structure' },
            //  { title: 'Multiclass CSS Pattern', link: '/docs/guides/basics/#multiclass-css-pattern' },
            //  { title: 'Typography', link: '/docs/guides/basics/#writing-and-typography' },
            //  { title: 'Block-Level and Inline Elements', link: '/docs/guides/basics/#block-level-and-inline-elements' },
            //  { title: 'Display Property', link: '/docs/guides/basics/#display-property' },
            //  { title: 'Box Model', link: '/docs/guides/basics/#box-model' },
            //  { title: 'Floats', link: '/docs/guides/basics/#floats' },
            //  { title: 'Widths', link: '/docs/guides/basics/#widths' },
            //  { title: 'Media Queries and Mobile-First Approach', link: '/docs/guides/basics/#media-queries-and-mobile-first-approach' },
            //  { title: 'Positions', link: '/docs/guides/basics/#positions' },
            //  { title: 'Extending Basscss', link: '/docs/guides/basics/#extending-basscss' }
            //]
          },
          layout: {
            title: 'Page Layout',
            routes: {
              demo: {}
            },
            description: 'Creating page layouts in Basscss is incredibly fast and flexible. This guide will walk you through common layout patterns to create an entire page with a basic information hierarchy.',
            //sections: [
            //  { title: 'Global Navigation', link: '/docs/guides/layout/#global-navigation' },
            //  { title: 'Hero Banner', link: '/docs/guides/layout/#hero-banner' },
            //  { title: 'Three-Up', link: '/docs/guides/layout/#three-up' },
            //  { title: 'Blog Teaser', link: '/docs/guides/layout/#blog-teaser' },
            //  { title: 'Gallery', link: '/docs/guides/layout/#gallery' },
            //  { title: 'Footer', link: '/docs/guides/layout/#footer' }
            //]
          },
          ui: {
            title: 'UI Elements',
            description: 'Basscss can be used to create many different user interface elements out of the box. With utility styles and a thoughtfully-architected templating system, you can keep CSS bloat to a minimum, while making iterative design changes to partials and components.',
            //sections: [
            //  { title: 'Button Sizes', link: '/docs/guides/ui/#button-sizes' },
            //  { title: 'Navigation', link: '/docs/guides/ui/#navigation' },
            //  { title: 'Breadcrumbs', link: '/docs/guides/ui/#breadcrumbs' },
            //  { title: 'Pagination', link: '/docs/guides/ui/#pagination' },
            //  { title: 'Button Groups', link: '/docs/guides/ui/#button-groups' },
            //  { title: 'Input Groups', link: '/docs/guides/ui/#input-groups' },
            //  { title: 'Dropdowns', link: '/docs/guides/ui/#dropdowns' },
            //  { title: 'Navbars', link: '/docs/guides/ui/#navbars' },
            //  { title: 'Boxes', link: '/docs/guides/ui/#boxes' },
            //  { title: 'Flash Messages', link: '/docs/guides/ui/#flash-messages' },
            //  { title: 'Badges', link: '/docs/guides/ui/#badges' }
            //]
          },
          tips: {
            title: 'Tips & Tricks',
            description: 'Basscss is a versatile starting point for any project. These tips and tricks will help you build on top of its foundation in an elegant and maintainable way.',
            //sections: [
            //  { title: 'Avoid Overrides', link: '/docs/guides/tips/#avoid-overrides' },
            //  { title: 'Utility Styles are Immutable', link: '/docs/guides/tips/#utility-styles-are-immutable' },
            //  { title: 'Look Before Adding', link: '/docs/guides/tips/#look-before-adding' },
            //  { title: 'Avoid Magic Numbers', link: '/docs/guides/tips/#avoid-magic-numbers' },
            //  { title: 'Don’t Use Contextual Selectors', link: '/docs/guides/tips/#don-t-use-contextual-selectors' },
            //  { title: 'Handle Complexity in Markup', link: '/docs/guides/tips/#handle-complexity-in-markup' },
            //  { title: 'Keep Specificity Low', link: '/docs/guides/tips/#keep-specificity-low' },
            //  { title: 'Don’t Nest Selectors', link: '/docs/guides/tips/#don-t-nest-selectors' },
            //  { title: 'Don’t Use IDs as Selectors', link: '/docs/guides/tips/#don-t-use-ids-as-selectors' },
            //  { title: 'Separate Structure and Skin', link: '/docs/guides/tips/#separate-structure-and-skin' }
            //],
          },
          'custom-builds': {
            //sections: [
            //  { title: 'Rework', link: '/docs/custom-builds/#rework' },
            //  { title: 'Rework Syntax', link: '/docs/custom-builds/#rework-syntax' },
            //  { title: 'Sass', link: '/docs/custom-builds/#sass' },
            //  { title: 'Web App', link: '/docs/custom-builds/#web-app' }
            //]
          },
          rework: {
            title: 'Using Rework',
            //sections: [
            //  { title: 'Imports', link: '/docs/rework/#imports' },
            //  { title: 'Variables', link: '/docs/rework/#variables' },
            //  { title: 'Custom Media Queries', link: '/docs/rework/#custom-media-queries' },
            //  { title: 'Custom Builds', link: '/docs/rework/#custom-builds' },
            //]
          },
        }
      },
      principles: {
        title: 'Design Principles',
        //sections: [
        //  { name: 'design-with-reuse-in-mind', title: 'Open/Closed Principle' },
        //  { name: 'design-with-reuse-in-mind' },
        //  { name: 'dont-make-assumptions' },
        //  { name: 'clarity-over-cleverness' },
        //  { name: 'balance-consistency-with-flexibility' },
        //  { name: 'organizing-principles' },
        //  { name: 'naming-conventions' },
        //]
      },
      showcase: {
        title: 'Built with Basscss',
      },
      styles: { title: 'Table of Styles' },
      stats: { },
      variables: { },
      'color-combinations': {
        title: 'Color Combos'
      },
      customize: {},
    }
  },
  404: {
    path: '/',
    filename: '404.html',
    layout: './layouts/base.html'
  },
};
