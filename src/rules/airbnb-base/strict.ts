import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/strict',

	languageOptions: {
		globals: {
			...globals.node,
		},
	},

	rules: {
		strict: ['error', 'never'],
	},
} satisfies FlatConfig.Config;
