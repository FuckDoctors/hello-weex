!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=54)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},54:function(e,t,o){var r,n,i=[];i.push(o(55)),r=o(56);var c=o(57);if(n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=c.render,n.staticRenderFns=c.staticRenderFns,n._scopeId="data-v-6bfac34d",n.style=n.style||{},i.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(n._scopeId,i)}catch(e){}e.exports=r,e.exports.el="true",new Vue(e.exports)},55:function(e,t){e.exports={"wxc-title":{marginTop:"20",flexDirection:"row",alignItems:"center"},logo:{width:"120",height:"120"},text:{fontSize:"30",fontWeight:"600",color:"#000000"}}},56:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0);t.default={props:{logo:{type:String,default:r.LOGO},title:String}}},57:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wxc-title"],attrs:{ariaHidden:!0}},[o("image",{staticClass:["logo"],attrs:{src:e.logo}}),o("text",{staticClass:["text"]},[e._v(e._s(e.title))])])},staticRenderFns:[]}}});