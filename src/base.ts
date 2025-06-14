import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import { constants } from './utils/constants.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	eslint.configs.recommended,

	...tseslint.config(
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', 'abc'],
			extends: [
				tseslint.configs.recommendedTypeChecked,
				tseslint.configs.stylisticTypeChecked,
			],
		},
	),

	{
		name: constants.baseName + 'base',

		languageOptions: {
			parser,
		},

		plugins: {
			'@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},

		rules: {
			'import-x/no-dynamic-require': 'off',
			'import-x/prefer-default-export': 'off',

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
