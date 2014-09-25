# Basswork

Basscss is built with [Rework](https://github.com/reworkcss/rework) and [Gulp](http://gulpjs.com/).
Rework is a preprocessor based on the CSS specification and a flexible plugin architecture.
Gulp is a Node.js-based build system for front-end development.

Basscss uses
[Basswork]
(href="https://github.com/jxnblk/basswork)
, a custom wrapper around Rework, to simplify development.
Basswork is also available as a [Gulp plugin](https://www.npmjs.org/package/gulp-basswork).

To fully leverage Basscss's modularity and flexibility,
use Basswork to build your own custom stylesheets.

## Getting Started using Gulp

If you don't have it already,
[Install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started).

Install Gulp Basswork along with any Basscss modules you'd like to use.

```
npm install --save-dev gulp-basswork basscss-base basscss-utilities
```

Create a source CSS file to import the Basscss modules.

```css
@import "basscss-base";
@import "basscss-utilities";
```

In your `gulpfile.js`, create a task to compile the CSS.

```js
var gulp = require('gulp');
var basswork = require('gulp-basswork');

gulp.task('css', function() {
  gulp.src('./src/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'));
});
```

Set CSS variables after the imports in your CSS file to override Basscss's defaults.
See [Rework Vars](https://github.com/reworkcss/rework-vars) for more details on usage.

```css
@import "basscss-base";
@import "basscss-utilities";

:root {
  --font-family: Georgia, serif;
}
```

To adjust breakpoints for the media queries, set custom media queries after the imports.
See [Rework Custom Media](https://github.com/reworkcss/rework-custom-media/) for more details on usage.

```css
@import "basscss-base";
@import "basscss-utilities";

@custom-media --breakpoint-sm (min-width: 32em);
```

