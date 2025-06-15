/* eslint-disable import-x/no-relative-packages */
/* eslint-disable import-x/no-extraneous-dependencies */
import stylistic from '@stylistic/eslint-plugin';
import tseslintRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import chalk from 'chalk';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import rulesTypeList from '../node_modules/eslint/conf/rule-type-list.json' with { type: 'json' };
import { configs } from '../src/index.ts';

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
		// https://typescript-eslint.io/rules/?=extension#rules
		extensions: tselExtensions,
		superseded: tselExtensions.map(([, k]) => k),
		deprecated: tselDeprecated,
	},
};

function getRuleUrl(ruleName: string)
{
	const match = /^(?:(?<plugin>@?[\w-]+)\/)?(?<rule>.+)$/.exec(ruleName);
	if (!match) return undefined;

	const plugin = match.groups?.plugin;

	const baseUrls: Record<string, string> = {
		eslint: 'https://eslint.org/docs/rules/',
		'@typescript-eslint': 'https://typescript-eslint.io/rules/',
		'@stylistic': 'https://eslint.style/rules/',
		'import-x': 'https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/',
		n: 'https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/',
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

	console.log(chalk.greenBright(`\nConfig "${chalk.yellow(pkgName)} > ${chalk.yellowBright(cfgName)}" has "${chalk.cyanBright(reason)}" rules:`));
	console.log(chalk.blueBright('Matching files:'), files);

	const output = found.map(([ruleName, data]) => formatTree([
		chalk.redBright(ruleName),
		chalk.yellowBright('value: ' + JSON.stringify(data)),
		chalk.gray(`docs: ${getRuleUrl(ruleName)}`),
	])); // `    ${chalk.redBright(ruleName)} [ ${chalk.yellowBright(JSON.stringify(data))} ] ${chalk.gray(`(docs: ${getRuleUrl(ruleName)})`)}`).join('\n');

	console.log(output.join('\n\n'), '\n');
}

const analyzedConfigs = new Set<string>();
Object.entries(configs).forEach(([name, cfg]) =>
{
	console.log(chalk.cyanBright(`Starting analysis of configuration "${name}"...`));

	cfg.forEach((c) =>
	{
		if (c.name)
		{
			if (analyzedConfigs.has(c.name))
			{
				console.log(chalk.redBright(`Skipping already analyzed configuration "${c.name}"...`));
				return;
			}
			analyzedConfigs.add(c.name);
		}

		const n = c.name ?? chalk.gray('(anonymous)');

		if (c.rules === undefined)
		{
			// console.warn(chalk.yellowBright(`Config "${name}" has no defined rules for extended config "${n}". Skipping...`));
			return;
		}

		([
			[rules.eslint.deprecated, 'eslint deprecated'],
			[rules.eslint.removed, 'eslint removed'],
			[rules.legacyFormatter, 'legacy formatter'],
			[rules.tseslint.deprecated, 'tseslint deprecated'],
			[rules.tseslint.superseded, 'tseslint superseded'],
		] as const)
			.forEach(([list, reason]) => rulesChecker(name, n, c.rules!, list, reason, c.files));
	});
});
