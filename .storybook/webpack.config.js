const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[8] = {
      include: path.resolve(__dirname, '../src'),
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        quiet: true,
        emitError: false,
        emitWarning: false,
        failOnWarning: false,
        failOnError: false,
      },
    };

    return config;
  },
};
