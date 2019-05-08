
var postcssImport = require('postcss-import')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCalc = require('postcss-calc')

module.exports = function (config) {
  config.set({
    browsers: [
      'Firefox'
    ],

    files: [
      './test/index.js'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    preprocessors: {
      './test/index.js': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],
    singleRun: true,

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: loader => [
                    postcssImport(),
                    postcssCustomMedia(),
                    postcssCustomProperties(),
                    postcssCalc()
                  ]
                }
              }
            ]
          },
        ]
      }
    },


    webpackMiddleware: {
      noInfo: true
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    }

  })
}

