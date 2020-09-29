import fs from 'fs';
import postcss from 'postcss';
import assert from 'assert';
import plugin from '../src';

export function read(name) {
  const fullName = './test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8').trim();
}

export function process(fileName, opts) {
  const input = read(fileName);
  const output = postcss()
    .use(plugin(opts))
    .process(input);
  return output;
}

export function match(name, opts) {
  return assert.equal(
    process(
      name,
      opts).css,
    read(name + '.expected')
  );
}
