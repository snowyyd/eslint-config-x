import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import bestPractices from './rules/airbnb-base/best-practices.ts';
import errors from './rules/airbnb-base/errors.ts';
import node from './rules/airbnb-base/node.ts';
import style from './rules/airbnb-base/style.ts';
import { constants } from './utils/constants.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: constants.baseName + 'airbnb',
		plugins: {
			'@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},
	},
	bestPractices,
	errors,
	node,
	style,
	// variables
	// es6
	// imports
	// strict
	/* {
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
		}
	} */
];
