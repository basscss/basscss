
module.exports = function (config) {
  config.set({
    browsers: [
      'Firefox',
      'Chrome'
    ],

    files: [
      'index.js',
      '../css/basscss.css'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    preprocessors: {
      'index.js': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],
    // singleRun: true,

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    }

  })
}

