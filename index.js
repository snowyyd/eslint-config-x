const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./lib/shared');
const { convertConfigToImportX } = require('./lib/convert-import');

const compat = new FlatCompat();

const config = convertConfigToImportX([
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
