const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./lib/shared');
const { convertConfigs } = require('./lib/convert-configs');

const compat = new FlatCompat();

const config = convertConfigs([
  ...compat.extends('eslint-config-airbnb'),
  ...shared,
  {
    rules: {
      // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
      // Original: ['.jsx']
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    },
  },
]);

module.exports = config;
