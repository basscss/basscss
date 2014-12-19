
# Custom Builds

Basscss is a collection of interoperable CSS modules
and can be used in conjunction with many other frameworks, libraries, and stylesheets.
While the source code is written in spec-based CSS,
it can also be incorporated into Sass projects through NPM or Bower,
or customized with the <a href="/docs/customize">web-based tool</a>.

## Rework

Rework is the most native way to incorporate Basscss into a project,
and its concepts should be somewhat familiar to those who use other preprocessors,
such as Sass or Less, and to those who are comfortable with the command line.

Rework is a Node-based preprocessor with a plugin architecture and syntax based on the CSS specification.
Rework requires NPM, and Basscss uses this package management system for its modular architecture.
If you prefer using Bower, see the <a href="/docs/custom-builds/#bower">Bower Section</a> below.

### Bassplate

The quickest way to get familiar with using Rework is through the official boilerplate project
<a href="//github.com/jxnblk/bassplate">Bassplate</a>,
which includes Gulp tasks and basic file and folder structure for building a simple website.

To get started, clone the repo, install dependencies, and run the default Gulp task.

```bash
git clone https://github.com/jxnblk/bassplate.git new-project
cd new-project
rm -rf .git
npm install
gulp
```

This will start a server at `http://localhost:8000` and watch the `/src` folder for changes.
Edit the files in `/src/css` to customize the compiled stylesheet.

### Basswork

To set up Basscss in an existing Node-base build system,
use <a href="//github.com/jxnblk/basswork">Basswork</a>
or <a href="//github.com/jxnblk/gulp-basswork">Gulp Basswork</a> to compile a set of modules.

### NPM Packages

All individual Basscss modules are available on NPM.
For a list of available packages, see the
<a href="/docs/modules">Modules</a> page.

## Rework Syntax

To import modules that have been installed through NPM,
use the following syntax:

```css
@import 'basscss-base-typography';
@import 'basscss-defaults';
```

To import modules relative to the parent file,
use this syntax:

```css
@import './custom-buttons';
```

Import variables last.
Just as with other CSS declarations,
whatever is last in the source code is used.

```css
@import 'basscss-utility-layout';
@import './variables';
```

To use variables in declarations, follow this CSS syntax:

```css
.button-primary {
  background-color: var(--blue);
}
```

For more, see the <a href="/docs/rework">Using Rework</a> page.

## Bower
Although Basscss’s individual modules are distributed through NPM,
the core package is available through Bower,
which contains the compiled CSS as well as the standard set of modules as Sass partials.

To get started, install the package:

```bash
bower install basscss
```


## Sass

The core package includes the standard modules as Sass partials in the `scss` folder.
Import individual modules in your own file as needed,
with the default variables file first.

```scss
@import: 'basscss/scss/defaults';
@import: 'basscss/scss/utility-layout';
```

To override the default values,
include your own variable definitions before Basscss.

```scss
// Custom variables
@import: 'variables';

// Basscss
@import: 'basscss/scss/defaults';
@import: 'basscss/scss/utility-layout';
```

### Sass with Bower

If you’re using Bower and node-sass in your build process,
add `bower_components/basscss/scss` to the `includePaths` option.

```js
var options = {
  includePaths: ['bower_components/']
}
```

This will allow you to import modules without specifying the folder in your own Sass files.

```scss
@import "basscss/scss/defaults";
@import "basscss/scss/base-reset";
@import "basscss/scss/base-typography";
```

## Web App

If you’re not ready to dive into the command line,
you can create custom builds of Basscss with the
<a href="/docs/customize">Customize</a>
web tool.

