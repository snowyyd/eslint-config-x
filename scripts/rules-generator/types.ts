import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
export interface ConfigTemplate
{
	name: NonNullable<FlatConfig.Config['name']>,
	rules?: {
		name: string,
		entry: FlatConfig.RuleEntry,
		comments?: string | string[],
	}[],
}
