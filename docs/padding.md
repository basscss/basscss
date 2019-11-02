# Padding

Immutable padding utilities are based on a global white space scale defined with custom properties.
These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

## Naming Convention

Due to the ubiquitous nature of setting padding,
these utilities use a shorthand naming convention.

Shorthand | Description
---|---
p | Padding
t | Top
r | Right
b | Bottom
l | Left
x | X-axis
y | Y-axis
0 | 0 (reset)
1 | `--space-1`
2 | `--space-2`
3 | `--space-3`
4 | `--space-4`

Padding utilities are only available in symmetrical orientations.
This is to normalize the spacing used around elements and maintain a consistent visual rhythm.

```css
.p0  { padding: 0 }
.pt0 { padding-top: 0 }
.pr0 { padding-right: 0 }
.pb0 { padding-bottom: 0 }
.pl0 { padding-left: 0 }
.px0 { padding-left: 0; padding-right:  0 }
.py0 { padding-top: 0;  padding-bottom: 0 }

.p1  { padding:        var(--space-1) }
.pt1 { padding-top:    var(--space-1) }
.pr1 { padding-right:  var(--space-1) }
.pb1 { padding-bottom: var(--space-1) }
.pl1 { padding-left:   var(--space-1) }
.py1 { padding-top:    var(--space-1); padding-bottom: var(--space-1) }
.px1 { padding-left:   var(--space-1); padding-right:  var(--space-1) }

.p2  { padding:        var(--space-2) }
.pt2 { padding-top:    var(--space-2) }
.pr2 { padding-right:  var(--space-2) }
.pb2 { padding-bottom: var(--space-2) }
.pl2 { padding-left:   var(--space-2) }
.py2 { padding-top:    var(--space-2); padding-bottom: var(--space-2) }
.px2 { padding-left:   var(--space-2); padding-right:  var(--space-2) }

.p3  { padding:        var(--space-3) }
.pt3 { padding-top:    var(--space-3) }
.pr3 { padding-right:  var(--space-3) }
.pb3 { padding-bottom: var(--space-3) }
.pl3 { padding-left:   var(--space-3) }
.py3 { padding-top:    var(--space-3); padding-bottom: var(--space-3) }
.px3 { padding-left:   var(--space-3); padding-right:  var(--space-3) }

.p4  { padding:        var(--space-4) }
.pt4 { padding-top:    var(--space-4) }
.pr4 { padding-right:  var(--space-4) }
.pb4 { padding-bottom: var(--space-4) }
.pl4 { padding-left:   var(--space-4) }
.py4 { padding-top:    var(--space-4); padding-bottom: var(--space-4) }
.px4 { padding-left:   var(--space-4); padding-right:  var(--space-4) }
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

<span class="red">Padding should never be declared outside of these utilities.</span>
This is meant to help create consistency and avoid magic numbers.
If, for some reason, the default white space scale does not suit your design, customize and extend it before use.

