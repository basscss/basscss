# Documentation
For documentation with inline examples see:

http://basscss.com/docs

## Contents:
- [Getting Started](#getting-started)
- [Typography](#typography)
- [Layout](#layout)
- [Grid](#grid)
- [Responsive Utilities](#responsive-utilities)
- [Table Object](#table-object)
- [Lists](#lists)
- [Forms](#forms)
- [Buttons](#buttons)
- [Tables](#tables)
- [Navigation](#navigation)
- [Components](#components)
- [Theme](#theme)


# Getting Started

## Vanilla CSS
Include `basscss.min.css` out-of-the-box or use the unminified `basscss.css` and edit it how you see fit.
For lighter-weight projects use `basscss-lite.min.css`,  which only includes base type and layout styles.
Manually adjust the font stack and theme styles to customize the look and feel.

## Sass
Include the files found in the `/basscss` folder and adjust as necessary.

### Sass Variables
Adjust global variables in the `_variables.scss` file.

# Typography
Base type elements are normalized to a simple type scale that works well across devices.

## Responsive type scale
Use the `.h1` – `.h6` classes to adjust type sizes that respond to large screen sizes.
To turn off media-query-based responsive type styles, set the `$responsive-type` variable to `false`.

## Type utilities

class           | description
----------------|----------------
.bold           | font-weight: bold
.regular        | font-weight: regular
.italic         | font-style: italic
.caps           | All caps treatment with tracking
.left-align     | text-align: left
.center         | text-align: center
.right-align    | text-align: right
.justified      | text-align: justify

# Layout
Use layout utilities to alter the default document flow.

class           | description
----------------|----------------
.inline         | display: inline
.block          | display: block
.inline-block   | display: inline-block
.oh             | overflow: hidden
.clearfix       | Clears floated child elements
.left           | float: left
.right          | float: right
.fit            | max-width: 100%
.full-width     | width: 100%
.half-width     | width: 50%

## White Space Scale
Use these styles to adjust whitespace around elements.

These classes use a shorthand syntax.

shorthand       | description
----------------|----------------
m               | margin
p               | padding
t               | top
r               | right
b               | bottom
l               | left
x               | x-axis (i.e. left and right)
y               | y-axis (i.e. top and bottom)

### Margins
class           | description
----------------|----------------
.m0             | margin: 0
.mb0            | margin-bottom: 0 (Useful for type elements)
.m1             | margin: 1
.mt1            | margin-top: 1
.mr1            | margin-right: 1
.mb1            | margin-bottom: 1
.ml1            | margin-left: 1
.m2             | margin: 2
.mt2            | margin-top: 2
.mr2            | margin-right: 2
.mb2            | margin-bottom: 2
.ml2            | margin-left: 2
.m3             | margin: 3
.mt3            | margin-top: 3
.mr3            | margin-right: 3
.mb3            | margin-bottom: 3
.ml3            | margin-left: 3
.m4             | margin: 4
.mt4            | margin-top: 4
.mr4            | margin-right: 4
.mb4            | margin-bottom: 4
.ml4            | margin-left: 4
.wrap           | margin-right: auto; margin-left: auto

### Padding
Only includes symmetrical directions.

class           | description
----------------|----------------
.p1             | padding: 1
.px1            | padding-right: 1; padding-left: 1
.py1            | padding-top: 1; padding-bottom: 1
.p2             | padding: 2
.px2            | padding-right: 2; padding-left: 2
.py2            | padding-top: 2; padding-bottom: 2
.p3             | padding: 3
.px3            | padding-right: 3; padding-left: 3
.py3            | padding-top: 3; padding-bottom: 3
.p4             | padding: 4
.px4            | padding-right: 4; padding-left: 4
.py4            | padding-top: 4; padding-bottom: 4

### Positions

class           | description
----------------|----------------
.relative       | position: relative
.absolute       | position: absolute
.fixed          | position: fixed
.top-0          | top: 0
.right-0        | right: 0
.bottom-0       | bottom: 0
.left-0         | left: 0
.z1             | z-index: 1
.z2             | z-index: 2
.z3             | z-index: 3
.z4             | z-index: 4
.absolute-center | Centers element within parent

# Grid
`pull docs from tempo repo`

```
Examples
- Basic
- Nesting
- Reverse Order (col-right)
- Offset
- col-center
- mobile-col
- mixed mobile and desktop
- mixed with mobile-show clearfix
- container-col-
```

# Responsive Utilities
Use these to change layout styles on small devices.

class           | description
----------------|----------------
.mobile-show    | Only visible at mobile size
.mobile-hide    | Hidden at mobile size
.mobile-block   | Full-width display block at mobile sizes
.mobile-center  | Centers text at mobile size

# Table Object
`pull docs from repo + grid utilities`

```
Examples
- basic
- with grid width utilities
- table-fixed
- padding on cells
- mobile-table
```

# Lists

class           | description
----------------|----------------
.list-reset     | Unstyled list with no left padding
.list-inline    | Sets list items to inline

# Forms
Use the structural `.form` class then use the thematic `.form-light` extension.

## Basic Inline Form
```html
<form class="form form-light">
  <label class="mr1">Input:</label>
  <input type="text" class="input mr1">
  <input type="submit" class="button button-blue" value="Go">
</form>
```

## Stacked Form
```html
<form class="form form-stacked form-light">
  <label>Email Address</label>
  <input type="text" class="input" placeholder="Email Address">
  <label>Password</label>
  <input type="text" class="input" placeholder="Password">
  <label class="checkbox">
    <input type="checkbox"> Remember Me
  </label>
  <input type="submit" class="button button-blue" value="Sign In">
</form>
```

## Form Field Sizes

# Buttons
Use the base `.button` class, then extend with your own theme styles to adjust the visual treatment.

```html
<button class="button button-blue">Blue Button</button>
<a href="#!" class="button button-gray">Gray Button</a>
<button class="button button-big button-gray">Big Gray Button</button>
<button class="button button-small button-gray">Small Gray Button</button>
```

# Tables
Use the `.table-reset` class to set smart defaults on form elements. Add the `.table-light` class to add borders between rows. Create your own extensions for more complex styles.

## Basic Table
```html
<table class="table-reset table-light mb2">
  <thead>
    <tr>
      <th>Artist</th>
      <th>Album</th>
      <th>Released</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Phil Collins</td>
      <td>No Jacket Required</td>
      <td>1985</td>
    </tr>
    <tr>
      <td>Peter Gabriel</td>
      <td>So</td>
      <td>1986</td>
    </tr>
    <tr>
      <td>Huey Lewis and the News</td>
      <td>Sports</td>
      <td>1983</td>
    </tr>
  </tbody>
</table>
```

## Table with thematic styling
```html
<table class="table-reset table-light border">
  <thead class="bold bg-light-gray">
    <tr>
      <th>Artist</th>
      <th>Album</th>
      <th>Released</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Phil Collins</td>
      <td>No Jacket Required</td>
      <td>1985</td>
    </tr>
    <tr>
      <td>Peter Gabriel</td>
      <td>So</td>
      <td>1986</td>
    </tr>
    <tr>
      <td>Huey Lewis and the News</td>
      <td>Sports</td>
      <td>1983</td>
    </tr>
  </tbody>
</table>
```

# Navigation
Use the `.nav` style to control groups of links, including navigation, menus, breadcrumbs, pagination, and segmented controls.

```
Examples:
- basic
- nav-table
- mobile-nav-table
- nav-table-fixed
- nav-big
- nav-small
- nav-flush
- no theme
- nav-dark
- nav-light
- pills
- tabs
- segments
- borders
- pagination with segments
- breadcrumbs
```

# Components
Create a variety of components without writing any new CSS.

## Basic Media Object
## Double-side Media Object
## Navbar

# Themes
Use the included example theme to adjust visual styles

## Colors

class           | description
----------------|----------------
.white          | color: white
.dark-gray      | color: $dark-gray
.mid-gray       | color: $mid-gray
.light-gray     | color: $light-gray
.blue           | color: $blue
.green          | color: $green
.yellow         | color: $yellow
.red            | color: $red

## Background Colors

class           | description
----------------|----------------
.bg-white       | background-color: white
.bg-dark-gray   | background-color: $dark-gray
.bg-mid-gray    | background-color: $mid-gray
.bg-light-gray  | background-color: $light-gray
.bg-blue        | background-color: $blue
.bg-green       | background-color: $green
.bg-yellow      | background-color: $yellow
.bg-red         | background-color: $red

## Borders
Defaults are set with the `$border-color`, `$border-width`, and `$border-radius` variables.

class           | description
----------------|----------------
.border         | Border
.border-top     | Top border
.border-right   | Right border
.border-bottom  | Bottom border
.border-left    | Left border-left
.rounded        | Default border radius
.circle         | border-radius: 50%

```
- colors
- background-colors
- backgrounds
- borders
- border radii
```

# Customizing and Extending
Add new styles to build upon BASSCSS. Reusable styles and a separation of structure and skin will help keep code readable, scalable, and generally easier to maintain.

# Guide to Web Design
For more on web design with BASSCSS, read the guide:

http://basscss.com/guide

