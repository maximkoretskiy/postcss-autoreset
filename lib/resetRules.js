const resetSizes = {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
};

function isObject(variable) {
  return variable !== null && typeof variable === "object";
}

module.exports = function getReset(value = "initial") {
  if (isObject(value)) {
    return value;
  }
  switch (value) {
    case "sizes":
      return resetSizes;
    case "initial":
    default:
      return { all: "initial" };
  }
};
