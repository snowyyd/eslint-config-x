// @ts-check

import tseslint from 'typescript-eslint';
import { configs } from './dist/index.js';

export default tseslint.config(
	configs.recommended,
	configs.esm,
	{
		ignores: ['dist/**'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['scripts/**/*.ts'],
		rules: {
			'import-x/no-relative-packages': 'off',
			'import-x/no-extraneous-dependencies': 'off',
		},
	},
);
