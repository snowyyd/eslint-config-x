import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/es6',
	languageOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		globals: {
			...globals.es2015,
		},
		parserOptions: {
			ecmaFeatures: {
				generators: false,
				objectLiteralDuplicateProperties: false,
			},
		},
	},
	rules: {
		// TODO: enable requireReturnForObjectLiteral?
		'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
		'@stylistic/arrow-parens': ['error', 'always'],
		'@stylistic/arrow-spacing': ['error', { before: true, after: true }],
		'constructor-super': 'error',
		'@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
		'no-class-assign': 'error',
		'@stylistic/no-confusing-arrow': ['error', { allowParens: true }],
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'off', // ! import-x/no-duplicates
		'no-new-native-nonconstructor': 'error',
		'no-restricted-exports': ['error', {
			restrictedNamedExports: [
				'default', // use `export default` to provide a default export
				'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
			],
		}],
		'no-restricted-imports': ['off', { paths: [], patterns: [] }],
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],
		'no-var': 'error',
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
			avoidQuotes: true,
		}],
		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: true,
		}],
		'prefer-destructuring': ['error', {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: false,
			},
		}, { enforceForRenamedProperties: false }],
		'prefer-numeric-literals': 'error',
		// 'prefer-reflect': 'off',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'@stylistic/rest-spread-spacing': ['error', 'never'],
		'sort-imports': ['off', {
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],
		'symbol-description': 'error',
		'@stylistic/template-curly-spacing': 'error',
		'@stylistic/yield-star-spacing': ['error', 'after'],
	},
} satisfies FlatConfig.Config;
