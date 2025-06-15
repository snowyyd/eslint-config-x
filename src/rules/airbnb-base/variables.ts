import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/variables',

	rules: {
		'init-declarations': 'off',
		// 'no-catch-shadow': 'off',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': [
			'error',
			{
				name: 'isFinite',
				message:
					'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
			},
			{
				name: 'isNaN',
				message:
					'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
			},
			...confusingBrowserGlobals.map((g) => ({
				name: g,
				message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
			})),
		],
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off', // TODO: enable?
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
		'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
	},
} satisfies FlatConfig.Config;
