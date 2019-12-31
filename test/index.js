const path = require('path');
const test = require('./test');
const assert = require('assert');
const { purgeCache } = require('purge-require-cache');

test('default', function () {
  assert.equal(require('..').name, 'config/default');
  purgeCache(require.resolve('..'));
});

test('test', function () {
  process.env.NODE_ENV = 'test';
  assert.equal(require('..').name, 'config/test');
  purgeCache(require.resolve('..'));
  delete process.env.NODE_ENV;
});

test('production', function () {
  process.env.NODE_ENV = 'production';
  assert.equal(require('..').name, 'config/production');
  purgeCache(require.resolve('..'));
  delete process.env.NODE_ENV;
});

test('CONFIG_DIR', function () {
  process.env.NODE_ENV = 'test';
  process.env.CONFIG_DIR = path.join(__dirname, 'config2');
  assert.equal(require('..').name, 'config2/test');
  purgeCache(require.resolve('..'));
  delete process.env.NODE_ENV;
  delete process.env.CONFIG_DIR;
});