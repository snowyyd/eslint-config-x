import tseslint from 'typescript-eslint';
import airbnbBase from './airbnb-base.ts';
import base from './base.ts';
import esm from './esm.ts';

export const configs = {
	base: base(tseslint.plugin, tseslint.parser),
	esm: esm(tseslint.plugin, tseslint.parser),
	airbnb: airbnbBase(tseslint.plugin, tseslint.parser),
};

export default {
	configs,
};
