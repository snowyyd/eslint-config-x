// https://github.com/typescript-eslint/typescript-eslint/issues/10899
// https://github.dev/typescript-eslint/typescript-eslint/blob/42527dfe3ca7e0e10b306849251db57b92e3e545/packages/typescript-eslint/src/compatibility-types.ts
export type CompatibleConfigArray = CompatibleConfig[];
export interface CompatibleConfig
{
	name?: string;
	rules?: object;
}
