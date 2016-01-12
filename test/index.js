import test from 'ava';
import fs from 'fs';
import postcss from 'postcss';
import 'babel-register';
import plugin from '../src';

function read(name) {
  const fullName = './fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8').trim();
}

function process(fileName, opts) {
  const input = read(fileName);
  const output = postcss()
    .use(plugin(opts))
    .process(input);
  return output;
}

test('Works fine with bem rules matcher(default)', t => {
  t.same(
    process('filter-bem').css,
    read('filter-bem.expected')
  );
});

test('Works fine with suit rules matcher', t => {
  t.same(
    process(
      'filter-suit',
      {rulesMatcher: 'suit'}
    ).css,
    read('filter-suit.expected')
  );
});

test('Works fine with custom rules matcher', t => {
  t.same(
    process(
      'filter-custom',
      {rulesMatcher: (rule)=> rule.selector.match(/jon\-hopkins/)}
    ).css,
    read('filter-custom.expected')
  );
});


test('Sizes reset is available', t => {
  t.same(
    process(
      'reset-size',
      {reset: 'sizes'}
    ).css,
    read('reset-size.expected')
  );
});

test('Custom reset is available and uses css2js notation', t => {
  t.same(
    process(
      'reset-custom',
      {reset: {
        marginLeft: '100%',
        transform: 'rotate(90deg)'
      }}
    ).css,
    read('reset-custom.expected')
  );
});
