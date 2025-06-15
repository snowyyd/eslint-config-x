import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/best-practices',

	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': ['error', { allowImplicit: true }],
		'block-scoped-var': 'error',
		complexity: ['off', 20],
		'class-methods-use-this': ['error', { exceptMethods: [] }],
		'consistent-return': 'error',
		curly: ['error', 'multi-line'],
		'default-case': ['error', { commentPattern: '^no default$' }],
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': ['error', { allowKeywords: true }],
		'@stylistic/dot-location': ['error', 'property'],
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': ['error', 1],
		'no-alert': 'warn', // TODO: enable, semver-major
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-constructor-return': 'error',
		'no-div-regex': 'off',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			],
		}],
		'no-empty-pattern': 'error',
		'no-empty-static-block': 'off', // TODO: semver-major, enable
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'@stylistic/no-floating-decimal': 'error',
		'no-global-assign': ['error', { exceptions: [] }],
		// 'no-native-reassign': 'off',
		'no-implicit-coercion': ['off', {
			boolean: false,
			number: true,
			string: true,
			allow: [],
		}],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['off', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],
		'@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: false }],
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-object-constructor': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'acc', // for reduce accumulators
				'accumulator', // for reduce accumulators
				'e', // for e.returnvalue
				'ctx', // for Koa routing
				'context', // for Koa routing
				'req', // for Express requests
				'request', // for Express requests
				'res', // for Express responses
				'response', // for Express responses
				'$scope', // for Angular 1 scopes
				'staticContext', // for ReactRouter context
			],
		}],
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': ['error', { props: true }],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],
		'no-unused-labels': 'error',
		'no-useless-call': 'off',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
		'no-with': 'error',
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
		'prefer-named-capture-group': 'off',
		'prefer-object-has-own': 'off', // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
		'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
		radix: 'error',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'vars-on-top': 'error',
		'@stylistic/wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
		yoda: 'error',
	},
} satisfies FlatConfig.Config;
