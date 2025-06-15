import eslint from '@eslint/js';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import airbnbBase from './airbnb-base.ts';
import personal from './personal.ts';
import typescript from './typescript.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	// TODO: fix js rules for ts
	...airbnbBase(plugin, parser),

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
