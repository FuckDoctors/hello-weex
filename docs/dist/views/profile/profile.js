!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=70)}({32:function(e,t){e.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},34:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[e._v("Hello Weex!")]),n("text",{staticClass:["message"]},[e._v("我的主页")])])}]}},70:function(e,t,n){var r,o,s=[];s.push(n(32)),r=n(33);var c=n(34);if(o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=c.render,o.staticRenderFns=c.staticRenderFns,o._scopeId="data-v-66cae356",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(o._scopeId,s)}catch(e){}e.exports=r,e.exports.el="true",new Vue(e.exports)}});