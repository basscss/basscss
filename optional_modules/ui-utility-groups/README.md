
# Basscss UI Utility Groups

UI group utilities module for Basscss - http://basscss.com

Use group utilities for fine-grained control over visually grouping buttons, form fields, and other elements.

## Button Groups
Button groups allow for more flexibility in establishing gestalt and controlling information density.
Use a combination of layout utilities and color extensions to create button groups.
The utilities `.rounded-left`, `.rounded-right`,
and `.not-rounded` can be used to override button and form field border radii.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button rounded-left is-active">Burgers</button>
  <button type="button" class="left button border-left not-rounded">Fries</button>
  <button type="button" class="left button border-left rounded-right">Shakes</button>
</div>
```

Normally, buttons with borders would double up when placed next to each other.
The `.x-group-item` utility adjusts negative margins and focus states to visually collapse borders.
Functionally, this is similar to how other frameworks handle button and form input groups,
but with more direct control over styling.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button x-group-item rounded-left">Burgers</button>
  <button type="button" class="left button-outline x-group-item not-rounded">Fries</button>
  <button type="button" class="left button-outline x-group-item rounded-right">Shake</button>
</div>
```

Use `.y-group-item` to group elements vertically.

```html
<div class="inline-block">
  <button type="button" class="block full-width button y-group-item rounded-top">Burgers</button>
  <button type="button" class="block full-width button-outline y-group-item not-rounded">Fries</button>
  <button type="button" class="block full-width button-outline y-group-item rounded-bottom">Shake</button>
</div>
```

## Input Groups

Input groups can be created by removing margins, adjusting border radii, and using the group utilities.
The `.hide` utility visually hides labels, while keeping them accessible to screen readers.

```html
<form class="sm-col-6">
  <label class="hide">Pancakes</label>
  <input type="text" class="block full-width mb0 field-light rounded-top y-group-item" placeholder="Pancakes">
  <label class="hide">Making</label>
  <input type="password" class="block full-width mb0 field-light not-rounded y-group-item" placeholder="Making">
  <label class="hide">Bacon</label>
  <input type="text" class="block full-width field-light rounded-bottom y-group-item" placeholder="Bacon">
  <button type="submit" class="button">Pancake</button>
</form>
```

The grid system can be used to control button or input group widths.

```html
<form class="clearfix">
  <label class="hide">Bacon</label>
  <input type="text" class="col col-4 md-col-5 mb0 field-light rounded-left x-group-item" placeholder="Bacon">
  <label class="hide">Pancakes</label>
  <input type="password" class="col col-4 md-col-5 mb0 field-light not-rounded x-group-item" placeholder="Pancakes">
  <button type="submit" class="col col-4 md-col-2 button rounded-right">Pancake</button>
</form>
```

