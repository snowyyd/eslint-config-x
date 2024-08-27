const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./lib/shared');
const { convertConfigToImportX } = require('./lib/convert-import');

const compat = new FlatCompat();

const config = convertConfigToImportX([...compat.extends('eslint-config-airbnb-base'), ...shared]);

module.exports = config;
