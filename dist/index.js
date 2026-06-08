"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(w,o){
var p=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/assert-is-number/dist').isPrimitive,s=require('@stdlib/stats-incr-mpcorr/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),m=require('@stdlib/math-base-special-abs/dist');function b(e,r,u){var i;if(!p(e))throw new TypeError(n('1HX4b',e));if(arguments.length>1){if(!a(r))throw new TypeError(n('1HX4A',r));if(!a(u))throw new TypeError(n('1HX4B',u));i=s(e,r,u)}else i=s(e);return c;function c(g,l){var t;return arguments.length===0?(t=i(),t===null?t:m(t)):m(i(g,l))}}o.exports=b
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
