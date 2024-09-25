const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./lib/shared');
const personal = require('./lib/personal');
const { convertConfigs } = require('./lib/convert-configs');

const compat = new FlatCompat();

const config = convertConfigs([...compat.extends('eslint-config-airbnb-base'), ...shared, ...personal]);

module.exports = config;
