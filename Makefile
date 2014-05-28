# All files in scss starting with basscss and ending with .scss
SOURCES=$(wildcard scss/basscss*.scss)
# Map every source name to the name of the readable build target
# 	e.g. scss/basscss.scss -> basscss.css
READABLE=$(SOURCES:scss/%.scss=%.css)
# Map every readable build target name to a minified target name
# 	e.g. basscss.css -> basscss.min.css
COMPRESSED=$(READABLE:%.css=%.min.css)

# Build all targets
all: $(READABLE) $(COMPRESSED)

# Remove all build targets
clean:
	rm -rf $(READABLE) $(COMPRESSED)

# How to build a .css target
%.css: scss/%.scss
	sass --style expanded $< $@

# How to build a .min.css target
%.min.css: scss/%.scss
	sass --style compressed $< $@
