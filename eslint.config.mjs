import tseslint from 'typescript-eslint';
import configX from './base.js'; // eslint-disable-line import-x/extensions

export default tseslint.config(
	...configX,
	{
		ignores: ['node_modules', 'dist'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		extends: [
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
	},
);
