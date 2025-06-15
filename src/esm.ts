import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import recommended from './recommended.ts';

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	...recommended(plugin, parser),
	{
		name: '@snowyyd/eslint-config-x/esm',
		rules: {
			// extensions are mandatory in ESM
			'import-x/extensions': ['error', 'ignorePackages'],

			// __dirname & __filename cannot be used in ESM
			// TODO: merge
			/* 'no-restricted-globals': ['error',
				{
					name: '__dirname',
					message: 'This CommonJS variable is not available in ES modules. Use `import.meta.dirname` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
				{
					name: '__filename',
					message: 'This CommonJS variable is not available in ES modules. Use `import.meta.filename` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
			] */
		},
	},
];
