import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { configs } from '../src/index.ts';
import { deprecatedRules, legacyRules, removedRules } from './rules-generator/utils.ts';

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

		rulesChecker(name, k.name, k.rules, deprecatedRules, 'deprecated');
		rulesChecker(name, k.name, k.rules, removedRules, 'removed');
		rulesChecker(name, k.name, k.rules, legacyRules, 'legacy formatter');
	});
});

// console.log(cfg);
