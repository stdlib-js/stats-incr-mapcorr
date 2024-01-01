// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpcorr@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";function n(n,m,a){var d;if(!e(n))throw new TypeError(s("invalid argument. First argument must be a positive integer. Value: `%s`.",n));if(arguments.length>1){if(!t(m))throw new TypeError(s("invalid argument. Second argument must be a number. Value: `%s`.",m));if(!t(a))throw new TypeError(s("invalid argument. Third argument must be a number. Value: `%s`.",a));d=r(n,m,a)}else d=r(n);return o;function o(e,t){var r;return 0===arguments.length?null===(r=d())?r:i(r):i(d(e,t))}}export{n as default};
//# sourceMappingURL=index.mjs.map
