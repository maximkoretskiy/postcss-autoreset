import fs from 'fs';
import test from 'tape';
import postcss from 'postcss';
import plugin from '../src';

function f(name) {
  const fullName = 'test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8').trim();
}

function makeCompareFn(t) {
  return (input, output, opts = {}) => {
    const css = postcss()
      .use(plugin(opts))
      .process(input).css;
    t.equal(css, output);
  };
}

test('postcss-autoreset', (t)=> {
  const compare = makeCompareFn(t);

  compare(
    f('bem'),
    f('bem.expected')
    );
  t.end();
});
