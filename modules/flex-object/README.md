
The flex-object is a powerful suite of utilities based on the
<a href="http://www.w3.org/TR/css3-flexbox/">flexible box layout module</a>.
These utilities can replace the need for a grid system in many instances,
but can also be combined with the Basscss grid for even more possibilities.

Note: browser support for the flexible box layout module is limited. See http://caniuse.com/#feat=flexbox

## .flex
To begin, add the `.flex` class to a parent element.
This sets the element to `display: flex` and enables a flex context for all direct child elements.
```html
<div class="flex">
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
```

## .flex-wrap
To wrap elements, use the `.flex-wrap` utility.
```html
<div class="flex flex-wrap">
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
```

## .flex-column
To arrange items vertically, use the `.flex-column` utility.
```html
<div class="flex flex-column">
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
```

## Alignment
Use these utilities to control vertical alignment of child elements.

### .flex-center
To vertically center child elements, add the `.flex-center` class to the parent element.
```html
<div class="flex flex-center">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="px2 blue border">Hot dog</div>
</div>
```

### .flex-stretch
To stretch all elements to fill the height of the parent, use the `.flex-stretch` utility.
```html
<div class="flex flex-stretch">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="px2 blue border">Hot dog</div>
</div>
```

### .flex-stretch with nested content
To ensure nested elements stretch as well, add the `.flex` class to relevant elements.
```html
<div class="flex flex-stretch">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="flex blue border">
    <div class="px2 white bg-blue">
      Hot dog
    </div>
  </div>
</div>
```

### .flex-baseline
To align child elements to their baseline, use the `.flex-baseline` utility.

```html
<div class="flex flex-baseline blue border-bottom">
  <div class="flex-auto px2">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="px2">Hot dog</div>
</div>
```

### .flex-start
To align child elements to the top, use the `.flex-start` utility.

```html
<div class="flex flex-start blue border-top">
  <div class="flex-auto px2">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="px2">Hot dog</div>
</div>
```

### .flex-end
To align child elements to the bottom, use the `.flex-end` utility.

```html
<div class="flex flex-end blue border-bottom">
  <div class="flex-auto px2">
    <h1 class="m0">Hamburger</h1>
  </div>
  <div class="px2">Hot dog</div>
</div>
```

## Justify

To automatically fill the space between child elements, use `.flex-justify`.

```html
<div class="flex flex-justify">
  <div class="p1 border">Burger</div>
  <div class="p1 border">Burger</div>
  <div class="p1 py1 border">Burger</div>
</div>
```


## Responsive Utilities
To set display flex only at certain breakpoints and up,
use the breakpoint-prefixed versions of `.flex`.
All other utilities will only work at the set breakpoint.

```html
<div class="sm-flex flex-center mb2 blue">
  <div class="p1 border">
    <h2 class="m0">.sm-flex</h2>
  </div>
  <div class="flex-auto p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
<div class="md-flex flex-center mb2 blue">
  <div class="p1 border">
    <h2 class="m0">.md-flex</h2>
  </div>
  <div class="flex-auto p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
<div class="lg-flex flex-center mb2 blue">
  <div class="p1 border">
    <h2 class="m0">.lg-flex</h2>
  </div>
  <div class="flex-auto p1 border">Hamburger</div>
  <div class="p1 border">Hamburger</div>
</div>
```

## Child elements
To control the size and behavior of child elements, use these utilities.

### .flex-auto
To make an element grow or shrink as needed, use the `.flex-auto` utility.
```html
<div class="flex">
  <div class="px2 py1 border">Hamburger</div>
  <div class="px2 py1 border">Hamburger</div>
  <div class="flex-auto blue border"></div>
  <div class="px2 py1 border">Hamburger</div>
</div>
```

### .flex-grow
To make an element grow, but not shrink, use the `.flex-grow` utility.
```html
<div class="flex">
  <div class="px2 py1 border">Hamburger</div>
  <div class="px2 py1 border">Hamburger</div>
  <div class="flex-grow blue border"></div>
  <div class="px2 py1 border">Hamburger</div>
</div>
```

### .flex-none
To prevent an element from growing or shrinking, use the `.flex-none` utility.
```html
<div class="flex">
  <div class="flex-auto px2 py1 border">Hamburger</div>
  <div class="flex-auto px2 py1 border">Hamburger</div>
  <div class="flex-none px2 py1 border">Hamburger</div>
</div>
```

## Ordering
To change the order of child elements, use the `.flex-first` and `.flex-last` utilities.

### .flex-first
```html
<div class="flex">
  <div class="px2 py1 border">Hamburger</div>
  <div class="flex-first px2 py1 border">First Hamburger</div>
  <div class="px2 py1 border">Hamburger</div>
</div>
```

### .flex-last
```html
<div class="flex">
  <div class="px2 py1 border">Hamburger</div>
  <div class="flex-last px2 py1 border">Last Hamburger</div>
  <div class="px2 py1 border">Hamburger</div>
</div>
```



## Parent Element Utilities

```css
.flex          { display: flex }
.flex-column   { flex-direction: column }
.flex-wrap     { flex-wrap: wrap }
.flex-center   { align-items: center }
.flex-baseline { align-items: baseline }
.flex-stretch  { align-items: stretch }
.flex-start    { align-items: flex-start }
.flex-end      { align-items: flex-end }
```

## Child Element Utilities

```css
.flex-first { order: -1 }
.flex-last  { order: 1024 }
.flex-auto  { flex: 1 1 auto }
.flex-grow  { flex: 1 0 auto }
.flex-none  { flex: none }
```


