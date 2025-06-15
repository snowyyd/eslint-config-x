import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: '@snowyyd/eslint-config-x/base',

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
