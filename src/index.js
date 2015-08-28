import postcss from 'postcss';
import getRulesMatcher from './rulesMatcher';
import getResetRules from './resetRules';

export default postcss.plugin('postcss-autoreset', (opts = {})=> {
  opts.rulesMatcher = opts.rulesMatcher ||  'bem';
  opts.reset = opts.reset || 'initial';
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const resetRules = getResetRules(opts.reset);
  return (css) => {
    css.walkRules((rule)=> {
      if ( !rulesMatcher(rule) ) return;
      for (const prop in resetRules) {
        if (!resetRules.hasOwnProperty(prop)) continue;
        rule.prepend({prop, value: resetRules[prop]});
      }
    });
  };
});
