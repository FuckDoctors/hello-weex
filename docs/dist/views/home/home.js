!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=68)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="?";for(var n in e)null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t.substring(0,t.lastIndexOf("&"))}function i(e){e=e.substring(e.indexOf(".js?")+3);var t={};if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),r=0;r<o.length;r++)t[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return t}function u(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function f(e,t,n,o){var u=(0,b.default)(n),f=i(weex.config.bundleUrl),s=r(f);t&&(s=r(Object.assign({},f,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+u+e+".html"+s:y.push({url:""+u+e+".js"+s,animated:"true"},function(e){o&&o()})}function s(e,t,n){f(e,t,!0,n)}function c(e,t,n){f(e,t,!1,n)}function a(e,t,n){var o=i(e),u=r(o);t&&(u=r(Object.assign({},o,t)));var f=e.indexOf("?"),s=f>0?e.substring(0,f):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+s+u:y.push({url:""+s+u,animated:"true"},function(e){n&&n()})}function l(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():y.pop()}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=n(2),b=o(p),y=(n(0),weex.requireModule("navigator"));weex.requireModule("modal");t.default={createQuery:r,getQueryData:i,getHash:u,push:s,gotoTab:c,gotoH5:a,back:l}},2:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){var t,n,o=weex.config.bundleUrl,r=o.indexOf("file://assets/")>=0,u=o.indexOf("file:///")>=0&&o.indexOf(f.APP_NAME+".app")>0;if(r)t="file://assets/"+f.DIST+"/";else if(u)t=o.substring(0,o.lastIndexOf("/")+1);else{var s=f.DOMAIN,c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);c&&c.length>=2&&(s=c[1]),t="http://"+s+"/"+f.DIST+"/",n="http://"+s}var n=e?"http://"+f.DOMAIN+"/":"/",a=t;return"object"===("undefined"==typeof window?"undefined":i(window))&&(a=n),a}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var u=n(0),f=o(u)},23:function(e,t){e.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41b883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),u=n(0);t.default={data:function(){return{}},methods:{jump:function(e){"Web"===WXEnvironment.platform?i.default.gotoH5("http://"+u.DOMAIN+"/"+e+".html"):i.default.gotoH5("http://"+u.DOMAIN+"/"+u.DIST+"/"+e+".js")}}}},25:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[e._v("Hello Weex!")]),n("text",{staticClass:["message"]},[e._v("Home page.")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump("views/test/hello")}}},[e._v("跳转")])])},staticRenderFns:[]}},68:function(e,t,n){var o,r,i=[];i.push(n(23)),o=n(24);var u=n(25);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=u.render,r.staticRenderFns=u.staticRenderFns,r._scopeId="data-v-b179bb3c",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(e){}e.exports=o,e.exports.el="true",new Vue(e.exports)}});