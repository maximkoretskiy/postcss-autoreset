import postcss from 'postcss';
import getRulesMatcher from './rulesMatcher';
import getReset from './resetRules';
import createResetRule from './createResetRule';

export default postcss.plugin('postcss-autoreset', (opts = {})=> {
  opts.rulesMatcher = opts.rulesMatcher || 'bem';
  opts.reset = opts.reset || 'initial';
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const reset = getReset(opts.reset);
  return (css) => {
    const matchedSelectors = [];
    css.walkRules((rule)=> {
      if (rulesMatcher(rule)) {
        matchedSelectors.push(rule.selector);
      }
    });
    if (!matchedSelectors.length) return;
    css.prepend(
      createResetRule(matchedSelectors, reset)
    );
  };
});
