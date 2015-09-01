# PostCSS Auto Reset
[![Build Status][ci-img]][ci] [![NPM][npm-img]][npm] [![David DM][david-img]][david]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin for automatic conditional rules reset. Useful for creation of 
bullet-proof styles isolation in your extension. Can be used in combination with
[postcss-initial][initial].


[PostCSS]:    https://github.com/postcss/postcss
[ci-img]:     https://travis-ci.org/maximkoretskiy/postcss-autoreset.svg
[ci]:         https://travis-ci.org/maximkoretskiy/postcss-autoreset
[npm-img]:    https://badge.fury.io/js/postcss-autoreset.svg
[npm]:        https://www.npmjs.com/package/postcss-autoreset
[david-img]:  https://david-dm.org/maximkoretskiy/postcss-autoreset.svg
[david]:      https://david-dm.org/maximkoretskiy/postcss-autoreset
[initial]:    https://github.com/maximkoretskiy/postcss-initial


```css
.block {
  padding: 1em;
}

.block__element {
  margin: 1em;
}

.block--modifier {
  border: 1em;
}

```

```css
.block { /* reseted */
  all: initial;
  padding: 1em;
}

.block__element { /* reseted */
  all: initial;
  margin: 1em;
}

.block--modifier { /* ignored, we don`t need to reset BEM modifiers  */
  border: 1em;
}
```

## Options 

### reset
Set of properties that we use to reset rules.  
Takes `string` or `object`.  
Possible values:
 - 'initial' - `all: initial`;
 - 'sizes' - reset size properties.

Use object to create your own reset.

**Example**
```js
postcss([ require('postcss-autoreset')({
    reset: {
      'margin': '0',
      'padding': '0',
      'border-radius': '0'
    }
  })])
```



### rulesMatcher
Rules filter function.  
Takes `string` or `function`.  
Possible values:
 - 'bem' - reset all BEM blocks and element, ignore modifiers. (naming: `.block__element-modifier`);
 - 'suit' - reset all SUIT CSS components and parts, ignore modifiers and states.

You can define custom rules filter to fit your styles naming.  

**Example**
```js
postcss([ require('postcss-autoreset')({
  rulesMatcher: (rule)=> rule.selector.match(/regexp/)
  })])
```


## Usage

```js
postcss([ require('postcss-autoreset')])
```

See [PostCSS] docs for examples for your environment.
