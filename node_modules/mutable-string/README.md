mutable-string [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Code Climate][code-climate-image]][code-climate-url] [![Coverage][coverage-image]][coverage-url]
============================

Keep a single instance for your strings !

[API](http://christophehurpeau.github.io/mutable-string/docs/MutableString.html)

## Quick example

```js
import MutableString from 'mutable-string'; // or var MutableString = require('mutable-string');
const mutableString = new MutableString('foobar');
mutableString.replace('foo', new MutableString('bar'));
console.log(mutableString.toString()); // barbar

```

[build-status-image]: https://circleci.com/gh/christophehurpeau/mutable-string.svg?style=svg
[build-status-url]: https://circleci.com/gh/christophehurpeau/mutable-string
[npm-image]: https://img.shields.io/npm/v/mutable-string.svg?style=flat
[npm-url]: https://npmjs.org/package/mutable-string
[coverage-image]: https://codeclimate.com/github/christophehurpeau/mutable-string/badges/coverage.svg
[coverage-url]: http://christophehurpeau.github.io/mutable-string/coverage/lcov-report/
[code-climate-image]: https://codeclimate.com/github/christophehurpeau/mutable-string/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/christophehurpeau/mutable-string
