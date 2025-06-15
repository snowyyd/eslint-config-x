/* eslint-disable import-x/no-relative-packages */
/* eslint-disable import-x/no-extraneous-dependencies */
import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import tseslint from 'typescript-eslint';
import rulesTypeList from '../node_modules/eslint/conf/rule-type-list.json' with { type: 'json' };
import { configs } from '../src/index.ts';

const rules = {
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
		/**
		 * https://github.com/typescript-eslint/typescript-eslint/blob/de8943e98e188d83801ec1044ffc69451db1aa63/packages/eslint-plugin/src/configs/flat/all.ts#L17
		 * tseslint exports a config containing all the rules, we extract all rules not starting with '@' so we can filter eslint rules
		 * that are superseed with tseslint
		 * see also https://typescript-eslint.io/rules/?=extension#rules
		 */
		superseed: Object.keys(tseslint.configs.all[2]?.rules ?? {}).filter((x) => !x.startsWith('@')),
	},
};

function rulesChecker(name: string, cfgName: string | undefined, rules: FlatConfig.Rules, list: string[], reason: string)
{
	const res = Object.keys(rules).filter((r) => list.includes(r));
	if (res.length > 0)
	{
		console.log(`The package "${name}" has ${reason} rules on "${cfgName}":`);
		console.log(res.map((x) => `    ${x} (https://eslint.org/docs/rules/${x})`).join('\n'), '\n');
	}
}

Object.entries(configs).forEach(([name, cfg]) =>
{
	console.log(`Starting analysis on "${name}"...`);

	cfg.forEach((k) =>
	{
		if (!k.rules) return;

		rulesChecker(name, k.name, k.rules, rules.eslint.deprecated, 'deprecated');
		rulesChecker(name, k.name, k.rules, rules.eslint.removed, 'removed');
		rulesChecker(name, k.name, k.rules, rules.legacyFormatter, 'legacy formatter');
		rulesChecker(name, k.name, k.rules, rules.tseslint.superseed, 'tseslint superseed');
	});
});

// console.log(cfg);
