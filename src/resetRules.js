const resetSizes = {
  margin: '0',
  padding: '0',
  border: '0',
  'font-size': '100%',
  font: 'inherit',
  'vertical-align': 'baseline',
};

function isObject(variable) {
  return variable !== null && typeof variable === 'object';
}

function getResetRules(value = 'initial') {
  if (isObject(value)) {
    return value;
  }
  switch (value) {
  case 'sizes':
    return resetSizes;
  case 'initial':
  default:
    return {all: 'initial'};
  }
}

export default getResetRules;
