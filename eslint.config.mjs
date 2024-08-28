/* eslint-disable import-x/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './base.js';

const stylisticPrettierRules = () => {
  const ruleEntries = Object.entries(eslintConfigPrettier.rules);
  const beginningIndex = ruleEntries.findIndex(([key]) => key === 'array-bracket-newline');
  const endingIndex = ruleEntries.findIndex(([key]) => key === 'yield-star-spacing');
  const formattingRuleEntries = ruleEntries.slice(beginningIndex, endingIndex + 1);
  const rules = Object.fromEntries(
    formattingRuleEntries.map(([key, value]) => [`@stylistic/${key}`, value]),
  );
  return rules;
};

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
  { rules: stylisticPrettierRules() },
];