# eslint-config-x

An [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.  
Based on [Airbnb](https://github.com/airbnb/javascript), and [Airbnb TypeScript](https://github.com/claabs/eslint-config-airbnb-typescript-x).

> [!IMPORTANT]
> This configuration is not intended to be "stable" or for "public use", especially since my JavaScript standards are not widely used (e.g., brace style).  
> There are still changes I need to make to properly migrate my [old config](https://github.com/n0bodysec/eslint-config-n0bodysec) to ESLint v9.
>
> If for some reason you came to this repository looking for an implementation more faithful to Airbnb standards, I recommend one of the following alternatives:
> 1. https://github.com/claabs/eslint-config-airbnb-typescript-x
> 2. https://github.com/Kenneth-Sills/eslint-config-airbnb-typescript

## 🚀 Usage

```shell
npm install --save-dev typescript-eslint
npm install --save-dev @snowyyd/eslint-config
```

## ⚙️ Example Config

### 🥝 TypeScript only
```ts
// eslint.config.mjs

import configX from '@snowyyd/eslint-config/base';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	...configX,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		ignores: ['node_modules', 'dist'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
```

### 🍉 Mixed (JS and TS)
```ts
// eslint.config.mjs

import configX from '@snowyyd/eslint-config-x/base';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	...configX,
	{
		ignores: ['node_modules', 'dist'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		extends: [
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
	},
);
```

## 📝 Changelog

Read the [commits](../../commits) for a comprehensive list of changes.

## 👍 Acknowledgements

- [Airbnb](https://github.com/airbnb) - Base [config](https://github.com/airbnb/javascript).
- [Matt Turnbull](https://github.com/iamturns) - Base [Airbnb TS](https://github.com/iamturns/eslint-config-airbnb-typescript).
- [Charlie Laabs](https://github.com/claabs) - Airbnb TS [fork](https://github.com/claabs/eslint-config-airbnb-typescript-x).

## 📜 License

Licensed under [MIT License](LICENSE).
