
Use these utilities to conditionally show and hide elements based on viewport width using a mobile-first approach.

## Prefix Naming Convention

All breakpoint-based styles in Basscss follow the same naming convention.

<div class="overflow-auto">
  <table class="mb2 table-flush table-light">
    <thead>
      <tr> <th>Prefix</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>(no prefix)</td> <td>Not scoped to a breakpoint</td> </tr>
      <tr> <td>sm-</td> <td>--breakpoint-sm (default: min-width 40em)</td> </tr>
      <tr> <td>md-</td> <td>--breakpoint-md (default: min-width 52em)</td> </tr>
      <tr> <td>lg-</td> <td>--breakpoint-lg (default: min-width 64em)</td> </tr>
    </tbody>
  </table>
</div>

Adjust the custom media queries to suite your needs.


## Show and hide content
Resize the browser window to see the effect.

```html
<h3 class="sm-show">Visible from <code>--breakpoint-sm</code> and up.</h3>
<h3 class="sm-hide red">Hidden from <code>--breakpoint-sm</code> and up.</h3>
```

## Responsive Line Break
Control wrapping at different screen widths.

```html
<h1>
  Responsive Line Break
  <br class="md-show">
  To Control Wrapping
</h1>
```

## Accessible Hide

To visually hide things like form labels in an accessible way, use the `.hide` utility.

```html
<form>
  <label for="search" class="hide">Search</label>
  <input id="search" type="search" class="field">
  <button class="btn btn-primary">Go</button>
</form>
```
