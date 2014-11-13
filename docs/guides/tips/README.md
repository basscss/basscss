# Tips and Tricks Guide

## Avoid Overrides
When using any front end framework you should avoid overriding the built in styles.
If you would like to customize the defaults, make adjustments to properties and values
before using the framework and be sure to document any changes to the default behavior.
If you do make adjustments after the framework has been set up in a project,
be cautious and notify any other contributors of those changes.

## Don't Use Contextual Selectors
Some CSS approaches suggest contextually adjusting styles. The styles in Basscss should never
be contextually adjusted because this breaks the readability of classes in markup and the ability
to make quick iterative adjustments.
One of the major advantages of Basscss's approach is the clarity of reading classes in markup
and the portability of styles.
For example, your navigation might exist in the header element today,
but future design decisions may require moving elements around.

### Don't do this
```css
header .nav {}
```

### Do this
```css
.global-nav {}
```

If you need to adjust a style in one particular place,
consider how you could make that style as reusable as possible and how those
adjustments could be made with a style extension. For example, if you want the button in your site header to
be larger and a different color from other buttons in your site, consider making extensions
like `.button-bigger` and `.button-orange`. This will help your future self and others understand
what the styles are doing without having to reference the CSS.

## Utility Styles are Immutable
The utility styles in Basscss should be considered immutable. These styles aid in scalability,
maintenance, and readability by clearing stating what they do. For example, `.block` should always
set display block and do nothing else. This is similar to the concept of doing one thing and doing it well.
If a particular style or utility doesn't suite the needs of the element it's applied to,
remove it and replace it with more appropriate styles.

### Don't do this
```css
.block {
  color: orange;
}
```

### Do this
```css
.orange {
  color: orange;
}
```

## Look Before Adding
Before writing any new styles on top of Basscss, check the source code or documentation to see
if there is already a style that will do what you need. Chances are, there is, or there is a combination
of styles that can acheive the same thing.

## Prefer Handling Complexity in Markup
Larger projects will inevitably become more complex.
Handling and maintaining that complexity in markup is much easier than adding complexity to your stylesheet.
Before abstracting combinations of styles out in to new styles,
make sure to look for patterns and think about reusability, and consider ways in which your templating engine
can DRY up your code.
If you're constantly duplicating the same markup to make something like
media player controls, those should probably be consolidated into a single partial, helper, or component.

If you're adding something like a background image, consider using inline styles if that
image will only be used in one place. There's no need to send extra CSS to pages that won't 
have this background image.

## Don't Make Assumptions
Don't make assumptions early on. Use low-level utilities and basic styles before abstracting into
monolithic CSS styles.
Over time, patterns will emerge that can inform what should be abstracted out into repeatable patterns

## Don't Nest Selectors
Don't nest selectors. It may be tempting to add a style for a parent element and all child elements together,
for example `.list-navigation li a`, but this creates a tight coupling between CSS and markup
and makes future adjustments more difficult and limits the portability of styles.

## Keep Specificity Consistent
Nesting selectors can also add unnecessary specificity that might be difficult to compensate for in the future.
By keep all styles within a certain level of specificity, everything remains more interoperable without the
need for ugly specificity hacks and overrides.

## Don't Use IDs as Selectors
Never use IDs as CSS selectors. IDs are useful to reference parts of an HTML document,
and work well as speedy JavaScript selectors, but they have limited applications in CSS.
Because only one element ID exists per document, the reusability of styles with ID selectors is inheritly limited.
IDs also create excessive specificity that will trump the majority of Basscss's styles.

## Separate Structure from Skin
Keep structure and skin separate. Things like colors, backgrounds and borders change
with the design over time and don't make a huge impact on page layout.
Keeping structural styles and skins decoupled aids in interoperability and design flexibility.

## Don't Mix Container and Content
Never use location-dependent styles. Styles should work the same no matter where they are put in the markup.
Instead of styles like `.page-header h1`, prefer styles such as `.page-heading` and apply it directly to the h1 element.

## Avoid Magic Numbers
The type scale and white space scale in Basscss are intended
to bring consistency and help normalize web designs. Type sizes should never be specified
outside of the type scale, and margins and paddings should all be handled with the white space utilities.
Making one-off adjustments to things like font sizes and margins can quickly lead to code bloat,
harder-to-read markup, and less consistent designs.

