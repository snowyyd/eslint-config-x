# eslint-config-x

An [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.  
Based on [Airbnb](https://github.com/airbnb/javascript), and [Airbnb TypeScript](https://github.com/claabs/eslint-config-airbnb-typescript-x).

> [!IMPORTANT]
> Due to the partial upgrade to ESLint v9, this config only works for TypeScript at this moment. Sorry about that.

## 🚀 Usage

1. Install dependencies
```shell
npm install --save-dev

# TypeScript Only!
npm install --save-dev eslint-import-resolver-typescript
```

2. Install the package:
```shell
npm install --save-dev https://github.com/n0bodysec/eslint-config-x.git
```

### Example config

```ts
// eslint.config.mjs

import configX from '@n0bodysec/eslint-config-x';
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

## 📝 Changelog

You can read the [commits](../../commits).

## 📜 License

Licensed under [MIT License](LICENSE.md).
