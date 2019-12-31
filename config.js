'use strict';
const fs = require('fs');
const pkg = require('./package');
const extend = require('extend');
const resolve = require('resolve');

const root = process.cwd();
const { CONFIG_DIR = 'config', NODE_ENV = 'development' } = process.env;

const load = name => {
  var filename;
  try {
    filename = resolve.sync(name, {
      basedir: root,
      moduleDirectory: CONFIG_DIR,
      extensions: ['.js', '.json', '.yaml', '.yml'],
    });
  } catch (e) { }
  if (!filename) return {};
  if (/\.ya?ml$/.test(filename)) {
    const data = fs.readFileSync(filename, 'utf8')
    return require('js-yaml').safeLoad(data);
  }
  return require(filename);
};

const config = defaults => {
  return extend(true,
    defaults,
    pkg,
    load('default'),
    load(NODE_ENV),
    load('local'),
  );
};

module.exports = config;
