// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,l){var f,c,p,y;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(r,t)||a.call(r,t)?(f=r.__proto__,r.__proto__=e,delete r[t],r[t]=l.value,r.__proto__=f):r[t]=l.value),p="get"in l,y="set"in l,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(r,t,l.get),y&&i&&i.call(r,t,l.set),r};function f(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function c(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",v=y()?function(r){var t,e,n,o,i;if(null==r)return b.call(r);e=r[m],i=m,t=null!=(o=r)&&s.call(o,i);try{r[m]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[m]=e:delete r[m],n}:function(r){return b.call(r)},d=Number,g=d.prototype.toString,h=y();function _(r){return"object"==typeof r&&(r instanceof d||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Number]"===v(r)))}function w(r){return c(r)||_(r)}f(w,"isPrimitive",c),f(w,"isObject",_);var j=Number.POSITIVE_INFINITY,N=d.NEGATIVE_INFINITY,T=Math.floor;function S(r){return r<j&&r>N&&T(t=r)===t;var t}function E(r){return c(r)&&S(r)}function O(r){return _(r)&&S(r.valueOf())}function A(r){return E(r)||O(r)}function F(r){return E(r)&&r>0}function I(r){return O(r)&&r.valueOf()>0}function P(r){return F(r)||I(r)}function V(r){return r!=r}f(A,"isPrimitive",E),f(A,"isObject",O),f(P,"isPrimitive",F),f(P,"isObject",I);var H=Math.sqrt,k="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0,M=function(){var r,t,e;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),e=t,r=(k&&e instanceof Float64Array||"[object Float64Array]"===v(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};function X(r,t,e){var n,o,i,u,a,l,f,p,y,b,s,m,v,d,g,h,_,w;if(!F(r))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.");if(n=new M(2*r),_=r-1,l=0,f=0,g=0,d=-1,h=0,arguments.length>1){if(!c(t))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+t+"`.");if(!c(e))throw new TypeError("invalid argument. Third argument must be a number primitive. Value: `"+e+"`.");return p=t,y=e,N}return p=0,y=0,j;function j(t,e){var c,j,N,T,S;if(0===arguments.length)return 0===h?null:1===h?0:h<r?g/(h-1)/(b*s):g/_/(b*s);if(w=2*(d=(d+1)%r),V(t)||V(e))h=r,g=NaN;else{if(h<r)return n[w]=t,n[w+1]=e,l+=(m=t-p)*(t-(p+=m/(h+=1))),f+=(v=e-y)*(a=e-(y+=v/h)),g+=m*a,1===h?0:(b=H(l/(N=h-1)),s=H(f/N),g/N/(b*s));if(1===h)return 0;if(V(n[w])||V(n[w+1])){for(h=1,p=t,y=e,l=0,f=0,g=0,T=0;T<r;T++)if((S=2*T)!==w){if(c=n[S],j=n[S+1],V(c)||V(j)){h=r,g=NaN;break}l+=(m=c-p)*(c-(p+=m/(h+=1))),f+=(v=j-y)*(a=j-(y+=v/h)),g+=m*a}}else!1===V(g)&&(o=n[w]-p,u=n[w+1]-y,l+=(m=(i=t-p)-o)*(o+(t-(p+=m/r))),f+=(v=(a=e-y)-u)*(u+(e-(y+=v/r))),g+=i*a-o*u-m*v/r)}return n[w]=t,n[w+1]=e,b=H(l/_),s=H(f/_),g/_/(b*s)}function N(t,e){var c,_;if(0===arguments.length)return 0===h?null:h<r?g/h/(b*s):g/r/(b*s);if(w=2*(d=(d+1)%r),V(t)||V(e))h=r,g=NaN;else{if(h<r)return n[w]=t,n[w+1]=e,f+=(v=e-y)*v,g+=(m=t-p)*v,b=H((l+=m*m)/(h+=1)),s=H(f/h),g/h/(b*s);if(V(n[w])||V(n[w+1])){for(l=0,f=0,g=0,c=0;c<r;c++)if((_=2*c)!==w){if(V(n[_])||V(n[_+1])){h=r,g=NaN;break}m=n[_]-p,l+=m*m,v=n[_+1]-y,f+=v*v,g+=m*v}}else!1===V(g)&&(o=n[w]-p,i=t-p,u=n[w+1]-y,l+=(i-o)*(i+o),f+=((a=e-y)-u)*(a+u),g+=i*a-o*u)}return n[w]=t,n[w+1]=e,b=H(l/r),s=H(f/r),g/r/(b*s)}}function C(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Y(r){return Math.abs(r)}return function(r,t,e){var n;if(!F(r))throw new TypeError(C("1HX4b,Ht",r));if(arguments.length>1){if(!c(t))throw new TypeError(C("1HX4A,Hr",t));if(!c(e))throw new TypeError(C("1HX4B,Hu",e));n=X(r,t,e)}else n=X(r);return o;function o(r,t){var e;return 0===arguments.length?null===(e=n())?e:Y(e):Y(n(r,t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmapcorr=t();
//# sourceMappingURL=browser.js.map
