import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import globals from 'globals';

export default {
	languageOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		globals: {
			...globals.es2015,
		},
	},

	plugins: {
		'import-x': importX,
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json'],
			},
		},
		'import/extensions': [
			'.js',
			'.mjs',
			'.jsx',
		],
		'import/core-modules': [
		],
		'import/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$',
		],
	},

	rules: {
		// TODO
	},
} satisfies FlatConfig.Config;
