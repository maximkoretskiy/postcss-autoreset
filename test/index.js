import fs from 'fs';
import test from 'tape';
import postcss from 'postcss';
import plugin from '../src';
import postcssJs from 'postcss-js';

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
function makeCompareJsFn(t) {
  const autoresetJs = postcssJs.sync([plugin]);
  return (input, output) => {
    t.deepEqual(autoresetJs(input), output);
  };
}

test('postcss-autoreset', (t)=> {
  const compare = makeCompareFn(t);

  compare(
    f('filter-bem'),
    f('filter-bem.expected')
    );
  compare(
    f('filter-custom'),
    f('filter-custom.expected'),
    {rulesMatcher: (rule)=> rule.selector.match(/jon\-hopkins/)}
    );
  compare(
    f('filter-suit'),
    f('filter-suit.expected'),
    {rulesMatcher: 'suit'}
    );
  compare(
    f('reset-size'),
    f('reset-size.expected'),
    {reset: 'sizes'});
  compare(
    f('reset-custom'),
    f('reset-custom.expected'),
    {reset: {
      marginLeft: '100%',
      transform: 'rotate(90deg)'
    }});


  t.end();
});
