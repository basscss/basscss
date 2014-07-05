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
View the full documentation with inline examples at:

http://basscss.com/docs

---

# Guide to Web Design
For more on web design with BASSCSS, read the guide:

http://basscss.com/docs/guide

---

## New in v3
- Grid System
- Table Object
- Nav Component
- Table Styles
- Global Sass variables
- Simpler type scale styles

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

