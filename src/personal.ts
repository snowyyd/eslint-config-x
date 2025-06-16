import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: '@snowyyd/eslint-config-x/personal',
		languageOptions: {
			parser,
			parserOptions: {
				projectService: true,
				// tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},
		rules: {
			/**
			 * imports
			 */
			'import-x/no-dynamic-require': 'off',
			'import-x/prefer-default-export': 'off',

			/**
			 * best practices
			 */
			// no longer needed: https://eslint.org/docs/latest/rules/no-return-await
			// TODO: check https://typescript-eslint.io/rules/return-await/
			'no-return-await': 'off',
			'prefer-template': 'off',
			'prefer-destructuring': 'off',
			'prefer-arrow-callback': 'off',

			'prefer-const': ['error', {
				destructuring: 'any',
				// this is needed as `no-use-before-define` is used in airbnb/variables and is overwritten in tseslint
				// https://github.com/typescript-eslint/typescript-eslint/blob/af94f163a1d6447a84c5571fff5e38e4c700edb9/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts#L42
				ignoreReadBeforeAssign: true, // this is needed
			}],

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

			/**
			 * styling & formatting
			 */
			'@stylistic/object-curly-newline': ['error', {
				ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
				ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
				ImportDeclaration: 'never',
				ExportDeclaration: 'never',
			}],
			'@stylistic/brace-style': ['error', 'allman', { allowSingleLine: true }],
			'@stylistic/indent': ['error', 'tab', { SwitchCase: 1 }],
			'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
			'@stylistic/max-len': 'off',
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
		},
	},
];
