

This module includes basic positioning utilities to alter the default document flow.

<p class="red">Use positions with caution. They are often unnecessary and commonly misused.</p>

Use `.relative` to create a new stacking context.

```html
<div class="relative">
  <button class="btn btn-primary">Button</button>
</div>
```

Use `.absolute` to move elements out of the default document flow.

```html
<div class="relative mb4">
  <button class="btn btn-primary">Button</button>
  <div class="absolute bg-white border rounded">
    <a href="#" class="block btn">Dropdown Action</a>
    <a href="#" class="block btn">Action</a>
    <a href="#" class="block btn">Action</a>
  </div>
</div>
```

Use `.fixed` to position an element relative to the viewport.
<p class="docs-show" style="display:none">Note: fixed positioning has been disabled here for demonstration only.</p>

```html
<button class="fixed btn btn-primary">
  Button
</button>
```

Note: Fixed positioning is notoriously tricky to use well and can lead to inaccessible content and unwanted side effects. Use fixed positioning with caution.

To anchor to a particular side, use `.top-0`, `.right-0`, `.bottom-0`, or `.left-0`. Margin and padding utilities can be used to space elements apart.

```html
<button class="fixed top-0 right-0 m2 btn btn-primary">
  Button
</button>
```

To fill an entire width or height, use opposing directions.

```html
<div class="fixed top-0 left-0 right-0 p2 white bg-black">
  Fixed bar
</div>
```

To ensure the desired stacking order, use z-index utilities.

```html
<div class="fixed z2 top-0 left-0 right-0 p2 white bg-black">
  Fixed bar
</div>
```

<style>
.MarkedExample .fixed { position: static }
</style>

