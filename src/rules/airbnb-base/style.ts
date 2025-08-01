import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export default {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/style',
	rules: {
		// TODO: enable? semver-major
		'@stylistic/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }
		// TODO: enable? semver-major
		'@stylistic/array-element-newline': ['off', { multiline: true, minItems: 3 }],
		'@stylistic/array-bracket-spacing': ['error', 'never'],
		'@stylistic/block-spacing': ['error', 'always'],
		'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
		'capitalized-comments': ['off', 'never', {
			line: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
			block: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
		}],
		'@stylistic/comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],
		'@stylistic/comma-spacing': ['error', { before: false, after: true }],
		'@stylistic/comma-style': ['error', 'last', {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		}],
		'@stylistic/computed-property-spacing': ['error', 'never'],
		'consistent-this': 'off',
		'@stylistic/eol-last': ['error', 'always'],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/function-call-spacing': ['error', 'never'],
		'func-name-matching': ['off', 'always', {
			includeCommonJSModuleExports: false,
			considerPropertyDescriptor: true,
		}],
		'func-names': 'warn',
		'func-style': ['off', 'expression'], // TODO: enable
		'@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
		'@stylistic/indent': ['error', 2, {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
			ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
			ignoreComments: false,
		}],
		'@stylistic/jsx-quotes': ['off', 'prefer-double'],
		'@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'@stylistic/keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		}],
		'@stylistic/line-comment-position': ['off', { // TODO: enable?
			position: 'above',
			ignorePattern: '',
			applyDefaultPatterns: true,
		}],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
		'@stylistic/lines-around-comment': 'off',
		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'directive' },
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
		],
		'logical-assignment-operators': ['off', 'always', { // TODO, semver-major: enable
			enforceForIfStatements: true,
		}],
		'max-depth': ['off', 4],
		'@stylistic/max-len': ['error', 100, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
		'max-lines': ['off', {
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		}],
		'max-lines-per-function': ['off', {
			max: 50,
			skipBlankLines: true,
			skipComments: true,
			IIFEs: true,
		}],
		'max-nested-callbacks': 'off',
		'max-params': ['off', 3],
		'max-statements': ['off', 10],
		'@stylistic/max-statements-per-line': ['off', { max: 1 }],
		'@stylistic/multiline-comment-style': ['off', 'starred-block'],
		'@stylistic/multiline-ternary': ['off', 'never'], // TODO: enable?
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],
		'@stylistic/new-parens': 'error',
		// 'newline-after-var': 'off',
		// 'newline-before-return': 'off',
		'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'@stylistic/no-mixed-operators': ['error', {
			// the list of arithmetic groups disallows mixing `%` and `**`
			// with other arithmetic operators.
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['/', '*'],
				['&', '|', '<<', '>>', '>>>'],
				['==', '!=', '===', '!=='],
				['&&', '||'],
			],
			allowSamePrecedence: false,
		}],
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': ['error'],
		'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		// 'no-new-object': 'error', // ! no-object-constructor in best-practices.ts
		'no-plusplus': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		// 'no-spaced-func': 'off',
		'@stylistic/no-tabs': 'error',
		'no-ternary': 'off',
		'@stylistic/no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],
		'no-underscore-dangle': ['error', {
			allow: [],
			allowAfterThis: false,
			allowAfterSuper: false,
			enforceInMethodNames: true,
		}],
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],
		'@stylistic/no-whitespace-before-property': 'error',
		'@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/object-curly-newline': ['error', {
			ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
			ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
			ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
			ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
		}],
		'@stylistic/object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: true,
		}],
		'one-var': ['error', 'never'],
		'@stylistic/one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
		'@stylistic/padded-blocks': ['error', {
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		}, { allowSingleLineBlocks: true }],
		// 'padding-line-between-statements': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
		'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
		// 'require-jsdoc': 'off',
		'@stylistic/semi': ['error', 'always'],
		'@stylistic/semi-spacing': ['error', { before: false, after: true }],
		'@stylistic/semi-style': ['error', 'last'],
		'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
		'sort-vars': 'off',
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'@stylistic/space-in-parens': ['error', 'never'],
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {
			},
		}],
		'@stylistic/spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
				balanced: true,
			},
		}],
		'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
		'@stylistic/template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'@stylistic/wrap-regex': 'off',
	},
} satisfies FlatConfig.Config;
