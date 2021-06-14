<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterDivide

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which performs element-wise division of two or more [iterators][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-ops-divide
```

</section>

<section class="usage">

## Usage

```javascript
var iterDivide = require( '@stdlib/math-iter-ops-divide' );
```

#### iterDivide( iter0, ...iterator )

Returns an [iterator][mdn-iterator-protocol] which performs element-wise division of two or more [iterators][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it1 = array2iterator( [ 3.0, 2.0 ] );
var it2 = array2iterator( [ 1.0, 4.0 ] );

var it = iterDivide( it1, it2 );
// returns <Object>

var v = it.next().value;
// returns 3.0

v = it.next().value;
// returns 0.5

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 1.0, 2.0 ] );

var it = iterDivide( arr, 4.0 );
// returns <Object>

var v = it.next().value;
// returns 0.25

v = it.next().value;
// returns 0.5

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** provided [iterators][mdn-iterator-protocol] are iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSineWave = require( '@stdlib/simulate-iter-sine-wave' );
var iterDivide = require( '@stdlib/math-iter-ops-divide' );

// Create an iterator which generates a sine wave:
var sine = iterSineWave({
    'period': 50,
    'offset': 0,
    'iter': 100
});

// Create an iterator which scales the sine wave amplitude:
var it = iterDivide( sine, 10.0 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-ops-divide.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-ops-divide

[test-image]: https://github.com/stdlib-js/math-iter-ops-divide/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-iter-ops-divide/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-ops-divide/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-ops-divide?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-ops-divide
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-ops-divide/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-ops-divide/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
