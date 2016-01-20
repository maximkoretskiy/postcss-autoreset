import assert from 'assert';
import {read, process} from './helpers';

describe('postcss-autoreset', ()=>{
  it('works fine with bem rules matcher(default)', ()=> {
    assert.equal(
      process('filter-bem').css,
      read('filter-bem.expected')
    );
  });

  it('works fine with suit rules matcher', ()=> {
    assert.equal(
      process(
        'filter-suit',
        {rulesMatcher: 'suit'}).css,
      read('filter-suit.expected')
    );
  });

  it('works fine with custom rules matcher', ()=> {
    assert.equal(
      process(
        'filter-custom',
        {rulesMatcher: (rule)=> rule.selector.match(/jon\-hopkins/)}
      ).css,
      read('filter-custom.expected')
    );
  });

  it('cat use custom sizes reset', ()=> {
    assert.equal(
      process(
        'reset-size',
        {reset: 'sizes'}
      ).css,
      read('reset-size.expected')
    );
  });

  it('can use reset in css2js notation', ()=> {
    assert.equal(
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

  it('sets source virtual source for inserted code', ()=>{
    const output = process('filter-bem');
    assert(output.root.first.source);
    assert(output.root.first.source.input.file.match(/postcss\-autoreset/));
  });
});
