const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');

module.exports = [
	{
		rules: {
			// extensions are mandatory in ESM
			'import/extensions': ['error', 'ignorePackages'],

			// __dirname & __filename cannot be used in ESM
			'no-restricted-globals': [
				...baseVariablesRules['no-restricted-globals'],
				{
					name: '__dirname',
					message: 'This CommonJS variable is not available in ES modules. Use `import.meta.dirname` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
				{
					name: '__filename',
					message: 'This CommonJS variable is not available in ES modules. Use `import.meta.filename` instead. https://nodejs.org/api/esm.html#no-__filename-or-__dirname',
				},
			]
		}
	},
];
