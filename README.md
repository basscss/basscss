# BASSCSS

Part reset, part boilerplate, part framework, all minimal.

BASSCSS is a small reset and collection of simple type and layout classes that can be used as the basis for any web project. Use it out of the box or as a base for SASS @extend classes.

# Usage

## Vanilla CSS
Include `basscss.min.css` (2kb) for all the default settings or use the unminified `basscss.css` (3.2kb) and edit it how you see fit.

Adjust the font stack and add theme/skin classes to customize the look and feel.

## SASS
Import the `basscss.scss` file then use the utility classes or @extend them to build more complex components. You can also adjust several variables, including the font stack and base spacing unit.

### SASS @extend Example
    // Media Object
    .media, .media-body {
      @extend .clearfix;
    }
    .media-img {
      @extend .left, .mr1;
    }