<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmapcorr

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] incrementally.

<section class="intro">

The [Pearson product-moment correlation coefficient][pearson-correlation] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:pearson_correlation_coefficient" align="center" raw="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" alt="Equation for the Pearson product-moment correlation coefficient."> -->

```math
\rho_{X,Y} = \frac{\mathop{\mathrm{cov}}(X,Y)}{\sigma_X \sigma_Y}
```

<!-- <div class="equation" align="center" data-raw-text="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" data-equation="eq:pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7c0cbc398c5e64614baf47cf5c6259b93c0ffce/lib/node_modules/@stdlib/stats/incr/mapcorr/docs/img/equation_pearson_correlation_coefficient.svg" alt="Equation for the Pearson product-moment correlation coefficient.">
    <br>
</div> -->

<!-- </equation> -->

where the numerator is the [covariance][covariance] and the denominator is the product of the respective standard deviations.

For a sample of size `W`, the sample [Pearson product-moment correlation coefficient][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:sample_pearson_correlation_coefficient" align="center" raw="r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" alt="Equation for the sample Pearson product-moment correlation coefficient."> -->

```math
r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}
```

<!-- <div class="equation" align="center" data-raw-text="r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" data-equation="eq:sample_pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7c0cbc398c5e64614baf47cf5c6259b93c0ffce/lib/node_modules/@stdlib/stats/incr/mapcorr/docs/img/equation_sample_pearson_correlation_coefficient.svg" alt="Equation for the sample Pearson product-moment correlation coefficient.">
    <br>
</div> -->

<!-- </equation> -->

The sample **absolute** [Pearson product-moment correlation coefficient][pearson-correlation] is thus defined as the absolute value of the sample [Pearson product-moment correlation coefficient][pearson-correlation].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmapcorr from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mapcorr@v0.2.1-deno/mod.js';
```

#### incrmapcorr( window\[, mx, my] )

Returns an accumulator `function` which incrementally computes a moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation]. The `window` parameter defines the number of values over which to compute the moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrmapcorr( 3 );
```

If means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrmapcorr( 3, 5.0, -3.14 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated accumulated value. If not provided input values `x` and `y`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrmapcorr( 3 );

var ar = accumulator();
// returns null

// Fill the window...
ar = accumulator( 2.0, 1.0 ); // [(2.0, 1.0)]
// returns 0.0

ar = accumulator( -5.0, 3.14 ); // [(2.0, 1.0), (-5.0, 3.14)]
// returns ~1.0

ar = accumulator( 3.0, -1.0 ); // [(2.0, 1.0), (-5.0, 3.14), (3.0, -1.0)]
// returns ~0.925

// Window begins sliding...
ar = accumulator( 5.0, -9.5 ); // [(-5.0, 3.14), (3.0, -1.0), (5.0, -9.5)]
// returns ~0.863

ar = accumulator( -5.0, 1.5 ); // [(3.0, -1.0), (5.0, -9.5), (-5.0, 1.5)]
// returns ~0.803

ar = accumulator();
// returns ~0.803
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   In comparison to the sample [Pearson product-moment correlation coefficient][pearson-correlation], the sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] is useful when only concerned with the strength of the correlation and not the direction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import incrmapcorr from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mapcorr@v0.2.1-deno/mod.js';

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrmapcorr( 5 );

// For each simulated datum, update the moving sample absolute correlation coefficient...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/apcorr`][@stdlib/stats/incr/apcorr]</span><span class="delimiter">: </span><span class="description">compute a sample absolute Pearson product-moment correlation coefficient.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mpcorr`][@stdlib/stats/incr/mpcorr]</span><span class="delimiter">: </span><span class="description">compute a moving sample Pearson product-moment correlation coefficient incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mpcorr2`][@stdlib/stats/incr/mpcorr2]</span><span class="delimiter">: </span><span class="description">compute a moving squared sample Pearson product-moment correlation coefficient incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mapcorr.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mapcorr

[test-image]: https://github.com/stdlib-js/stats-incr-mapcorr/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-incr-mapcorr/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mapcorr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mapcorr?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mapcorr.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mapcorr/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mapcorr/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mapcorr/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mapcorr/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mapcorr/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mapcorr/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mapcorr/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mapcorr/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mapcorr/main/LICENSE

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[covariance]: https://en.wikipedia.org/wiki/Covariance

<!-- <related-links> -->

[@stdlib/stats/incr/apcorr]: https://github.com/stdlib-js/stats-incr-apcorr/tree/deno

[@stdlib/stats/incr/mpcorr]: https://github.com/stdlib-js/stats-incr-mpcorr/tree/deno

[@stdlib/stats/incr/mpcorr2]: https://github.com/stdlib-js/stats-incr-mpcorr2/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
