const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

//
config.module.rules = {[
  test: /\.(png|jpg|gif)$/i,
  use: [
  {
    loader: 'url-loader',
    options: {
      limit: 9999999999999999,
    },
  },
]};

// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/main.js';

// CSS. "5" is MiniCssPlugin
config.plugins[5].options.filename = 'static/css/main.css';
