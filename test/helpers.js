import fs from 'fs';
import postcss from 'postcss';
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
