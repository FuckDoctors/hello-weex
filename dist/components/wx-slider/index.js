// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=123)}({123:function(e,t,r){var n,i,o=[];o.push(r(36)),n=r(37);var l=r(38);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=l.render,i.staticRenderFns=l.staticRenderFns,i._scopeId="data-v-070d37c8",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},36:function(e,t){e.exports={slider:{position:"relative",width:"750",height:"320"},"slider-item":{flex:1,flexDirection:"row"},"slider-indicator":{position:"absolute",height:"15",left:0,right:0,bottom:"10"}}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{sliders:{type:Array,default:function(){return[]}},selected:{type:Number,default:0},infinite:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},sliderStyle:{type:Object,default:function(){return{flexDirection:"row",position:"relative",width:750,height:320}}},indicatorStyle:{type:Object,default:function(){return{itemSize:"10px",itemColor:"#cccccc",itemSelectedColor:"#ffffff"}}},interval:{type:Number,default:2e3}},data:function(){return{selectedIndex:0}},methods:{change:function(e){this.$emit("change",e)}}}},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["slider-wrapper"]},[r("slider",{staticClass:["slider"],style:e.sliderStyle,attrs:{interval:e.interval,autoPlay:e.autoPlay,showIndicators:e.showIndicators,infinite:e.infinite,scrollable:e.scrollable,index:e.selected},on:{change:e.change}},[e._t("default"),e.showIndicators?r("indicator",{staticClass:["slider-indicator"],style:e.indicatorStyle}):e._e()],2)])},staticRenderFns:[]}}});