import stylistic from '@stylistic/eslint-plugin';
import tseslintRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import rulesTypeList from '../../node_modules/eslint/conf/rule-type-list.json' with { type: 'json' };
import { configs } from '../../src/index.ts';
import { mergeRulesStrictly } from './functions.ts';

const tselRulesEntries = Object.entries(tseslintRules);

const tselExtensions = tselRulesEntries
	.filter(([, data]) =>
	{
		const extendsBase = data.meta.docs.extendsBaseRule;
		return typeof extendsBase === 'string' || extendsBase === true;
	})
	.map(([name, data]) => [
		`@typescript-eslint/${name}`,
		data.meta.docs.extendsBaseRule === true ? name : (data.meta.docs.extendsBaseRule as string),
	]) as [ruleName: string, extendedRuleName: string][];

const tselDeprecated = tselRulesEntries
	.filter(([, data]) => data.meta.deprecated === true || typeof data.meta.deprecated === 'object')
	.map(([name]) => `@typescript-eslint/${name}`);

export const rules = {
	legacyFormatter: Object.keys(stylistic.configs['disable-legacy'].rules ?? {}),
	eslint: {
		removed: rulesTypeList.removed.map((x) => x.removed),
		deprecated: [
			...[...builtinRules.entries()]
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				.filter(([_, rule]) => rule.meta?.deprecated)
				.map(([name]) => name),
			...rulesTypeList.deprecated,
		],
	},
	tseslint: {
		// https://typescript-eslint.io/rules/?=extension#rules
		extensions: tselExtensions,
		superseded: tselExtensions.map(([, k]) => k),
		deprecated: tselDeprecated,
	},
	airbnb: mergeRulesStrictly(Object.values(configs.airbnb).map((x) => x.rules)),
};
