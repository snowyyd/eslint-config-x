import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	{
		name: '@snowyyd/eslint-config-x/esm',
		plugins: {
			'import-x': importX,
		},
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
