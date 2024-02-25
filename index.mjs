// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpcorr@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";function n(n,m,o){var d;if(!r(n))throw new TypeError(e("1HX4b",n));if(arguments.length>1){if(!s(m))throw new TypeError(e("1HX4A",m));if(!s(o))throw new TypeError(e("1HX4B",o));d=t(n,m,o)}else d=t(n);return function(r,s){var t;if(0===arguments.length)return null===(t=d())?t:i(t);return i(d(r,s))}}export{n as default};
//# sourceMappingURL=index.mjs.map