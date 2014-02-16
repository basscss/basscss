*Needs updated for latest version*

# BASSCSS

Part reset, part boilerplate, part framework, all minimal.
http://jxnblk.github.io/basscss

BASSCSS is a small reset and collection of simple type and layout classes that can be used as the basis for any web project. Use it out of the box or as a base for a larger SASS project.

# What's Included
- Simple, responsive type scale
- Type utilities
- Margin & padding utilities
- Layout utilties

# Usage

## Vanilla CSS
Include `basscss.min.css` (2.3kb) for all the default settings or use the unminified `basscss.css` (3.2kb) and edit it how you see fit.

Adjust the font stack and add your own theme/skin classes to customize the look and feel.

## SASS
Import the `basscss.scss` file in your SASS project. You can then adjust several variables, including the font stack and base spacing unit.

# Examples

## Media Object with no new CSS

    <div class="clearfix">
        <img src="" alt="" class="left mr1" />
        <div class="clearfix">
            <h2>Boom!</h2>
            <p>See that wasn't so hard.</p>
        </div>
    </div>

## Type scale classes

    <h1 class="h2">Still semantically correct</h1>

## Responsive type classes

    <article class="responsive">
        <h1 class="h1">This heading will resize</h1>
        <h2>This one will not</h2>
        <p class="p">This paragraph will though</p>
    </article>

<small>MIT license</small>
