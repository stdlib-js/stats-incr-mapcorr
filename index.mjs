// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpcorr@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";function n(n,m,o){var d;if(!s(n))throw new TypeError(e("1HX4b,Ht",n));if(arguments.length>1){if(!r(m))throw new TypeError(e("1HX4A,Hr",m));if(!r(o))throw new TypeError(e("1HX4B,Hu",o));d=t(n,m,o)}else d=t(n);return l;function l(s,r){var t;return 0===arguments.length?null===(t=d())?t:i(t):i(d(s,r))}}export{n as default};
//# sourceMappingURL=index.mjs.map
