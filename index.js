const { getRulesMatcher, getReset, createResetRule } = require("./lib");

function contains(array, item) {
  return array.indexOf(item) !== -1;
}

module.exports = (opts = {}) => {
  opts.rulesMatcher = opts.rulesMatcher || "bem";
  opts.reset = opts.reset || "initial";
  const rulesMatcher = getRulesMatcher(opts.rulesMatcher);
  const reset = getReset(opts.reset);
  return {
    postcssPlugin: "postcss-autoreset",
    prepare() {
      return {
        OnceExit(root) {
          const matchedSelectors = [];
          root.walkRules(rule => {
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
          root.prepend(createResetRule(matchedSelectors, reset));
        },
      };
    },
  };
};
module.exports.postcss = true;
