import eslint from '@eslint/js';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import airbnbTs from './airbnb-ts.ts';
import personal from './personal.ts';
import typescript from './typescript.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	...airbnbTs(plugin, parser),

	// recommended JavaScript
	{
		name: 'eslint/eslint-recommended',
		...eslint.configs.recommended,
	},

	// recommended TypeScript (might depend on eslint-recommended)
	...typescript(plugin, parser),

	// personal configs
	...personal(plugin, parser),
];
