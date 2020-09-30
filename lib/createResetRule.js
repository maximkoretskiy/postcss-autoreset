const postcss = require("postcss");
const jsToCss = require("postcss-js/parser");
const Input = require("postcss/lib/input");

const source = {
  input: new Input("", { from: "postcss-autoreset" }),
  start: { line: 1, column: 1 },
  end: { line: 1, column: 1 },
};

function createResetRule(selectors, reset) {
  const selector = selectors.map((s) => s.trim()).join(",\n");
  const resetRule = postcss.rule({
    selector,
    source,
    raws: { between: " " },
  });
  const root = jsToCss(reset);
  root.each((node) => {
    node.source = resetRule.source;
  });
  resetRule.append(root);
  return resetRule;
}

module.exports = createResetRule;
