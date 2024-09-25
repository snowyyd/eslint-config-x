const baseRules = {
  'object-curly-newline': ['error', {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: 'never',
    ExportDeclaration: 'never',
  }],
  'brace-style': ['error', 'allman', { allowSingleLine: true }],
  indent: ['error', 'tab', { SwitchCase: 1 }],
  'no-tabs': ['error', { allowIndentationTabs: true }],
  'max-len': 'off',
};

module.exports = [
  {
    rules: {
      'import/no-dynamic-require': 'off',
      'import/prefer-default-export': 'off',

      'prefer-template': 'off',
      'prefer-destructuring': 'off',
      'prefer-arrow-callback': 'off',

      'no-console': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',

      // style
      'object-curly-newline': baseRules['object-curly-newline'],
      '@stylistic/object-curly-newline': baseRules['object-curly-newline'],

      'brace-style': baseRules['brace-style'],
      '@stylistic/brace-style': baseRules['brace-style'],

      indent: baseRules.indent,
      '@stylistic/indent': baseRules.indent,

      'no-tabs': baseRules['no-tabs'],
      '@stylistic/no-tabs': baseRules['no-tabs'],

      'max-len': baseRules['max-len'],
      '@stylistic/max-len': baseRules['max-len'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
];
