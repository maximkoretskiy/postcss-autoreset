import postcss from 'postcss';

export default postcss.plugin('postcss-autoreset', ()=> {
  return (css) => {
    css.walkRules( (rule)=> {
      const firstNode = rule.nodes[0];
      if (firstNode) {
        firstNode.cloneAfter({prop: 'all', value: 'unset'});
      }else {
        rule.nodes.push(
          postcss.decl({prop: 'all', value: 'unset'})
        );
      }
    });
  };
});
