import assert from 'assert';
import {match ,read, process} from './helpers';

describe('postcss-autoreset', ()=>{
  it('does not modify if there if nothing to require', ()=> {
    assert.equal(
      process('empty'),
      read('empty')
    );
  });

  it('works fine with bem rules matcher(default)', ()=> {
    match('filter-bem');
  });

  it('works fine with suit rules matcher', ()=> {
    match('filter-suit', {rulesMatcher: 'suit'});
  });

  it('works fine with custom rules matcher', ()=> {
    match(
      'filter-custom',
      {rulesMatcher: (rule)=> rule.selector.match(/jon\-hopkins/)}
    );
  });

  it('can use custom sizes reset', ()=> {
    match(
      'reset-size',
      {reset: 'sizes'}
    );
  });

  it('can use reset in css2js notation', ()=> {
    const reset = {
      reset: {
        marginLeft: '100%',
        transform: 'rotate(90deg)'
      }
    };
    match(
      'reset-custom',
      reset
    );
  });

  it('works gently with keywords', ()=> {
    match('keyframes');
  });


  it('sets source virtual source for inserted code', ()=>{
    const output = process('filter-bem');
    assert(output.root.first.source);
    assert(output.root.first.source.input.file.match(/postcss\-autoreset/));
  });
});
