import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/errors',

	rules: {
		'for-direction': 'error',
		'getter-return': ['error', { allowImplicit: true }],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-console': 'warn',
		'no-constant-binary-expression': 'off', // TODO: semver-major, enable
		'no-constant-condition': 'warn',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'@stylistic/no-extra-parens': ['off', 'all', {
			conditionalAssign: true,
			nestedBinaryExpressions: false,
			returnAssign: false,
			ignoreJSX: 'all', // delegate to eslint-plugin-react
			enforceForArrowConditionals: false,
		}],
		'@stylistic/no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',

		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-new-native-nonconstructor': 'off', // TODO: semver-major, enable
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': ['error', {
			ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
		}],
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
		'no-unused-private-class-members': 'off', // TODO: enable once eslint 7 is dropped (which is semver-major)
		'no-useless-backreference': 'error',
		'no-negated-in-lhs': 'off',
		'require-atomic-updates': 'off', // ! note: not enabled because it is very buggy
		'use-isnan': 'error',
		'valid-jsdoc': 'off',
		'valid-typeof': ['error', { requireStringLiterals: true }],
	},
} satisfies FlatConfig.Config;
