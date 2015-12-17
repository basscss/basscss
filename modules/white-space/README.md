
Immutable margin and padding utilities are based on a global white space scale defined with custom properties.
These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

## Naming Convention

Due to the ubiquitous nature of setting margin and padding,
these utilities use a shorthand naming convention.

<div class="overflow-scroll">
  <table class="mb2 table-flush table-light">
    <thead>
      <tr> <th>Shorthand</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>m</td> <td>Margin</td> </tr>
      <tr> <td>p</td> <td>Padding</td> </tr>
      <tr> <td>t</td> <td>Top</td> </tr>
      <tr> <td>r</td> <td>Right</td> </tr>
      <tr> <td>b</td> <td>Bottom</td> </tr>
      <tr> <td>l</td> <td>Left</td> </tr>
      <tr> <td>x</td> <td>X-axis (left and right)</td> </tr>
      <tr> <td>y</td> <td>Y-axis (top and bottom)</td> </tr>
      <tr> <td>n</td> <td>Negative (margin only)</td> </tr>
      <tr> <td>0</td> <td>0 reset</td> </tr>
      <tr> <td>1</td> <td>--space-1 (default .5rem)</td> </tr>
      <tr> <td>2</td> <td>--space-2 (default 1rem)</td> </tr>
      <tr> <td>3</td> <td>--space-3 (default 2rem)</td> </tr>
      <tr> <td>4</td> <td>--space-4 (default 4rem)</td> </tr>
    </tbody>
  </table>
</div>

## Margins

Change or reset default margins using the white space scale.
Negative x-axis margins are used to offset margins and padding of child elements.
Margin auto is used to horizontally center block-level elements with a set width.

```css
.m0  { margin:        0 }
.mt0 { margin-top:    0 }
.mr0 { margin-right:  0 }
.mb0 { margin-bottom: 0 }
.ml0 { margin-left:   0 }

.m1  { margin:        var(--space-1) }
.mt1 { margin-top:    var(--space-1) }
.mr1 { margin-right:  var(--space-1) }
.mb1 { margin-bottom: var(--space-1) }
.ml1 { margin-left:   var(--space-1) }

.m2  { margin:        var(--space-2) }
.mt2 { margin-top:    var(--space-2) }
.mr2 { margin-right:  var(--space-2) }
.mb2 { margin-bottom: var(--space-2) }
.ml2 { margin-left:   var(--space-2) }

.m3  { margin:        var(--space-3) }
.mt3 { margin-top:    var(--space-3) }
.mr3 { margin-right:  var(--space-3) }
.mb3 { margin-bottom: var(--space-3) }
.ml3 { margin-left:   var(--space-3) }

.m4  { margin:        var(--space-4) }
.mt4 { margin-top:    var(--space-4) }
.mr4 { margin-right:  var(--space-4) }
.mb4 { margin-bottom: var(--space-4) }
.ml4 { margin-left:   var(--space-4) }

.mxn1 { margin-left: -var(--space-1); margin-right: -var(--space-1); }
.mxn2 { margin-left: -var(--space-2); margin-right: -var(--space-2); }
.mxn3 { margin-left: -var(--space-3); margin-right: -var(--space-3); }
.mxn4 { margin-left: -var(--space-4); margin-right: -var(--space-4); }

.mx-auto { margin-left: auto; margin-right: auto; }
```

## Padding

Padding utilities are only available in symmetrical orientations.
This is to normalize the spacing used around elements and maintain a consistent visual rhythm.

```css
.p0  { padding: 0 }

.p1  { padding:       var(--space-1) }
.py1 { padding-top:   var(--space-1); padding-bottom: var(--space-1) }
.px1 { padding-left:  var(--space-1); padding-right:  var(--space-1) }

.p2  { padding:       var(--space-2) }
.py2 { padding-top:   var(--space-2); padding-bottom: var(--space-2) }
.px2 { padding-left:  var(--space-2); padding-right:  var(--space-2) }

.p3  { padding:       var(--space-3) }
.py3 { padding-top:   var(--space-3); padding-bottom: var(--space-3) }
.px3 { padding-left:  var(--space-3); padding-right:  var(--space-3) }

.p4  { padding:       var(--space-4) }
.py4 { padding-top:   var(--space-4); padding-bottom: var(--space-4) }
.px4 { padding-left:  var(--space-4); padding-right:  var(--space-4) }
```

## Resetting Margins

To increase information density and to better align elements, remove default margins from typographic elements
using the margin utilities.

```html
<h1 class="m0">No margin</h1>
<h1 class="mt0">No margin top</h1>
<h1 class="mb0">No margin bottom</h1>
```

## Add Spacing

Add spacing around elements using a combination of margin utilities.

```html
<div class="mxn1">
  <button class="btn btn-primary m1">Button</button>
  <button class="btn btn-primary m1">Button</button>
  <button class="btn btn-primary m1">Button</button>
</div>
```

The negative margin utilities also work with padded children.

```html
<div class="border border-blue">
  <div class="mxn2">
    <div class="px2 border border-blue">Padded div</div>
  </div>
</div>
```

## Center Elements

Block elements with a set width can be centered with `.mx-auto`.

```html
<div>
  <img src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
    width="96"
    height="96"
    class="block mx-auto" />
</div>
```

## Box

To create a simple box component, use padding along with color utilities.

```html
<div class="p2 bg-white border rounded">
  A simple box
</div>
```

```html
<div class="overflow-hidden border rounded">
  <div class="p2 bold white bg-blue">
    Panel Header
  </div>
  <div class="p2">
    Panel Body
  </div>
  <div class="p2 bg-silver">
    Panel Footer
  </div>
</div>
```

<span class="red">Margins and padding should never be declared outside of these utilities.</span>
This is meant to help create consistency and avoid magic numbers.
If, for some reason, the default white space scale does not suit your design,
customize and extend it before using it.

For larger scale projects, breakpoint-based responsive white space utilities are available in the `basscss-responsive-white-space` module (not included in the default Basscss).

