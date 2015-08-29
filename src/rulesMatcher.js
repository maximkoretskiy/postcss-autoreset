
const matchers = {
  bem(rule) {
    return !rule.selector.match(/--/);
  },

  suit(rule) {
    const selector = rule.selector;
    return !(selector.match(/--/) || selector.match(/\.is\-/i));
  }
};

function getRulesMatcher(value = 'bem') {
  if (typeof value === 'function') {
    return value;
  }

  switch (value) {
    case 'suit':
      return matchers.suit;
    case 'bem':
    default:
      return matchers.bem;
  }
}

export default getRulesMatcher;
