!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="?";for(var n in e)null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t.substring(0,t.lastIndexOf("&"))}function u(e){e=e.substring(e.indexOf("?_wx_tpl"));var t={};if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),r=0;r<o.length;r++)t[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return t}function i(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function f(e,t,n,o){var i=(0,b.default)(n),f=u(weex.config.bundleUrl),s=r(f);t&&(s=r(Object.assign({},f,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":a(window))?window.location.href=""+i+e+".html"+s:y.push({url:""+i+e+".js"+s,animated:"true"},function(e){o&&o()})}function s(e,t,n){f(e,t,!0,n)}function c(e,t,n){f(e,t,!1,n)}function d(e,t,n){var o=u(e),i=r(o);t&&(i=r(Object.assign({},o,t)));var f=e.indexOf("?"),s=f>0?e.substring(0,f):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":a(window))?window.location.href=""+s+i:y.push({url:""+s+i,animated:"true"},function(e){n&&n()})}function l(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":a(window))?window.history.back():y.pop()}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=n(3),b=o(p),y=(n(0),weex.requireModule("navigator"));weex.requireModule("modal");t.default={createQuery:r,getQueryData:u,getHash:i,push:s,gotoTab:c,gotoH5:d,back:l}},3:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){var t,n,o=weex.config.bundleUrl,r=o.indexOf("file://assets/")>=0,i=o.indexOf("file:///")>=0&&o.indexOf(f.APP_NAME+".app")>0;if(r)t="file://assets/"+f.DIST+"/";else if(i)t=o.substring(0,o.lastIndexOf("/")+1);else{var s=f.DOMAIN,c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(c&&c.length>=2){var d=c[1].indexOf(":"),l=d>0?c[1].substr(0,d):c[1];s=s.indexOf(l)>-1?s:c[1]}t="http://"+s+"/"+f.DIST+"/",n="http://"+s}n=e?"http://"+f.DOMAIN+"/":"/";var a=t;return"object"===("undefined"==typeof window?"undefined":u(window))&&(a=n),a}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var i=n(0),f=o(i)},60:function(e,t,n){var o,r,u=[];u.push(n(61)),o=n(62);var i=n(63);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-7d17fd8c",r.style=r.style||{},u.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,u)}catch(e){}e.exports=o,e.exports.el="true",new Vue(e.exports)},61:function(e,t){e.exports={wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#ffffff"}}},62:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=o(r);t.default={data:function(){return{}},mounted:function(){u.default.push("app")},methods:{}}},63:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:["wrapper"]})},staticRenderFns:[]}}});