// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpcorr@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(n,m,o){var d;if(!s(n))throw new TypeError(e("0df4o",n));if(arguments.length>1){if(!r(m))throw new TypeError(e("0df4N",m));if(!r(o))throw new TypeError(e("0df4O",o));d=t(n,m,o)}else d=t(n);return l;function l(s,r){var t;return 0===arguments.length?null===(t=d())?t:i(t):i(d(s,r))}}export{n as default};
//# sourceMappingURL=index.mjs.map
