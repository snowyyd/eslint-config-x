/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './index.js';

export default [
  ...airbnbTs.configs.base,
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
    ignores: ['node_modules/'],
  },
  eslintConfigPrettier,
];