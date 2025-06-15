# eslint-config-x


**eslint-config-x** is a modern, modular ESLint configuration inspired by the widely-used [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), rewritten entirely using [FlatConfig](https://eslint.org/docs/latest/use/configure/configuration-files) — the new configuration format introduced in ESLint v9.  
This package offers optional TypeScript support, a handful of well curated extra configurations, as well as a personal config.


## ✨ Why use this?
- 📦 **FlatConfig ready** — designed for ESLint v9+
- 🧼 **Airbnb base rules** — familiar, community-tested style
- ✨ **Airbnb-style, modernized** — no more deprecated rules
- 🧠 **Optional TypeScript support** — no assumptions about your stack
- 🧩 **Use only what you need** — configurations are exported individually and can be composed freely
- 🚧 **Includes my very personal config** — for advanced tinkering (not for public use)


> [!IMPORTANT]
> #### Looking for a more faithful Airbnb FlatConfig conversion?
> If you landed here expecting a closer 1:1 conversion of the original `eslint-config-airbnb-base` (including legacy or deprecated rules), this config may not be what you're looking for — it makes modernizing decisions and drops outdated patterns.
>
> Instead, check out these alternatives:
>
> - https://github.com/claabs/eslint-config-airbnb-typescript-x
> - https://github.com/Kenneth-Sills/eslint-config-airbnb-typescript
> - The `v1` branch of this repository is based on the @claabs's implementation (this repository was a fork).


## 🚀 Quick Start

> [!TIP]
> Please verify that your package manager correctly installs the “peerDependencies”.

1. First, install eslint if it's not yet installed (locally or globally).
```bash
npm install -save-dev eslint
```

2. Then, install the package as a development dependency.
```bash
npm install --save-dev @snowyyd/eslint-config
```

3. You are done with the installation. Now proceed to create a configuration file, you can check a nice example [here](eslint.config.mjs).


## 🍉 Exported presets
Each preset is conveniently exported in a “configs” object, as well as part of the default export.
```typescript
import { configs } from '@snowyyd/eslint-config';
import configX from '@snowyyd/eslint-config'; // access configs on configsX.configs
```

The list of presets includes:
- `recommended`: The main preset for this project. It includes all the Airbnb rules, as well as the recommended eslint, typescript-eslint, recommended typed linting and stylistic presets.
- `esm`: Extra rules for ESM projects.
- `airbnb`: Airbnb configuration exported for convenience, without any additions (only with updated rules).
- `airbnbTs`: The Airbnb configuration with fully TypeScript support.
- `personal`: My personal rules that I usually apply over the Airbnb ones.
- `typescript`: The recommended typescript-eslint rules (with typed linting and stylistic type linting).

The `recommended` preset extends the rules in the following order: `airbnbTs > eslint-recommended > typescript > personal`.  
TypeScript rules are only used in compatible files, so this configuration is perfectly safe for JavaScript projects.

In the `recommended` preset my personal rules takes precedence over the recommended ones. Likewise, those rules take priority over the Airbnb ones. This means that Airbnb settings serve as a base, the recommended settings build on top of them, and finally my personal preferences are applied last.


## 📝 Changelog

Read the [commits](../../commits) for a comprehensive list of changes.

## 👍 Acknowledgements

- [Airbnb](https://github.com/airbnb) - Base [config](https://github.com/airbnb/javascript).
- [Matt Turnbull](https://github.com/iamturns) - Base [Airbnb TS](https://github.com/iamturns/eslint-config-airbnb-typescript).
- [Charlie Laabs](https://github.com/claabs) - Airbnb TS [fork](https://github.com/claabs/eslint-config-airbnb-typescript-x).

## 📜 License

Licensed under [MIT License](LICENSE).
