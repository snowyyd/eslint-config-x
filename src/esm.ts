import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import shared from './rules/personal/shared.ts';

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

			'no-restricted-globals': [
				...shared.rules['no-restricted-globals'],
				// __dirname & __filename cannot be used in ESM
				{
					name: '__dirname',
					message: 'Not available in ES modules. Use `import.meta.dirname` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
				{
					name: '__filename',
					message: 'Not available in ES modules. Use `import.meta.filename` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
			],
		},
	},
];
