import tseslint from 'typescript-eslint';
import airbnbBase from './airbnb-base.ts';
import esm from './esm.ts';
import personal from './personal.ts';
import recommended from './recommended.ts';
import typescript from './typescript.ts';

export const configs = {
	recommended: recommended(tseslint.plugin, tseslint.parser),
	esm: esm(tseslint.plugin, tseslint.parser),
	airbnb: airbnbBase(tseslint.plugin, tseslint.parser),
	personal: personal(tseslint.plugin, tseslint.parser),
	typescript: typescript(tseslint.plugin, tseslint.parser),
};

export default {
	configs,
};
