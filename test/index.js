const assert = require("assert");
const { match, read, process } = require("./helpers");

describe("postcss-autoreset", function () {
  it("does not modify if there if nothing to require", function () {
    assert.strictEqual(process("empty").css, read("empty"));
  });

  it("works fine with bem rules matcher(default)", function () {
    match("filter-bem");
  });

  it("works fine with suit rules matcher", function () {
    match("filter-suit", { rulesMatcher: "suit" });
  });

  it("works fine with custom rules matcher", function () {
    match("filter-custom", {
      rulesMatcher: (rule) => rule.selector.match(/jon-hopkins/),
    });
  });

  it("can use custom sizes reset", function () {
    match("reset-size", { reset: "sizes" });
  });

  it("can use reset in css2js notation", function () {
    const reset = {
      reset: {
        marginLeft: "100%",
        transform: "rotate(90deg)",
      },
    };
    match("reset-custom", reset);
  });

  it("works gently with keywords", function () {
    match("keyframes");
  });

  it("sets source virtual source for inserted code", function () {
    const output = process("filter-bem");
    assert(output.root.first.source);
    assert(output.root.first.source.input.file.match(/postcss-autoreset/));
  });
});
