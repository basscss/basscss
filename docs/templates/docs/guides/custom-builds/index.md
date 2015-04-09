
<p class="h3">
  Basscss is a collection of interoperable CSS modules
  and can be used in conjunction with many other frameworks, libraries, and stylesheets.
</p>

# CSS4
Basscss is written in CSS4 and uses [cssnext](https://cssnext.github.io/) to post-process down to CSS3 for use in today’s browsers. Basscss can also be post-processed with [Rework](https://github.com/reworkcss/rework). To learn more about using CSS4 features, see the [CSS4 Guide](/docs/guides/css4).


# Bassplate
The quickest way to start customizing Basscss is through the official boilerplate project
[Bassplate](//github.com/jxnblk/bassplate),
which includes scripts and basic file and folder structure for building a simple website.

To get started, clone the repo, install dependencies, and run the start script.

```bash
git clone https://github.com/jxnblk/bassplate.git new-project
cd new-project
rm -rf .git
npm install
npm start
```

This will start a server at `http://localhost:8000` and watch the `/src` folder for changes.
Edit the files in `/src/css` to customize the compiled stylesheet.


# Npm Packages

All individual Basscss modules are available on npm. For a list of available packages, see the [Modules](http://basscss.com/docs/modules) page.


# Importing files

Basscss uses npm to manage its CSS modules. Cssnext automatically inlines files with the following syntax.
If you’re using Rework or Myth, be sure to use the `rework-npm` plugin to correctly import files.

To import modules that have been installed through npm, use the following syntax:

```css
@import 'basscss-base-typography';
@import 'basscss-defaults';
```

To import modules relative to the parent file, use this syntax:

```css
@import './custom-buttons';
```

Import custom properties (variables) last. Just as with other CSS declarations, whatever is last in the source code is used.

```css
@import 'basscss-utility-layout';
@import './variables';
```


# Sass
Although Basscss is written in spec-compliant CSS,
you can also incorporate it into an existing Sass project with the [css-to-scss](https://github.com/jxnblk/css-scss) compiled partials in the `/scss` folder. Be sure to include the variables file `basscss/scss/defaults` before all other partials.

```scss
@import: 'basscss/scss/defaults';
@import: 'basscss/scss/utility-layout';
```

To override the default values, include your own variable definitions before Basscss.

```scss
// Custom variables
@import: 'variables';

// Basscss
@import: 'basscss/scss/defaults';
@import: 'basscss/scss/utility-layout';
```

## Sass with Bower
Although Basscss’s individual modules are distributed through npm, the core package is available through Bower, which contains the compiled CSS as well as the standard set of modules as Sass partials.

To get started, install the package:

```bash
bower install basscss
```

To import modules without specifying the Bower folder,
add `bower_components/basscss/scss` to the `includePaths` option in node-sass.

```js
var options = {
  includePaths: ['bower_components/']
}
```

```scss
@import "basscss/scss/defaults";
@import "basscss/scss/base-reset";
@import "basscss/scss/base-typography";
```

# Customizer Web App

If you’re not ready to dive into the command line, you can create custom builds of Basscss with the web app.

<a href="/docs/customize" class="button button-outline blue">Customize</a>


