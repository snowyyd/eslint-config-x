/* eslint-disable import-x/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './src/base.js';

export default [
  { ignores: ['node_modules/'] },
  ...airbnbTs,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['**/*.*js'],
    rules: {
      'import-x/no-unresolved': 'off', // Doesn't support imports without a "main" field
    },
  },
  eslintConfigPrettier,
];