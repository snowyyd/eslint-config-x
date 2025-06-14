import stylistic from '@stylistic/eslint-plugin';
import cfg from '../eslint.config.mjs';

const deprecatedFormattingRules = Object.keys(stylistic.configs['disable-legacy'].rules ?? {});

cfg.forEach((x) =>
{
	const elements = Object.keys(x.rules ?? {}).filter((r) => deprecatedFormattingRules.includes(r));
	if (elements.length > 0) console.log(`Deprecated formatting rules from: ${x.name}`, elements);
});
