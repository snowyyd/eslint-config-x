import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	...[
		tseslint.configs.base,
		tseslint.configs.eslintRecommended,
		// both `recommendedTypeChecked` and `stylisticTypeChecked` extends `base` and `eslintRecommended`
		// so skip these rules using the [] operator
		tseslint.configs.recommendedTypeChecked[2] ?? tseslint.configs.recommendedTypeChecked,
		tseslint.configs.stylisticTypeChecked[2] ?? tseslint.configs.stylisticTypeChecked,
	].map((c) => ({ files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'], ...c })),
];
