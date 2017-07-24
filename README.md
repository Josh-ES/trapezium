trapezium
===

Trapezium is a simple library for positioning popups relative to elements on the page. You pass a JavaScript or jQuery element object to the method, and it tells you which side of the element has the most space, which side out of left and right has the most space, and which side out of top and bottom has the most space.

[![Version][npm-image]][npm-url] [![Travis][travis-ci-image]][travis-ci-url]

Quick Start
---

Install the package using NPM or Yarn:

```shell
npm install --save trapezium
# or
yarn add trapezium
```

Then, import it into a JavaScript file:

```js
import trapezium from "trapezium";

const result = trapezium(element);
```

The result will look something like this:

```js
{
    horizontal: "left", // left-hand side has more space than right-hand side
    vertical: "top",    // more space on the top than on the bottom
    best: "top"         // the top of the element has the most space
}
```

You can then use that information to inform the positioning of a popup, tooltip, or other element that overlays the window and points to the passed `element`.

[npm-image]: https://img.shields.io/npm/v/trapezium.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/trapezium

[travis-ci-image]: https://img.shields.io/travis/Josh-ES/trapezium.svg?style=flat-square
[travis-ci-url]: https://travis-ci.org/Josh-ES/trapezium