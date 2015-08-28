const resetSizes = {
  margin: '0',
  padding: '0',
  border: '0',
  'font-size': '100%',
  font: 'inherit',
  'vertical-align': 'baseline',
};

function getResetRules(name = 'initial') {
  switch (name) {
  case 'sizes':
    return resetSizes;
  case 'initial':
  default:
    return {all: 'initial'};
  }
}

export default getResetRules;
