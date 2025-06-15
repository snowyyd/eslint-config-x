import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import _ from 'lodash';

export function mergeRulesStrictly(arr: FlatConfig.Config['rules'][])
{
	return _.mergeWith(
		{},
		...arr,
		(objValue: unknown, srcValue: unknown, key: PropertyKey) =>
		{
			if (objValue !== undefined) throw new Error(`duplicate rule key detected: "${String(key)}"`);
		},
	) as FlatConfig.Config['rules'];
}

export function getRuleUrl(ruleName: string)
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

export function formatTree(items: string[])
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
