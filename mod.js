// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,y,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,T=isNaN,k=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,a,o,l,s,f,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(u(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function A(r){var e,t,n;if(!I(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var O=Object.prototype,P=O.toString,$=O.__defineGetter__,C=O.__defineSetter__,R=O.__lookupGetter__,G=O.__lookupSetter__;var Z=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function M(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var B=U()?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[z],a=z,e=null!=(i=r)&&Y.call(i,a);try{r[z]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[z]=t:delete r[z],n}:function(r){return X.call(r)},D=Number,H=D.prototype.toString;var J=U();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function Q(r){return W(r)||K(r)}M(Q,"isPrimitive",W),M(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=D.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return r<rr&&r>er&&tr(e=r)===e;var e}function ir(r){return W(r)&&nr(r)}function ar(r){return K(r)&&nr(r.valueOf())}function or(r){return ir(r)||ar(r)}function cr(r){return ir(r)&&r>0}function ur(r){return ar(r)&&r.valueOf()>0}function lr(r){return cr(r)||ur(r)}function sr(r){return r!=r}M(or,"isPrimitive",ir),M(or,"isObject",ar),M(lr,"isPrimitive",cr),M(lr,"isObject",ur);var fr=Math.sqrt,pr="function"==typeof Float64Array;var gr="function"==typeof Float64Array?Float64Array:null;var dr="function"==typeof Float64Array?Float64Array:void 0;var hr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),t=e,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};function br(r,e,t){var n,i,a,o,c,u,l,s,f,p,g,d,h,b,v,y,m,w;if(!cr(r))throw new TypeError(A("invalid argument. First argument must be a positive integer. Value: `%s`.",r));if(n=new hr(2*r),m=r-1,u=0,l=0,v=0,b=-1,y=0,arguments.length>1){if(!W(e))throw new TypeError(A("invalid argument. Second argument must be a number. Value: `%s`.",e));if(!W(t))throw new TypeError(A("invalid argument. Third argument must be a number. Value: `%s`.",t));return s=e,f=t,E}return s=0,f=0,_;function _(e,t){var _,E,S,T,k;if(0===arguments.length)return 0===y?null:1===y?0:y<r?v/(y-1)/(p*g):v/m/(p*g);if(w=2*(b=(b+1)%r),sr(e)||sr(t))y=r,v=NaN;else{if(y<r)return n[w]=e,n[w+1]=t,u+=(d=e-s)*(e-(s+=d/(y+=1))),l+=(h=t-f)*(c=t-(f+=h/y)),v+=d*c,1===y?0:(p=fr(u/(S=y-1)),g=fr(l/S),v/S/(p*g));if(1===y)return 0;if(sr(n[w])||sr(n[w+1])){for(y=1,s=e,f=t,u=0,l=0,v=0,T=0;T<r;T++)if((k=2*T)!==w){if(_=n[k],E=n[k+1],sr(_)||sr(E)){y=r,v=NaN;break}u+=(d=_-s)*(_-(s+=d/(y+=1))),l+=(h=E-f)*(c=E-(f+=h/y)),v+=d*c}}else!1===sr(v)&&(i=n[w]-s,o=n[w+1]-f,u+=(d=(a=e-s)-i)*(i+(e-(s+=d/r))),l+=(h=(c=t-f)-o)*(o+(t-(f+=h/r))),v+=a*c-i*o-d*h/r)}return n[w]=e,n[w+1]=t,p=fr(u/m),g=fr(l/m),v/m/(p*g)}function E(e,t){var m,_;if(0===arguments.length)return 0===y?null:y<r?v/y/(p*g):v/r/(p*g);if(w=2*(b=(b+1)%r),sr(e)||sr(t))y=r,v=NaN;else{if(y<r)return n[w]=e,n[w+1]=t,l+=(h=t-f)*h,v+=(d=e-s)*h,p=fr((u+=d*d)/(y+=1)),g=fr(l/y),v/y/(p*g);if(sr(n[w])||sr(n[w+1])){for(u=0,l=0,v=0,m=0;m<r;m++)if((_=2*m)!==w){if(sr(n[_])||sr(n[_+1])){y=r,v=NaN;break}d=n[_]-s,u+=d*d,h=n[_+1]-f,l+=h*h,v+=d*h}}else!1===sr(v)&&(i=n[w]-s,a=e-s,o=n[w+1]-f,u+=(a-i)*(a+i),l+=((c=t-f)-o)*(c+o),v+=a*c-i*o)}return n[w]=e,n[w+1]=t,p=fr(u/r),g=fr(l/r),v/r/(p*g)}}function vr(r){return Math.abs(r)}function yr(r,e,t){var n;if(!cr(r))throw new TypeError(A("invalid argument. First argument must be a positive integer. Value: `%s`.",r));if(arguments.length>1){if(!W(e))throw new TypeError(A("invalid argument. Second argument must be a number. Value: `%s`.",e));if(!W(t))throw new TypeError(A("invalid argument. Third argument must be a number. Value: `%s`.",t));n=br(r,e,t)}else n=br(r);return i;function i(r,e){var t;return 0===arguments.length?null===(t=n())?t:vr(t):vr(n(r,e))}}export{yr as default};
//# sourceMappingURL=mod.js.map