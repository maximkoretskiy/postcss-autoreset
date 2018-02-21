import postcss from 'postcss';
import getRulesMatcher from './rulesMatcher';
import getReset from './resetRules';
import createResetRule from './createResetRule';

const contains = (array, item) => array.indexOf(item) !== -1;

export default postcss.plugin('postcss-autoreset', (opts = {})=> {
  opts.rulesMatcher = opts.rulesMatcher || 'bem';
  opts.reset = opts.reset || 'initial';
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const reset = getReset(opts.reset);
  return (css) => {
    const matchedSelectors = [];
    css.walkRules((rule)=> {
      const {selector} = rule;
      if (/^(-(webkit|moz|ms|o)-)?keyframes$/.test(rule.parent.name)) return;
      if (!contains(matchedSelectors, selector) && rulesMatcher(rule)) {
        matchedSelectors.push(selector);
      }
    });
    if (!matchedSelectors.length) return;
    css.prepend(
      createResetRule(matchedSelectors, reset)
    );
  };
});
