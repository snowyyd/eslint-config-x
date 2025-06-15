import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/node',

	languageOptions: {
		globals: {
			...globals.node,
		},
	},

	plugins: {
		n: nodePlugin,
	},

	rules: {
		'n/callback-return': 'off',
		'n/global-require': 'error',
		'n/handle-callback-err': 'off',
		'n/no-deprecated-api': 'error',
		'n/no-mixed-requires': ['off', false],
		'n/no-new-require': 'error',
		'n/no-path-concat': 'error',
		'n/no-process-env': 'off',
		'n/no-process-exit': 'off',
		'n/no-restricted-require': 'off',
		'n/no-sync': 'off',
	},
} satisfies FlatConfig.Config;
