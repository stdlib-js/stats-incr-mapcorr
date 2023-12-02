// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,w,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,T=isNaN,k=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,a,o,l,s,f,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function V(e){var r,t,n;if(!A(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var O=Object.prototype,P=O.toString,$=O.__defineGetter__,C=O.__defineSetter__,R=O.__lookupGetter__,H=O.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||H.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function X(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",z=W()?function(e){var r,t,n,i,a;if(null==e)return L.call(e);t=e[q],a=q,r=null!=(i=e)&&U.call(i,a);try{e[q]=void 0}catch(r){return L.call(e)}return n=L.call(e),r?e[q]=t:delete e[q],n}:function(e){return L.call(e)},B=Number,D=B.prototype.toString,J=W();function K(e){return"object"==typeof e&&(e instanceof B||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function Q(e){return Z(e)||K(e)}X(Q,"isPrimitive",Z),X(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=B.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return e<ee&&e>re&&te(r=e)===r;var r}function ie(e){return Z(e)&&ne(e)}function ae(e){return K(e)&&ne(e.valueOf())}function oe(e){return ie(e)||ae(e)}function ce(e){return ie(e)&&e>0}function ue(e){return ae(e)&&e.valueOf()>0}function le(e){return ce(e)||ue(e)}function se(e){return e!=e}X(oe,"isPrimitive",ie),X(oe,"isObject",ae),X(le,"isPrimitive",ce),X(le,"isObject",ue);var fe=Math.sqrt,pe="function"==typeof Float64Array,ge="function"==typeof Float64Array?Float64Array:null,de="function"==typeof Float64Array?Float64Array:void 0,he=function(){var e,r,t;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,NaN]),t=r,e=(pe&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function be(e,r,t){var n,i,a,o,c,u,l,s,f,p,g,d,h,b,y,w,v,m;if(!ce(e))throw new TypeError(V("invalid argument. First argument must be a positive integer. Value: `%s`.",e));if(n=new he(2*e),v=e-1,u=0,l=0,y=0,b=-1,w=0,arguments.length>1){if(!Z(r))throw new TypeError(V("invalid argument. Second argument must be a number. Value: `%s`.",r));if(!Z(t))throw new TypeError(V("invalid argument. Third argument must be a number. Value: `%s`.",t));return s=r,f=t,E}return s=0,f=0,_;function _(r,t){var _,E,S,T,k;if(0===arguments.length)return 0===w?null:1===w?0:w<e?y/(w-1)/(p*g):y/v/(p*g);if(m=2*(b=(b+1)%e),se(r)||se(t))w=e,y=NaN;else{if(w<e)return n[m]=r,n[m+1]=t,u+=(d=r-s)*(r-(s+=d/(w+=1))),l+=(h=t-f)*(c=t-(f+=h/w)),y+=d*c,1===w?0:(p=fe(u/(S=w-1)),g=fe(l/S),y/S/(p*g));if(1===w)return 0;if(se(n[m])||se(n[m+1])){for(w=1,s=r,f=t,u=0,l=0,y=0,T=0;T<e;T++)if((k=2*T)!==m){if(_=n[k],E=n[k+1],se(_)||se(E)){w=e,y=NaN;break}u+=(d=_-s)*(_-(s+=d/(w+=1))),l+=(h=E-f)*(c=E-(f+=h/w)),y+=d*c}}else!1===se(y)&&(i=n[m]-s,o=n[m+1]-f,u+=(d=(a=r-s)-i)*(i+(r-(s+=d/e))),l+=(h=(c=t-f)-o)*(o+(t-(f+=h/e))),y+=a*c-i*o-d*h/e)}return n[m]=r,n[m+1]=t,p=fe(u/v),g=fe(l/v),y/v/(p*g)}function E(r,t){var v,_;if(0===arguments.length)return 0===w?null:w<e?y/w/(p*g):y/e/(p*g);if(m=2*(b=(b+1)%e),se(r)||se(t))w=e,y=NaN;else{if(w<e)return n[m]=r,n[m+1]=t,l+=(h=t-f)*h,y+=(d=r-s)*h,p=fe((u+=d*d)/(w+=1)),g=fe(l/w),y/w/(p*g);if(se(n[m])||se(n[m+1])){for(u=0,l=0,y=0,v=0;v<e;v++)if((_=2*v)!==m){if(se(n[_])||se(n[_+1])){w=e,y=NaN;break}d=n[_]-s,u+=d*d,h=n[_+1]-f,l+=h*h,y+=d*h}}else!1===se(y)&&(i=n[m]-s,a=r-s,o=n[m+1]-f,u+=(a-i)*(a+i),l+=((c=t-f)-o)*(c+o),y+=a*c-i*o)}return n[m]=r,n[m+1]=t,p=fe(u/e),g=fe(l/e),y/e/(p*g)}}function ye(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function we(e){return Math.abs(e)}return function(e,r,t){var n;if(!ce(e))throw new TypeError(ye("1HX4b,Ht",e));if(arguments.length>1){if(!Z(r))throw new TypeError(ye("1HX4A,Hr",r));if(!Z(t))throw new TypeError(ye("1HX4B,Hu",t));n=be(e,r,t)}else n=be(e);return i;function i(e,r){var t;return 0===arguments.length?null===(t=n())?t:we(t):we(n(e,r))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmapcorr=r();
//# sourceMappingURL=browser.js.map
