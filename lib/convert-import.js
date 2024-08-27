const pluginImport = require('eslint-plugin-import-x');

const renameImportKeys = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) =>
  [key.replace('import/', 'import-x/'), value],
));

// const importXPlugin = pluginImport.flatConfigs.recommended.plugins['import-x'];
const importXPlugin = {
  meta: { name: 'import-x', version: '4.0.0' },
  rules: pluginImport.rules,
};

const convertConfigToImportX = (configs) => {
  const newConfigs = configs.map((config) => {
    let newConfig = config;
    if ('plugins' in config && 'import' in config.plugins) {
      newConfig = Object.assign(newConfig, { plugins: { 'import-x': importXPlugin } });
      delete newConfig.plugins.import;
    }
    if ('settings' in config) {
      newConfig = Object.assign(newConfig, { settings: renameImportKeys(config.settings) });
    }
    if ('rules' in config) {
      newConfig = Object.assign(newConfig, { rules: renameImportKeys(config.rules) });
    }
    return config;
  });
  return newConfigs;
};

module.exports = { convertConfigToImportX };