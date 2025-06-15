import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import bestPractices from './rules/airbnb-base/best-practices.ts';
import errors from './rules/airbnb-base/errors.ts';
import es6 from './rules/airbnb-base/es6.ts';
import imports from './rules/airbnb-base/imports.ts';
import node from './rules/airbnb-base/node.ts';
import strict from './rules/airbnb-base/strict.ts';
import style from './rules/airbnb-base/style.ts';
import variables from './rules/airbnb-base/variables.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: '@snowyyd/eslint-config-x/airbnb-base',
		plugins: {
			// '@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
		},
	},
	bestPractices,
	errors,
	node,
	style,
	variables,
	es6,
	imports,
	strict,
];
