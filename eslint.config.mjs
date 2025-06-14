import tseslint from 'typescript-eslint';
import configX from './dist/index.js';

const cfg = tseslint.config(
	configX.configs.airbnb,
	configX.configs.esm,
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
