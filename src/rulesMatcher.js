/**
 * Demo - https://regex101.com/r/AA4xaq/3
 */
const suitRegex = /^\.(?:[a-z0-9]*-)?[A-Z](?:[a-zA-Z0-9]+)(?:-[a-zA-Z0-9]+)?$/;

const matchers = {
  bem({ selector }) {
    return !selector.match(/(--|:)/);
  },

  suit({ selector }) {
    return selector.charAt(0) === "." && suitRegex.test(selector);
  },
};

module.exports = function getRulesMatcher(value = "bem") {
  if (typeof value === "function") {
    return value;
  }

  switch (value) {
    case "suit":
      return matchers.suit;
    case "bem":
    default:
      return matchers.bem;
  }
};
