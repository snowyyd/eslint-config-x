import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
// import variables from '../airbnb-base/variables.ts';

export default {
	name: '@snowyyd/eslint-config-x/rules/personal/shared',
	rules: {
		'no-restricted-globals': [
			'error',
			// ...variables.rules['no-restricted-globals'].slice(1, 3),
			{
				name: 'isFinite',
				message:
					'Use Number.isFinite() instead. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite#description',
			},
			{
				name: 'isNaN',
				message:
					'Use Number.isNaN() instead. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description',
			},
		],
	},
} satisfies FlatConfig.Config;
