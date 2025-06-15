import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import chalk from 'chalk';
import { configs } from '../src/index.ts';
import { formatTree, getRuleUrl } from './utils/functions.ts';
import { rules } from './utils/rules.ts';

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
	]));

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
