import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import { configs } from '../dist/index.js';
import { rules } from '../scripts/utils/rules.ts';

const cfg = tseslint.config(
	{
		name: 'debug/airbnb-base',
		plugins: {
			// '@typescript-eslint': plugin,
			'@stylistic': stylistic,
			'import-x': importX,
		},
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
		},
		rules: rules.airbnb,
	},
	{
		name: 'debug/recommended',
		plugins: { ...configs.base[0].plugins, ...configs.airbnb[3].plugins },
		rules: {
			...eslint.configs.recommended.rules,
			...tseslint.configs.eslintRecommended.rules,
			...tseslint.configs.recommendedTypeChecked[2].rules,
			...tseslint.configs.stylisticTypeChecked[2].rules,
		},

		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				// tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);

export default cfg;
