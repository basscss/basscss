
These flexbox-based utilities can replace the need for a grid system in many instances, and provide powerful constraint-based micro-layout solutions.
To learn more about the flexbox module, see [Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and the [CSS Flexible Box Layout Module Specification](https://www.w3.org/TR/css-flexbox-1/).

To set a container to display flex, add the `.flex` class.

```
<div class="flex">
  <div>Hamburger</div>
  <div>Hot Dog</div>
</div>
```

To set a container to display flex at certain breakpoints, use the `.sm-flex`, `.md-flex`, and `.lg-flex` styles.

```
<div class="sm-flex">
  <div>Hamburger</div>
  <div>Hot Dog</div>
</div>
<div class="md-flex">
  <div>Hamburger</div>
  <div>Hot Dog</div>
</div>
<div class="lg-flex">
  <div>Hamburger</div>
  <div>Hot Dog</div>
</div>
```

To set a flexbox container to column direction, use `.flex-column`.

```
<div class="flex flex-column">
  <span>Hamburger</span>
  <span>Hot Dog</span>
</div>
```

To enable wrapping of flexbox containers, use `.flex-wrap`.

```
<div class="flex flex-wrap">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
```

To set a flexbox item to automatically fill the available space, use the `flex-auto` utility.

```
<div class="flex">
  <div class="flex-auto">Hamburger</div>
  <div>Hot Dog</div>
</div>
```

To prevent a flexbox item from growing or shrinking, use the `flex-none` utility.

```
<div class="flex">
  <div class="flex-none">Hamburger</div>
  <div>Hot Dog</div>
</div>
```

To control alignment of flexbox items, use the `align-items` utilities. These styles uses a shorthand naming convention `start` and `end` for the `flex-start` and `flex-end` values.

```
<div class="flex align-items-start">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-end">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-center">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-baseline">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-stretch">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
```

To align flexbox items on an item-by-item basis, use the `align-self` utilities. These override values set by the `align-items` property.

```
<div class="flex align-items-center">
  <h1 class="align-self-start">Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-center">
  <h1 class="align-self-end">Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-start">
  <h1 class="align-self-center">Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-center">
  <h1 class="align-self-baseline">Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex align-items-center">
  <h1 class="align-self-stretch">Hamburger</h1>
  <div>Hot Dog</div>
</div>
```

To control the spacing for items on the main axis, use the `justify-content` utilities. These styles use a shorhand naming convention `around` and `between` for the `space-around` and `space-between` values.

```
<div class="flex justify-start">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex justify-end">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex justify-center">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex justify-between">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
<div class="flex justify-around">
  <h1>Hamburger</h1>
  <div>Hot Dog</div>
</div>
```

To align items along the cross-axis, use the `align-content` utilities.

```
<div class="flex flex-wrap align-content-start">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
<div class="flex flex-wrap align-content-end">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
<div class="flex flex-wrap align-content-center">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
<div class="flex flex-wrap align-content-between">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
<div class="flex flex-wrap align-content-around">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
<div class="flex flex-wrap align-content-stretch">
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
  <div>Hamburger</div>
</div>
```

To change the order of flexbox items, use the `order` utilities.

```
<div class="flex">
  <div class="order-2">.order-2</div>
  <div class="order-1">.order-2</div>
  <div class="order-last">.order-2</div>
  <div class="order-3">.order-2</div>
  <div class="order-0">.order-2</div>
</div>
```

