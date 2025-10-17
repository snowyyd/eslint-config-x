// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config';
// import tseslint from 'typescript-eslint';
import { configs } from './dist/index.js';

export default defineConfig(
	globalIgnores([
		'dist/*',
	]),
	configs.recommended,
	configs.esm,
	{
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
