import jsToCss from 'postcss-js/parser';

function rulesInjectorFabric(obj) {
  const rootProto = jsToCss(obj);
  return (rule) => {
    const root = rootProto.clone();
    root.each( node => node.source = rule.source );
    rule.insertBefore(rule.nodes[0], root);
  };
}

export default rulesInjectorFabric;
