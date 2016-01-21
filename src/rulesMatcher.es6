const matchers = {
  bem({selector}) {
    return !selector.match(/(--|:)/);
  },

  suit({selector}) {
    return !(selector.match(/(--|:)/) || selector.match(/\.is\-/i));
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
