const fs = require("fs");
const postcss = require("postcss");
const assert = require("assert");
const plugin = require("..");

function read(name) {
  const fullName = "./test/fixtures/" + name + ".css";
  return fs.readFileSync(fullName, "utf8").trim();
}

function process(fileName, opts) {
  const input = read(fileName);
  const output = postcss().use(plugin(opts)).process(input);
  return output;
}

function match(name, opts) {
  return assert.equal(process(name, opts).css, read(name + ".expected"));
}

module.exports = { process, match, read };
