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
);

export default cfg;
