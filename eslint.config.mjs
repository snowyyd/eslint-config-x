import tseslint from 'typescript-eslint';
import { configs } from './dist/index.js';

const cfg = tseslint.config(
	configs.airbnb,
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

export default cfg;
