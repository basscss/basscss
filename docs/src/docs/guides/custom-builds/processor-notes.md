# Usage notes for CSS pre/post-processors

## Specification conformance

- Consider removing `rework-plugin-colors`
- Consider using `color()`
- Try using `rework-import` in place of `rework-npm`


## Rework

```js
var fs = require('fs');
var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkCustomMedia = require('rework-custom-media');
var reworkNpm = require('rework-npm');
var reworkVars = require('rework-vars');
var reworkColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

var src = fs.readFileSync('./index.css', 'utf8');

var css = autoprefixer()
  .process(
    rework(src)
      .use(reworkNpm())
      .use(reworkVars())
      .use(reworkCustomMedia())
      .use(reworkCalc)
      .use(reworkColors())
      .toString()
  ).css;
```


## Basswork

```js
var basswork = require('basswork');

var css = basswork(src);
```


## cssnext

```js
var cssnext = require('cssnext');

var css = cssnext(src);
```


## myth

```js
var autoprefixer = require('autoprefixer');
var rework = require('rework');
var reworkNpm = require('rework-npm');
var reworkColors = require('rework-colors');
var myth = require('myth');

var css = autoprefixer().process(
  rework(src)
    .use(reworkNpm())
    .use(reworkColors())
    .use(myth({ features: { import: false } }))
    .toString()
).css;
```

## suitcss

suitcss-preprocessor does not fully process Basscss, but the `rework-suit` plugin is compatible.

```js
var autoprefixer = require('autoprefixer');
var rework = require('rework');
var reworkColors = require('rework-colors');
var reworkSuit = require('rework-suit');

var css = autoprefixer()
  .process(
    rework(src)
    .use(reworkColors())
    .use(reworkSuit())
    .toString()
  ).css;
```

---

### Basscss modules using rework-plugin-colors
- defaults
- (v4 button modules)
- color-basic
- color-forms
- color-forms-dark
- colors
- highlight
- progress

