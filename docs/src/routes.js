
var modules = {};

module.exports = {
  home: {
    path: '/',
    layout: './layouts/base.html',
  },
  docs: {
    layout: './layouts/base.html',
    routes: {
      'getting-started': {
        title: 'Getting Started',
        next_page: 'base'
      },
      base: {
        previous_page: 'getting_started',
        next_page: 'utility',
        sections: [
          { name: 'reset', module: 'basscss-base-reset' }, 
          { name: 'typography', module: 'basscss-base-typography' }, 
          { name: 'forms', module: 'basscss-base-forms' }, 
          { name: 'buttons', module: 'basscss-base-buttons' }, 
          { name: 'tables', module: 'basscss-base-tables' }, 
        ]
      },
      utility: {
        sections: [
          { name: 'layout', module: 'basscss-utility-layout' }, 
          { name: 'typography', module: 'basscss-utility-typography' }, 
          { name: 'white-space-scale', module: 'basscss-utility-white-space' }, 
          { name: 'responsive-states', module: 'basscss-utility-responsive-states' }, 
          { name: 'positions', module: 'basscss-positions' }, 
          { name: 'button-sizes', module: 'basscss-ui-utility-button-sizes' }, 
        ]
      },
      layout: {
        sections: [
          { name: 'grid', module: 'basscss-grid' }, 
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
          { name: 'input-range', module: 'basscss-input-range' }, 
          { name: 'progress', module: 'basscss-progress' }, 
          { name: 'tables', module: 'basscss-color-tables' }, 
          { name: 'background-images', module: 'basscss-background-images' }, 
        ]
      },
      guides: {
        routes: {
          basics: {
            description: 'Understanding the basics of designing for the web with CSS is essential to using Basscss effectively. This guide covers the fundamentals to help get you started.',
          },
          layout: {
            title: 'Page Layout',
            routes: {
              demo: {}
            },
            description: 'Creating page layouts in Basscss is incredibly fast and flexible. This guide will walk you through common layout patterns to create an entire page with a basic information hierarchy.',
          },
          'flex-layout': {
            title: 'Flex Object Layout',
            description: 'Solving page-level and micro layout problems with the flex object and other utilities',
          },
          ui: {
            title: 'UI Elements',
            description: 'Creating user interface elements while keeping CSS bloat to a minimum and allowing for flexibility in making iterative design decisions',
          },
          tips: {
            title: 'Tips & Tricks',
            description: 'Basscss is a versatile starting point for any project. These tips and tricks will help you build on top of its foundation in an elegant and maintainable way.',
          },
          'custom-builds': {
            title: 'Custom Builds',
            description: 'Using NPM, Cssnext, Bower, Sass, and other tools to customize Basscss for your needs.',
          },
          css4: {
            title: 'CSS4 Syntax',
            description: 'Getting started with CSS4 features, including custom properties and custom media queries',
          },
        }
      },
      principles: {
        title: 'Design Principles',
      },
      showcase: {
        title: 'Built with Basscss',
      },
      styles: { title: 'Table of Styles' },
      stats: { },
      'color-combinations': {
        title: 'Color Combos'
      },
      customize: {},
      resources: {
        title: 'Tools & Resources'
      },
    }
  },
  404: {
    path: '/',
    filename: '404.html',
    layout: './layouts/base.html'
  },
};
