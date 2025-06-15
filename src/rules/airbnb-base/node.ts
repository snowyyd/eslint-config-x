import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/node',

	languageOptions: {
		globals: {
			...globals.node,
		},
	},

	rules: {
		// 'callback-return': 'off',
		'global-require': 'error',
		// 'handle-callback-err': 'off',
		'no-buffer-constructor': 'error',
		// 'no-mixed-requires': ['off', false],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		// 'no-process-env': 'off',
		// 'no-process-exit': 'off',
		// 'no-restricted-modules': 'off',
		// 'no-sync': 'off',
	},
} satisfies FlatConfig.Config;
