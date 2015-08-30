# Contributing to Basscss

Want to help make Basscss better? Here’s how.

First off, please be courteous and respectful.
Any and all contributions are welcome, but remember to be nice :sunglasses:

## Design Principles

If you’re new to Basscss, be sure to read the [Design Principles](http://www.basscss.com/docs/reference/principles/).
Basscss is just as much about what’s not included, as it is about what it has.

## Modules

The majority of Basscss’s source code and documentation lives in individual modules and separate repositories.
Please try to open issues and pull requests in their relevant repository.

## Issues

Before opening a pull request, please inquire or make a case for any proposed changes via GitHub issues.
Include code examples and/or demos when possible.

## Feature Requests

Basscss conforms to a strict set of design principles.
This library is not meant to be exhaustive, but following this approach can dramatically reduce the amount of CSS in a project and the amount of time required to maintain a project’s stylesheets.
Before proposing changes, consider alternative ways to achieve the intent behind a design.

If you’d like to propose a change, please look through and reference any existing issues that are related.
Then, open an issue with the *Enhancement* label, links to related issues, and code demonstrating the proposal.

## Technical considerations

The core basscss/basscss repo only contains one source file [`src/basscss.css`](src/basscss.css).
The bulk of the source CSS and documentation exists in separate repos under the [basscss organization](https://github.com/basscss).
Please **do not** edit the files in the `css` folder.

Most repos build scripts are handled with npm run scripts. Type `npm run` in any repo to see the available commands.

For any questions related to compiling or building, please open an issue.

## License

By contributing your code, you agree to license your contribution under the MIT License.

