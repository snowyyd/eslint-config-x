/* eslint-disable import-x/no-relative-packages */
/* eslint-disable import-x/no-extraneous-dependencies */
import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import chalk from 'chalk';
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

function getRuleUrl(ruleName: string)
{
	const match = /^(?:@(?<plugin>[\w-]+)\/)?(?<rule>.+)$/.exec(ruleName);
	if (!match) return undefined;

	const plugin = match.groups?.plugin;

	const baseUrls: Record<string, string> = {
		eslint: 'https://eslint.org/docs/rules/',
		'typescript-eslint': 'https://typescript-eslint.io/rules/',
		stylistic: 'https://eslint.style/rules/',
		'import-x': 'https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/',
	};

	const base = baseUrls[plugin ?? 'eslint'];
	return base ? base + ruleName : undefined;
}

function formatTree(items: string[])
{
	return items
		.map((item, index) =>
		{
			const isLast = index === items.length - 1;
			const prefix = isLast ? '  └─ ' : '  ├─ ';
			return prefix + item;
		})
		.join('\n');
}

function rulesChecker(pkgName: string, cfgName: string, flatRules: FlatConfig.Rules, list: string[], reason: string, files?: FlatConfig.Config['files'])
{
	const found = Object.entries(flatRules).filter((r) => list.includes(r[0]));
	if (found.length === 0) return;

	console.log(chalk.greenBright(`Config "${chalk.yellow(pkgName)} > ${chalk.yellowBright(cfgName)}" has "${chalk.cyanBright(reason)}" rules:`));
	console.log(chalk.blueBright('Matching files:'), files);

	const output = found.map(([ruleName, data]) => formatTree([
		chalk.redBright(ruleName),
		chalk.yellowBright('value: ' + JSON.stringify(data)),
		chalk.gray(`docs: ${getRuleUrl(ruleName)}`),
	])); // `    ${chalk.redBright(ruleName)} [ ${chalk.yellowBright(JSON.stringify(data))} ] ${chalk.gray(`(docs: ${getRuleUrl(ruleName)})`)}`).join('\n');

	console.log(output.join('\n\n'), '\n\n');
}

Object.entries(configs).forEach(([name, cfg]) =>
{
	console.log(chalk.cyanBright(`Starting analysis of configuration "${name}"...`));

	cfg.forEach((c) =>
	{
		const n = c.name ?? chalk.gray('(anonymous)');

		if (c.rules === undefined)
		{
			// console.warn(chalk.yellowBright(`Config "${name}" has no defined rules for extended config "${n}". Skipping...\n\n`));
			return;
		}

		([
			[rules.eslint.deprecated, 'deprecated'],
			[rules.eslint.removed, 'removed'],
			[rules.legacyFormatter, 'legacy formatter'],
			// [rules.tseslint.superseed, 'tseslint superseed'],
		] as const)
			.forEach((k) => rulesChecker(name, n, c.rules!, k[0], k[1], c.files));
	});
});
