# eslint-config-airbnb-typescript-x

Enhances Airbnb's ESLint config with TypeScript support

> [!IMPORTANT]
>
> ## This is a fork
>
> This project is a fork of eslint-config-airbnb-typescript. It modernizes it and introduces several breaking changes:
>
> - Only flat config (eslint.config.mjs) is supported
> - Minimum ESLint version of `8.57.0`
> - Minimum typescript-eslint version of `7.5.0`
> - Replaces eslint-plugin-import with eslint-plugin-import-x
>
> The benefits are that it supports the latest ESLint ecosystem versions:
>
> - ESLint 9
> - typescript-eslint 8
> - Uses @stylistic rules in preparation for ESLint deprecation of formatting rules

---

## Setup

### 1) Setup regular Airbnb config

Make sure you have the regular Airbnb config setup. If you are using React, use [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), or if you aren't using React, use [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

### 2) Install dependencies (and peer dependencies)

```bash
npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^7.0.0 \
            @typescript-eslint/parser@^7.0.0 \
            --save-dev
```

### 3) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  'airbnb',
+ 'airbnb-typescript'
]
```

If you don't need React support:

```diff
extends: [
  'airbnb-base',
+ 'airbnb-typescript/base'
]
```

### 4) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
{
  extends: ['airbnb', 'airbnb-typescript'],
+ parserOptions: {
+   project: './tsconfig.json'
+ }
}
```

### 5) Run ESLint

Open a terminal to the root of your project, and run the following command:

```
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## FAQ

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include.

A common fix is to create a `tsconfig.eslint.json` file, which extends your `tsconfig.json` file and includes all files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Update your ESLint config file:

```diff
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```

### Why do I need the peer dependencies?

`@typescript-eslint/eslint-plugin` is a peer dependency due to a limitation within ESLint. See [issue](https://github.com/eslint/eslint/issues/3458), [RFC](https://github.com/eslint/rfcs/tree/master/designs/2019-config-simplification), and [progress](https://github.com/eslint/eslint/issues/13481).

`@typescript-eslint/parser` is a peer dependency because the version number must match `@typescript-eslint/eslint-plugin`.

### I wish this config would support [...]

This config simply enhances the Airbnb with TypeScript support. It's not a single config to cater for all TypeScript linting requirements. For additional functionality, alter your ESLint config file. For example:

```js
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked', // @typescript-eslint @v6
    'plugin:@typescript-eslint/stylistic-type-checked', // @typescript-eslint @v6
    // 'plugin:@typescript-eslint/recommended',                          // @typescript-eslint @v5
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',  // @typescript-eslint @v5
  ],
};
```

My personal ESLint config file with support for Jest, Promises, and Prettier can be found in [create-exposed-app](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js).

### Why is `import/no-unresolved` disabled?

Two reasons:

1. It requires additional configuration, which may be different for monorepo's, webpack usage, etc
2. The rule offers little value in a TypeScript world, as the TypeScript compiler will catch these errors

If you would like to enable this rule, then:

- Enable the rule within your config: `'import/no-unresolved': 'error'`
- Install and configure the TypeScript import resolver: [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)

## Additional Documentation

- [CHANGELOG.md](CHANGELOG.md)
- [DEVELOPING.md](DEVELOPING.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [MAINTAINING.md](MAINTAINING.md)

## Credits

Authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

A big thank you to all [contributors](https://github.com/iamturns/eslint-config-airbnb-typescript/graphs/contributors)!

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).
