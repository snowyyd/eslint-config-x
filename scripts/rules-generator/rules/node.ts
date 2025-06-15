import { constants } from '../../../src/utils/constants.ts';
import type { ConfigTemplate } from '../types.ts';

export default {
	name: constants.airbnbBaseName + 'node',
	rules: [
		{
			name: 'callback-return',
			entry: 'off',
		},
		{
			name: 'global-require',
			entry: 'error',
		},
		{
			name: 'handle-callback-err',
			entry: 'off',
		},
		{
			name: 'no-buffer-constructor',
			entry: 'error',
		},
		{
			name: 'no-mixed-requires',
			entry: ['off', false],
		},
		{
			name: 'no-new-require',
			entry: 'error',
		},
		{
			name: 'no-path-concat',
			entry: 'error',
		},
		{
			name: 'no-process-env',
			entry: 'off',
		},
		{
			name: 'no-process-exit',
			entry: 'off',
		},
		{
			name: 'no-restricted-modules',
			entry: 'off',
		},
		{
			name: 'no-sync',
			entry: 'off',
		},
	],
} satisfies ConfigTemplate;
