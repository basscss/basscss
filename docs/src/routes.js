
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
      utility: {},
      layout: {},
      color: {},
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
