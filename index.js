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
    settings: {
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      // Prepend 'mjs' to match shared config
      // Original: ['.js', '.jsx', '.json']
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
        },
      },
    },
  },
]);

module.exports = config;
