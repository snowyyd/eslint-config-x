const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');

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

			'no-restricted-syntax': [
				'error',
				{
					selector: 'ForInStatement',
					message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				},
				/* {
					selector: 'ForOfStatement',
					message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
				}, */
				{
					selector: 'LabeledStatement',
					message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				},
				{
					selector: 'WithStatement',
					message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				},
			],

			// style
			'object-curly-newline': 'off',
			'@stylistic/object-curly-newline': baseRules['object-curly-newline'],

			'brace-style': 'off',
			'@stylistic/brace-style': baseRules['brace-style'],

			indent: 'off',
			'@stylistic/indent': baseRules.indent,

			'no-tabs': 'off',
			'@stylistic/no-tabs': baseRules['no-tabs'],

			'max-len': 'off',
			'@stylistic/max-len': baseRules['max-len'],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',

			// https://github.com/iamturns/eslint-config-airbnb-typescript/issues/344
			'class-methods-use-this': 'off',
			'@typescript-eslint/class-methods-use-this': [
				baseBestPracticesRules['class-methods-use-this'][0],
				{
					...baseBestPracticesRules['class-methods-use-this'][1],
				},
			],
		},
	},
];
