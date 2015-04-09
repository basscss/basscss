
//var modules = {};

module.exports = [
  {
    name: 'basscss',
    path: '/',
  },
  {
    name: 'docs',
    path: '/docs',
    routes: [
      {
        name: 'getting-started',
        path: '/getting-started',
      },
      {
        name: 'base',
        path: '/base',
        modules: [
          { name: 'reset', module: 'basscss-base-reset' }, 
          { name: 'typography', module: 'basscss-base-typography' }, 
          { name: 'forms', module: 'basscss-base-forms' }, 
          { name: 'buttons', module: 'basscss-base-buttons' }, 
          { name: 'tables', module: 'basscss-base-tables' }, 
        ]
      },
      {
        name: 'utility',
        path: '/utility',
        modules: [
          { name: 'layout', module: 'basscss-utility-layout' }, 
          { name: 'typography', module: 'basscss-utility-typography' }, 
          { name: 'white-space-scale', module: 'basscss-utility-white-space' }, 
          { name: 'responsive-states', module: 'basscss-utility-responsive-states' }, 
          { name: 'positions', module: 'basscss-positions' }, 
          { name: 'button-sizes', module: 'basscss-ui-utility-button-sizes' }, 
        ]
      },
      {
        name: 'layout',
        path: '/layout',
        modules: [
          { name: 'grid', module: 'basscss-grid' }, 
          { name: 'flex-object', module: 'flex-object' }, 
        ]
      },
      {
        name: 'color',
        path: '/color',
        modules: [
          { name: 'base', module: 'basscss-color-base' }, 
          { name: 'button-outline', module: 'basscss-button-outline' }, 
          { name: 'button-transparent', module: 'basscss-button-transparent' }, 
          { name: 'colors', module: 'basscss-colors' }, 
          { name: 'borders', module: 'basscss-color-borders' }, 
          { name: 'forms', module: 'basscss-color-forms' }, 
          { name: 'forms-dark', module: 'basscss-color-forms-dark' }, 
          { name: 'input-range', module: 'basscss-input-range' }, 
          { name: 'progress', module: 'basscss-progress' }, 
          { name: 'tables', module: 'basscss-color-tables' }, 
          { name: 'background-images', module: 'basscss-background-images' }, 
        ]
      },
      {
        name: 'guides',
        path: '/guides',
        routes: [
          {
            name: 'basics',
            path: '/basics',
            description: 'Understanding the basics of designing for the web with CSS is essential to using Basscss effectively. This guide covers the fundamentals to help get you started.',
          },
          {
            name: 'page-layout',
            path: '/layout',
            //routes: [
            //  { name: 'demo', path: '/demo' }
            //],
            description: 'Creating page layouts in Basscss is incredibly fast and flexible. This guide will walk you through common layout patterns to create an entire page with a basic information hierarchy.',
          },
          {
            name: 'flex-layout',
            title: 'Flex Object Layout',
            path: '/flex-layout',
            description: 'Solving page-level and micro layout problems with the flex object and other utilities',
          },
          {
            name: 'ui',
            title: 'UI Elements',
            path: '/ui',
            description: 'Creating user interface elements while keeping CSS bloat to a minimum and allowing for flexibility in making iterative design decisions',
          },
          {
            name: 'tips',
            title: 'Tips & Tricks',
            path: '/tips',
            description: 'Basscss is a versatile starting point for any project. These tips and tricks will help you build on top of its foundation in an elegant and maintainable way.',
          },
          {
            name: 'custom-builds',
            title: 'Custom Builds',
            path: '/custom-builds',
            description: 'Using NPM, Cssnext, Bower, Sass, and other tools to customize Basscss for your needs.',
          },
          {
            name: 'css4',
            title: 'CSS4 Syntax',
            path: '/css4',
            description: 'Getting started with CSS4 features, including custom properties and custom media queries',
          },
        ]
      },
      {
        name: 'reference',
        path: '/reference',
        routes: [
          {
            name: 'principles',
            title: 'Design Principles',
            path: '/principles'
          },
          {
            name: 'showcase',
            title: 'Built with Basscss',
            path: '/showcase',
          },
          {
            name: 'Table of Styles',
            path: '/styles'
          },
          {
            name: 'stats',
            path: '/stats'
          },
          {
            name: 'color-combinations',
            title: 'Color Combos',
            path: '/color-combinations'
          },
          {
            name: 'customize',
            path: '/customize'
          },
          {
            name: 'resources',
            title: 'Tools & Resources',
            path: '/resources'
          },
        ]
      }
    ]
  },
  // Need filename option // Hidden path option?
  {
    name: '404',
    filename: '404.html',
    path: '/',
    hidden: true,
  },
];

