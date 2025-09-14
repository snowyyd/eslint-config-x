import tseslint from 'typescript-eslint';
import airbnbBase from './airbnb-base.ts';
import airbnbTs from './airbnb-ts.ts';
import esm from './esm.ts';
import personal from './personal.ts';
import recommended from './recommended.ts';
import type { CompatibleConfigArray } from './types.ts';
import typescript from './typescript.ts';

export const configs = {
	recommended: recommended(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
	esm: esm(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
	airbnb: airbnbBase(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
	airbnbTs: airbnbTs(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
	personal: personal(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
	typescript: typescript(tseslint.plugin, tseslint.parser) as CompatibleConfigArray,
};

export default {
	configs,
};
