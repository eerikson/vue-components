/* eslint-env node */
/* eslint spaced-comment: 0, quote-props: 0, no-console: 0 */

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*spec.js',
    ],
    exclude: [
      '**/*.json',
      '**/.eslintrc',
      '**/.babelrc.js',
    ],
    preprocessors: {
      'test/*.js': ['webpack'],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'style-loader!css-loader!sass-loader',
              },
            },
          },
        ],
      },
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
