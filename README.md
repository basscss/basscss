# BASSCSS

Simple, responsive CSS toolkit based on OOCSS principles

http://basscss.com

BASSCSS is a lightweight collection of highly reusable styles and utilities designed for speed, performance, and scalability. Use it out of the box or as the base for a larger project.

# Features
- Lightweight at about 11KB minified
- Performant selectors and styles
- Flexible & reusable styles to handle the bulk of styling needs
- Extensible & customizable using Sass variables and abstracted structural styles
- Maintainable & readable code with unabstracted, obvious naming conventions
- Code, prototype, and design faster by spending less time writing CSS
- Accurate visual alignment using customizable spacing units

# What's Included
- Typography Utilities
- Responsive Type Scale
- Layout Utilities
- White Space Scale
- Forms
- Tables
- Buttons
- Lists
- Responsive Grid System
- Layout Components
- Navigation Components
- Customizable Theme

---

# Documentation

Contents:
- [Getting Started](#getting-started)
  - [Typography](#typography)
  - [Layout](#layout)
  - [Grid](#grid)
  - [Table Object](#table-object)
  - [Forms](#forms)
  - [Buttons](#buttons)
  - [Tables](#tables)
  - [Navigation](#navigation)
- [Guide to Web Design Basics](http://basscss.com/guide)
- [Components](#)
- [Themes](#)

# Getting Started

## Vanilla CSS
Include `basscss.min.css` (7KB) out-of-the-box or use the unminified `basscss.css` (9KB) and edit it how you see fit.

For lighter-weight projects use `basscss-lite.min.css` (4KB), which doesn't include button, form, positioning, or theme styles.

Adjust the font stack and theme styles to customize the look and feel.

## SASS
Include the files found in the `scss` folder and adjust as necessary.


# Typography
Base type elements are normalized to a simple type scale that works well across devices.

## Responsive type
Use the `.h1`, `.h2`, `.h3`, `.p`, and `.small` classes to adjust type sizes that respond to large screen sizes.

## Static type scale
To adjust the font-size for a semantic type element, but keep the size consistent across screen sizes, use the `.f1`, `.f2`, `.f3`, `.f4`, and `.f5` classes.

## Type utilities

```scss
.bold { font-weight: bold; }
.regular { font-weight: normal; }
.italic { font-style: italic; }
.caps { text-transform: uppercase; letter-spacing: .2em; }
.left-align  { text-align: left; }
.center { text-align: center; }
.right-align  { text-align: right; }
.justified  { text-align: justify; }
```

# Layout utilities
Use layout utilities to adjust the default document flow.

```scss
.inline       { display: inline; }
.block        { display: block; }
.inline-block { display: inline-block; }

.oh    { overflow: hidden; }
.left  { float: left; }
.right { float: right; }

.clearfix {
  &:before, &:after { content: " "; display: table; }
  &:after { clear: both; }
}

.fit { max-width: 100%; }

.full-width { width: 100%; }
.half-width { width: 50%; }
```

# Mobile state utilities
Use these to change layout behavior for small devices.

```scss
.mobile-show {
  display: none;
}

@media (max-width: 48em) {
  .mobile-show,
  .mobile-block {
    display: block;
  }
  .mobile-block {
    width: 100%;
  }
  .mobile-hide {
    display: none;
  }
  .mobile-center {
    text-align: center;
  }
}
```

# White Space Scale
# Margins
Classes use a shorthand syntax.

Shorthand | Description
----------|------------
m         | margin
t         | top
r         | right
b         | bottom
l         | left

```scss
.m0  { margin: 0; }
.mb0 { margin-bottom: 0; }

.m1  { margin: 1rem; }
.mt1 { margin-top: 1rem; }
.mr1 { margin-right: 1rem; }
.mb1 { margin-bottom: 1rem; }
.ml1 { margin-left: 1rem; }

.m2  { margin: 2rem; }
.mt2 { margin-top: 2rem; }
.mr2 { margin-right: 2rem; }
.mb2 { margin-bottom: 2rem; }
.ml2 { margin-left: 2rem; }

.m3  { margin: 3rem; }
.mt3 { margin-top: 3rem; }
.mr3 { margin-right: 3rem; }
.mb3 { margin-bottom: 3rem; }
.ml3 { margin-left: 3rem; }

.m4  { margin: 4rem; }
.mt4 { margin-top: 4rem; }
.mr4 { margin-right: 4rem; }
.mb4 { margin-bottom: 4rem; }
.ml4 { margin-left: 4rem; }

.wrap { margin-right: auto; margin-left: auto; }

.m-responsive { margin: 2rem; }
.mt-responsive { margin-top: 2rem; }
.mr-responsive { margin-right: 2rem; }
.mb-responsive { margin-bottom: 2rem; }
.ml-responsive { margin-left: 2rem; }
```

# Padding
Only includes symmetrical padding styles.

Shorthand | Description
----------|------------
p | padding
x | x-axis (left and right)
y | y-axis (top and bottom)

```scss
.p1  { padding: 1rem; }
.px1 { padding-right: 1rem; padding-left: 1rem; }
.py1 { padding-top: 1rem; padding-bottom: 1rem; }

.p2  { padding: 2rem; }
.px2 { padding-right: 2rem; padding-left: 2rem; }
.py2 { padding-top: 2rem; padding-bottom: 2rem; }

.p3  { padding: 3rem; }
.px3 { padding-right: 3rem; padding-left: 3rem; }
.py3 { padding-top: 3rem; padding-bottom: 3rem; }

.p4  { padding: 4rem; }
.px4 { padding-right: 4rem; padding-left: 4rem; }
.py4 { padding-top: 4rem; padding-bottom: 4rem; }

.p-responsive { padding: 1.5rem; }
.px-responsive { padding-right: 1.5rem; padding-left: 1.5rem; }
.py-responsive { padding-top: 1.5rem; padding-bottom: 1.5rem; }
```

# Buttons
Use the base `.button` class, then extend with your own theme styles to adjust the visual treatment.

```html
<button class="button button-blue">Blue Button</button>
<a href="#!" class="button button-gray">Gray Button</a>
<button class="button button-big button-gray">Big Gray Button</button>
<button class="button button-small button-gray">Small Gray Button</button>
```

# Forms
Similarly, extend the form classes with custom theme styles.

```html
<form class="form form-light">
  <label class="mr1">Input:</label>
  <input type="text" class="input mr1">
  <input type="submit" class="button button-blue" value="Go">
</form>

<form class="form form-stacked form-light">
  <input type="text" class="input" placeholder="Email Address">
  <input type="text" class="input" placeholder="Password">
  <input type="submit" class="button button-blue" value="Sign In">
</form>
```

# Grid System

# Table Object

# Navs

# Components
Create a variety of components without writing any new CSS

# Themes
Use the included example theme to adjust visual styles

# Customizing and Extending
Add new styles to build upon BASSCSS. Reusable styles and a separation of structure and skin will help keep code readable, scalable, and generally easier to maintain.

---

### Breaking changes from v2
- New Sass file structure
- Renamed `.p` and `.small` type scale class to `.h4` and `.h5`
- Removed `.f1` - `.f5` type scale styles
- Responsive type is now globally on or off
- `.list` is now `.list-reset`
- `.list-inline` no longer includes reset styles
- Removed responsive margin and padding styles, e.g. `.m-responsive` and `.px-responsive`
- Renamed positioning utilities from `.t0`, `.r0`, `.b0`, `.l0` to `.top-0`, `.right-0`, `.bottom-0`, `.left-0`
- `.measure` styles are replaced with `.container-col-` styles in `_grid.scss`
- Removed `.leading-` utilities

---

[MIT license](http://opensource.org/licenses/MIT)

