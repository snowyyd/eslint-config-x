import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';
import { constants } from '../../utils/constants.ts';

export default {
	name: constants.airbnbBaseName + 'strict',

	languageOptions: {
		globals: {
			...globals.node,
		},
	},

	rules: {
		strict: ['error', 'never'],
	},
} satisfies FlatConfig.Config;
