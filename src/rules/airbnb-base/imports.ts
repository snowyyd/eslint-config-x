import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importX from 'eslint-plugin-import-x';
import globals from 'globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/imports',

	languageOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		globals: {
			...globals.es2015,
		},
	},

	plugins: {
		'import-x': importX,
	},

	settings: {
		'import-x/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json'],
			},
		},

		'import-x/extensions': [
			'.js',
			'.mjs',
			'.jsx',
		],

		'import-x/core-modules': [],

		'import-x/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$',
		],
	},

	rules: {
		'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
		'import-x/named': 'error',
		'import-x/default': 'off',
		'import-x/namespace': 'off',
		'import-x/export': 'error',
		'import-x/no-named-as-default': 'error',
		'import-x/no-named-as-default-member': 'error',
		'import-x/no-deprecated': 'off',
		'import-x/no-extraneous-dependencies': ['error', {
			devDependencies: [
				'test/**', // tape, common npm pattern
				'tests/**', // also common npm pattern
				'spec/**', // mocha, rspec-like pattern
				'**/__tests__/**', // jest pattern
				'**/__mocks__/**', // jest pattern
				'test.{js,jsx}', // repos with a single test file
				'test-*.{js,jsx}', // repos with multiple top-level test files
				'**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
				'**/jest.config.js', // jest config
				'**/jest.setup.js', // jest setup
				'**/vue.config.js', // vue-cli config
				'**/webpack.config.js', // webpack config
				'**/webpack.config.*.js', // webpack config
				'**/rollup.config.js', // rollup config
				'**/rollup.config.*.js', // rollup config
				'**/gulpfile.js', // gulp config
				'**/gulpfile.*.js', // gulp config
				'**/Gruntfile{,.js}', // grunt config
				'**/protractor.conf.js', // protractor config
				'**/protractor.conf.*.js', // protractor config
				'**/karma.conf.js', // karma config
				'**/.eslintrc.js', // eslint config
			],
			optionalDependencies: false,
		}],
		'import-x/no-mutable-exports': 'error',
		'import-x/no-commonjs': 'off',
		'import-x/no-amd': 'error',
		'import-x/no-nodejs-modules': 'off', // TODO: enable?
		'import-x/first': 'error',
		// 'import-x/imports-first': 'off', // ! import-x/first
		'import-x/no-duplicates': 'error',
		// 'import-x/no-namespace': 'off', // TODO: enable?
		'import-x/extensions': ['error', 'ignorePackages', {
			js: 'never',
			mjs: 'never',
			jsx: 'never',
		}],
		// TODO: enforce a stricter convention in module import order?
		'import-x/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
		'import-x/newline-after-import': 'error',
		'import-x/prefer-default-export': 'error',
		'import-x/no-restricted-paths': 'off',
		'import-x/max-dependencies': ['off', { max: 10 }],
		'import-x/no-absolute-path': 'error',
		'import-x/no-dynamic-require': 'error',
		'import-x/no-internal-modules': ['off', {
			allow: [],
		}],
		'import-x/unambiguous': 'off', // this should not be enabled until this proposal has at least been *presented* to TC39
		'import-x/no-webpack-loader-syntax': 'error',
		'import-x/no-unassigned-import': 'off', // importing for side effects is perfectly acceptable, if you need side effects
		'import-x/no-named-default': 'error',
		'import-x/no-anonymous-default-export': ['off', {
			allowArray: false,
			allowArrowFunction: false,
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowLiteral: false,
			allowObject: false,
		}],
		'import-x/exports-last': 'off', // TODO: enable?
		'import-x/group-exports': 'off',
		'import-x/no-default-export': 'off',
		'import-x/no-named-export': 'off',
		'import-x/no-self-import': 'error',
		'import-x/no-cycle': ['error', { maxDepth: '∞' }],
		'import-x/no-useless-path-segments': ['error', { commonjs: true }],
		'import-x/dynamic-import-chunkname': ['off', {
			importFunctions: [],
			webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
		}],
		'import-x/no-relative-parent-imports': 'off',
		'import-x/no-unused-modules': ['off', { // TODO: enable once it supports CJS
			ignoreExports: [],
			missingExports: true,
			unusedExports: true,
		}],
		'import-x/no-import-module-exports': ['error', {
			exceptions: [],
		}],
		'import-x/no-relative-packages': 'error',
		'import-x/consistent-type-specifier-style': ['off', 'prefer-inline'], // TODO, semver-major: enable (just in case)
		'import-x/no-empty-named-blocks': 'off', // TODO, semver-minor: enable
	},
} satisfies FlatConfig.Config;
