// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=81)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t="?";return Object.keys(e).forEach(function(n){null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&")}),t.substring(0,t.lastIndexOf("&"))}function r(e){var t=e.substring(e.indexOf("?_wx_tpl")),n={};if(-1!==t.indexOf("?"))for(var o=t.substr(1),i=o.split("&"),r=0;r<i.length;r+=1)n[i[r].split("=")[0]]=decodeURIComponent(i[r].split("=")[1]);return n}function s(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function u(e,t,n,o){var s=(0,m.default)(n),u=r(weex.config.bundleUrl),f=i(u);t&&(f=i(Object.assign({},u,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+s+e+".html"+f:g.push({url:""+s+e+".js"+f,animated:"true"},function(e){o&&o(e)})}function f(e,t,n){u(e,t,!0,n)}function a(e,t,n){u(e,t,!1,n)}function c(e,t,n){var o=r(e),s=i(o);t&&(s=i(Object.assign({},o,t)));var u=e.indexOf("?"),f=u>0?e.substring(0,u):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+f+s:g.push({url:""+f+s,animated:"true"},function(e){n&&n(e)})}function l(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():g.pop()}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=n(3),m=o(p),g=weex.requireModule("navigator");t.default={createQuery:i,getQueryData:r,getHash:s,push:f,gotoTab:a,gotoH5:c,back:l}},3:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){var t=weex.config.bundleUrl,n=void 0,o=void 0,i=t.indexOf("file://assets/")>=0,s=t.indexOf("file:///")>=0&&t.indexOf(u.APP_NAME+".app")>0;if(i)n="file://assets/"+u.DIST+"/";else if(s)n=t.substring(0,t.lastIndexOf("/")+1);else{var f=u.DOMAIN,a=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(a&&a.length>=2){var c=a[1].indexOf(":"),l=c>0?a[1].substr(0,c):a[1];f=f.indexOf(l)>-1?f:a[1]}n="http://"+f+"/"+u.DIST+"/",o="http://"+f}o=e?"http://"+u.DOMAIN+"/":"/";var d=n;return"object"===("undefined"==typeof window?"undefined":r(window))&&(d=o),d}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var s=n(0),u=o(s)},81:function(e,t,n){var o,i,r=[];r.push(n(82)),o=n(83);var s=n(84);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-4d4f1f64",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o,e.exports.el="true",new Vue(e.exports)},82:function(e,t){e.exports={wrapper:{justifyContent:"center",alignItems:"center"},logo:{width:"424",height:"200"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},83:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=o(i),s=n(0),u=weex.requireModule("navigator"),f=weex.requireModule("modal");t.default={data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"}},methods:{jump:function(){u.push({url:"http://192.168.1.86:8081/dist/views/home/home.js",animated:"true"},function(e){f.alert({message:e})})},jump2:function(e){r.default.push(e)},jump3:function(e){r.default.gotoH5("http://"+s.DOMAIN+"/"+s.DIST+"/"+e+".js")},jump4:function(e){r.default.gotoH5("http://"+s.DOMAIN+"/"+e+".html")}}}},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("image",{staticClass:["logo"],attrs:{src:e.logo}}),n("text",{staticClass:["greeting"]},[e._v("The environment is ready!")]),n("text",{staticClass:["message"]},[e._v("Now, let's use Vue.js to build your Weex app.")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump("views/home/home.js")}}},[e._v("Jump")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump2("views/home/home")}}},[e._v("helper")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump3("views/home/home")}}},[e._v("helper url native")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump4("views/home/home")}}},[e._v("helper url html")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump2("views/test/weex-ui")}}},[e._v("weex ui")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump3("views/test/weex-ui")}}},[e._v("weex ui native")])])},staticRenderFns:[]}}});