
module.exports = {
  home: {
    path: '/'
  },
  //404: {
  //  path: '/'
  //},
  docs: {
    layout: './layouts/docs.html',
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
        ]
      },
      layout: {
        sections: [
          { name: 'grid', module: 'basscss-grid' }, 
          { name: 'table-object', module: 'basscss-table-object' }, 
          { name: 'flex-object', module: 'flex-object' }, 
        ]
      },
      color: {
        sections: [
          { name: 'colors', module: 'basscss-colors' }, 
          { name: 'borders', module: 'basscss-color-borders' }, 
          { name: 'forms', module: 'basscss-color-forms' }, 
          { name: 'forms-dark', module: 'basscss-color-forms-dark' }, 
          { name: 'buttons', module: 'basscss-color-buttons' }, 
          { name: 'tables', module: 'basscss-color-tables' }, 
        ]
      },
      guides: {
        routes: {
          basics: {},
          layout: {},
          ui: {},
          tips: {
            title: 'Tips & Tricks'
          },
        }
      }
    }
  }
};
