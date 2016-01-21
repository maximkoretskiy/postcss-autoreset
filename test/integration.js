var assert = require('assert');
var postcss = require('postcss');
var fs = require('fs');
var plugin = require('..');

function read(name) {
  const fullName = './test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8').trim();
}

function process(fileName, opts) {
  const input = read(fileName);
  const output = postcss()
    .use(plugin(opts))
    .process(input);
  return output;
}

describe('integration', function () {
  it('builds normal CommonJS module than works fine', function () {
    assert.equal(
      process('filter-bem').css,
      read('filter-bem.expected')
    );
  });
});
