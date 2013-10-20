# BASSCSS

Part reset, part boilerplate, part framework, all minimal.
http://jxnblk.github.io/basscss

BASSCSS is a small reset and collection of simple type and layout classes that can be used as the basis for any web project. Use it out of the box or as a base for a larger SASS project.

# Usage

## Vanilla CSS
Include `basscss.min.css` (2kb) for all the default settings or use the unminified `basscss.css` (3.2kb) and edit it how you see fit.

Adjust the font stack and add theme/skin classes to customize the look and feel.

## SASS
Import the `basscss.scss` file then use the utility classes or @extend them to build more complex components. You can also adjust several variables, including the font stack and base spacing unit.

### SASS @extend Example
*Use this with caution. It's really easy to make your CSS hairy using @extend.*

    // Media Object
    .media, .media-body {
      @extend .clearfix;
    }
    .media-img {
      @extend .left, .mr1;
    }

# Or...
## Do it the awesome way and don't write any CSS

### Need a media object?

    <div class="clearfix">
        <img src="" alt="" class="left mr1" />
        <div class="clearfix">
            <h2>Boom!</h2>
            <p>See that wasn't so hard.</p>
        </div>
    </div>

### Is that semantically correct h1 just a tad too large?

    <h1 class="h2">Still semantically correct</h1>

### Want your type to scale up beyond mobile sizes?

    <article class="responsive">
        <h1 class="h1">This heading will resize</h1>
        <h2>This one will not</h2>
        <p class="p">This paragraph will though</p>
    </article>
