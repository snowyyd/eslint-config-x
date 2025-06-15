import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import { constants } from './utils/constants.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: constants.baseName + 'base',

		linterOptions: {
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},

		plugins: {
			'@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},
	},
];
