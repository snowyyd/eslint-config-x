const pluginImport = require('eslint-plugin-import-x');
const stylistic = require('@stylistic/eslint-plugin');

const deprecatedFormattingRules = Object.keys(stylistic.configs['disable-legacy']);

const replacePluginName = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      let newKey = key;
      // Replace deprecated formatting rules with stylistic.
      if (deprecatedFormattingRules.includes(key)) {
        const ruleName = key.split('/').at(-1);
        newKey = `@stylistic/${ruleName}`;
      }
      // Replace import rules with import-x
      newKey = newKey.replace('import/', 'import-x/');
      return [newKey, value];
    }),
  );

const importXPlugin = pluginImport.flatConfigs.recommended.plugins['import-x'];

const convertConfigs = (configs) => {
  const newConfigs = configs.map((config) => {
    let newConfig = config;
    if ('plugins' in config && 'import' in config.plugins) {
      newConfig = Object.assign(newConfig, { plugins: { 'import-x': importXPlugin } });
      delete newConfig.plugins.import;
    }
    if ('settings' in config) {
      newConfig = Object.assign(newConfig, { settings: replacePluginName(config.settings) });
    }
    if ('rules' in config) {
      newConfig = Object.assign(newConfig, { rules: replacePluginName(config.rules) });
    }
    return config;
  });
  return newConfigs;
};

module.exports = { convertConfigs };
