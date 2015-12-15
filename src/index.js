import postcss from 'postcss';
import getRulesMatcher from './rulesMatcher';
import getResetRules from './resetRules';
import createRuleInjector from './rulesInjectorFabric';


export default postcss.plugin('postcss-autoreset', (opts = {})=> {
  opts.rulesMatcher = opts.rulesMatcher || 'bem';
  opts.reset = opts.reset || 'initial';
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const resetRules = getResetRules(opts.reset);
  const injectRule = createRuleInjector(resetRules);
  return (css) => {
    css.walkRules((rule)=> {
      if ( !rulesMatcher(rule) ) {
        return;
      }
      injectRule(rule);
    });
  };
});
