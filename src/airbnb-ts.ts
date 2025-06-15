import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import airbnbBase from './airbnb-base.ts';
import bestPractices from './rules/airbnb-base/best-practices.ts';
import es6 from './rules/airbnb-base/es6.ts';
import style from './rules/airbnb-base/style.ts';
import variables from './rules/airbnb-base/variables.ts';

function replaceRule(ruleName: string, baseConfig: FlatConfig.Config, newName?: string) 
{
	if (!baseConfig.rules || !(ruleName in (baseConfig.rules))) 
	{
		throw new Error('invalid rule data for ' + ruleName);
	}

	return {
		[ruleName]: 'off',
		[`@typescript-eslint/${newName ?? ruleName}`]: baseConfig.rules[ruleName],
	} satisfies FlatConfig.Config['rules'];
}

export default (plugin: FlatConfig.Plugin, parser: FlatConfig.Parser): FlatConfig.ConfigArray => [
	...airbnbBase(plugin, parser),
	{
		name: '@snowyyd/eslint-config-x/airbnb-ts',

		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		rules: {
			...replaceRule('class-methods-use-this', bestPractices),
			...replaceRule('consistent-return', bestPractices),
			...replaceRule('default-param-last', bestPractices),
			...replaceRule('dot-notation', bestPractices),
			...replaceRule('no-empty-function', bestPractices),
			...replaceRule('no-implied-eval', bestPractices),
			// ...replaceRule('no-invalid-this', bestPractices),
			...replaceRule('no-loop-func', bestPractices),
			// ...replaceRule('no-magic-numbers', bestPractices),
			...replaceRule('no-redeclare', bestPractices),
			...replaceRule('no-throw-literal', bestPractices, 'only-throw-error'),
			...replaceRule('no-unused-expressions', bestPractices),
			...replaceRule('prefer-promise-reject-errors', bestPractices),
			// ...replaceRule('require-await', bestPractices),

			// ...replaceRule('max-params', style),
			...replaceRule('no-array-constructor', style),

			...replaceRule('init-declarations', variables),
			...replaceRule('no-shadow', variables),
			...replaceRule('no-unused-vars', variables),
			...replaceRule('no-use-before-define', variables),

			...replaceRule('no-dupe-class-members', es6),
			// ...replaceRule('no-restricted-imports', es6),
			...replaceRule('no-useless-constructor', es6),
			...replaceRule('prefer-destructuring', es6),
		}
	},
];
