const postcss = require("postcss");
const getRulesMatcher = require("./rulesMatcher");
const getReset = require("./resetRules");
const createResetRule = require("./createResetRule");

function contains(array, item) {
  return array.indexOf(item) !== -1;
}

module.exports = postcss.plugin("postcss-autoreset", (opts = {}) => {
  opts.rulesMatcher = opts.rulesMatcher || "bem";
  opts.reset = opts.reset || "initial";
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const reset = getReset(opts.reset);
  return (css) => {
    const matchedSelectors = [];
    css.walkRules((rule) => {
      const { selector } = rule;
      if (/^(-(webkit|moz|ms|o)-)?keyframes$/.test(rule.parent.name)) {
        return;
      }
      if (!contains(matchedSelectors, selector) && rulesMatcher(rule)) {
        matchedSelectors.push(selector);
      }
    });
    if (!matchedSelectors.length) {
      return;
    }
    css.prepend(createResetRule(matchedSelectors, reset));
  };
});
