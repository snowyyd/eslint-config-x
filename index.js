const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./lib/shared');

const compat = new FlatCompat();

const plugin = {
  meta: {
    name: 'eslint-config-airbnb-typescript-x',
    version: '1.0.0',
  },
  configs: {
    react: [
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
    ],
    base: [...compat.extends('eslint-config-airbnb-base'), ...shared],
  },
};

module.exports = plugin;
