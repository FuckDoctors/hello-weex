// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=115)}({1:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DEV_DOMAIN="192.168.1.86:8081",e.DOMAIN="fuckdoctors.github.io/hello-weex",e.ENABLE_HTTPS=!0,e.DIST="/dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png",e.WHITE_LIST=["index","views/login/login","views/login/register","views/error","views/about"],e.USER_KEY="USER",e.GEO_KEY="GEO",e.GEO_MORE_KEY="GEO_MORE"},115:function(t,e,r){var o,n,i=[];i.push(r(116)),o=r(117);var s=r(118);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-40710808",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},116:function(t,e){t.exports={"wxc-title":{marginTop:"20",flexDirection:"row",alignItems:"center"},logo:{width:"120",height:"120"},text:{fontSize:"30",fontWeight:"600",color:"#000000"}}},117:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1);e.default={props:{logo:{type:String,default:o.LOGO},title:String}}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wxc-title"],attrs:{ariaHidden:!0}},[r("image",{staticClass:["logo"],attrs:{src:t.logo}}),r("text",{staticClass:["text"]},[t._v(t._s(t.title))])])},staticRenderFns:[]}}});