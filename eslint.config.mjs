// @ts-check

import { defineConfig } from 'eslint/config';
// import tseslint from 'typescript-eslint';
import { configs } from './dist/index.js';

export default defineConfig(
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
		files: ['scripts/**/*.ts', 'eslint.config.mjs'],
		rules: {
			'import-x/no-relative-packages': 'off',
			'import-x/no-extraneous-dependencies': 'off',
		},
	},
);
