// { "framework": "Vue"} 

!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=57)}({0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOMAIN="fuckdoctors.github.io/hello-weex",e.ENABLE_HTTPS=!0,e.DIST="dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},57:function(t,e,r){var n,o,s=[];s.push(r(58)),n=r(59);var i=r(60);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-3ac07fda",o.style=o.style||{},s.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),t.exports=n,t.exports.el="true",new Vue(t.exports)},58:function(t,e){t.exports={"wxc-title":{marginTop:"20",flexDirection:"row",alignItems:"center"},logo:{width:"120",height:"120"},text:{fontSize:"30",fontWeight:"600",color:"#000000"}}},59:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.default={props:{logo:{type:String,default:n.LOGO},title:String}}},60:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wxc-title"],attrs:{ariaHidden:!0}},[r("image",{staticClass:["logo"],attrs:{src:t.logo}}),r("text",{staticClass:["text"]},[t._v(t._s(t.title))])])},staticRenderFns:[]}}});