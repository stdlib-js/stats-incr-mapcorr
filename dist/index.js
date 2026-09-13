"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=f(function(w,o){
var p=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/assert-is-number/dist').isPrimitive,s=require('@stdlib/stats-incr-mpcorr/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),m=require('@stdlib/math-base-special-abs/dist');function b(e,r,i){var t;if(!p(e))throw new TypeError(n('1HX4b',e));if(arguments.length>1){if(!a(r))throw new TypeError(n('1HX4A',r));if(!a(i))throw new TypeError(n('1HX4B',i));t=s(e,r,i)}else t=s(e);return c;function c(g,l){var u;return arguments.length===0?(u=t(),u===null?u:m(u)):m(t(g,l))}}o.exports=b
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
