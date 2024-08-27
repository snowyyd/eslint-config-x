/* eslint-disable import-x/no-extraneous-dependencies, import-x/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './base.js';

export default [
  ...airbnbTs,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    ignores: ['node_modules/'],
    rules: {
      'import-x/no-unresolved': 'off',
    },
  },
  eslintConfigPrettier,
];