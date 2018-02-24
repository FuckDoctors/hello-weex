// { "framework": "Vue"} 

!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=81)}({81:function(t,e,o){var n,r,i=[];n=o(82);var a=o(99);if(r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=n,t.exports.el="true",new Vue(t.exports)},82:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=n(o(83)).default,i=n(o(93)).default;t.exports={components:{WxcButton:i,WxcPopup:r},data:function(){return{isShow:!1}},methods:{buttonClicked:function(){this.isShow=!0},overlayClicked:function(){this.isShow=!1}}}},83:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(84);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(r).default}})},84:function(t,e,o){var n,r,i=[];i.push(o(85)),n=o(86);var a=o(92);if(r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-8a7a1c16",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=n},85:function(t,e){t.exports={"wxc-popup":{position:"fixed",width:"750"},top:{left:0,right:0},bottom:{left:0,right:0},left:{bottom:0,top:0},right:{bottom:0,top:0}}},86:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=o(87),s=n(a),u=weex.requireModule("animation"),c=weex.config.env.platform,l="object"===("undefined"==typeof window?"undefined":i(window))&&"web"===c.toLowerCase();e.default={components:{WxcOverlay:s.default},props:{show:{type:Boolean,default:!1},pos:{type:String,default:"bottom"},popupColor:{type:String,default:"#FFFFFF"},overlayCfg:{type:Object,default:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.6}}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:750},animation:{type:Object,default:function(){return{timingFunction:"ease-in"}}}},data:function(){return{haveOverlay:!0,isOverShow:!0}},computed:{isNeedShow:function(){var t=this;return setTimeout(function(){t.appearPopup(t.show)},50),this.show},_height:function(){return this.appearPopup(this.show,150),this.height},transformValue:function(){return this.getTransform(this.pos,this.width,this.height,!0)},padStyle:function(){var t=this.pos,e=this.width,o=this.height,n=this.popupColor,i={width:e+"px",backgroundColor:n};return"top"===t&&(i=r({},i,{top:-o+"px",height:o+"px"})),"bottom"===t&&(i=r({},i,{bottom:-o+"px",height:o+"px"})),"left"===t&&(i=r({},i,{left:-e+"px"})),"right"===t&&(i=r({},i,{right:-e+"px"})),i}},methods:{handleTouchEnd:function(t){"Web"===weex.config.env.platform&&t.preventDefault&&t.preventDefault()},hide:function(){this.appearPopup(!1),this.$refs.overlay.appearOverlay(!1)},wxcOverlayBodyClicking:function(){this.isShow&&this.appearPopup(!1)},appearPopup:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.isShow=t;var n=this.$refs["wxc-popup"];n&&u.transition(n,r({styles:{transform:this.getTransform(this.pos,this.width,this.height,!t)},duration:o,delay:0},this.animation),function(){t||e.$emit("wxcPopupOverlayClicked",{pos:e.pos})})},getTransform:function(t,e,o,n){var r="top"===t||"bottom"===t?o:e,i=void 0;switch(l&&(r-=this.standOut),n&&(r=0),t){case"top":i="translateY("+r+"px)";break;case"bottom":i="translateY(-"+r+"px)";break;case"left":i="translateX("+r+"px)";break;case"right":i="translateX(-"+r+"px)"}return i}}}},87:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(88);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(r).default}})},88:function(t,e,o){var n,r,i=[];i.push(o(89)),n=o(90);var a=o(91);if(r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-2d13f519",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=n},89:function(t,e){t.exports={"wxc-overlay":{width:"750",position:"fixed",left:0,top:0,bottom:0,right:0}}},90:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=weex.requireModule("animation");e.default={props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.6},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var t=this,e=this.show;return this.hasAnimation&&setTimeout(function(){t.appearOverlay(e)},50),e}},methods:{overlayClicked:function(t){this.canAutoClose?this.appearOverlay(!1):this.$emit("wxcOverlayBodyClicked",{})},appearOverlay:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,r=this.hasAnimation,i=this.timingFunction,a=this.canAutoClose,s=!t&&a;s&&this.$emit("wxcOverlayBodyClicking",{});var u=this.$refs["wxc-overlay"];r&&u?n.transition(u,{styles:{opacity:t?1:0},duration:o,timingFunction:i[t?0:1],delay:0},function(){s&&e.$emit("wxcOverlayBodyClicked",{})}):s&&this.$emit("wxcOverlayBodyClicked",{})}}}},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.show?o("div",{ref:"wxc-overlay",staticClass:["wxc-overlay"],style:t.overlayStyle,attrs:{hack:t.shouldShow},on:{click:t.overlayClicked}}):t._e()])},staticRenderFns:[]}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{on:{touchend:t.handleTouchEnd}},[t.show?o("wxc-overlay",t._b({ref:"overlay",attrs:{show:t.haveOverlay&&t.isOverShow},on:{wxcOverlayBodyClicking:t.wxcOverlayBodyClicking}},"wxc-overlay",t.overlayCfg,!1)):t._e()],1),t.show?o("div",{ref:"wxc-popup",class:["wxc-popup",t.pos],style:t.padStyle,attrs:{height:t._height,hack:t.isNeedShow},on:{click:function(){}}},[t._t("default")],2):t._e()])},staticRenderFns:[]}},93:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(94);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(r).default}})},94:function(t,e,o){var n,r,i=[];i.push(o(95)),n=o(96);var a=o(98);if(r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-17c1dc5f",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=n},95:function(t,e){t.exports={"wxc-btn":{width:"702",height:"88",alignItems:"center",justifyContent:"center",borderRadius:"12"},"btn-text":{textOverflow:"ellipsis",lines:1,fontSize:"36",color:"#ffffff"}}},96:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=o(97);e.default={props:{text:{type:String,default:"确认"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object},computed:{mrBtnStyle:function(){var t=this.type,e=this.disabled,o=this.btnStyle,i=n({},r.STYLE_MAP[t],o);return e?n({},i,{backgroundColor:"rgba(0, 0, 0, 0.1)",borderWidth:0}):i},mrTextStyle:function(){var t=this.type,e=this.disabled,o=this.textStyle,i=n({},r.TEXT_STYLE_MAP[t],o);return e?n({},i,{color:"#FFFFFF"}):i}},methods:{onClicked:function(t){var e=this.type,o=this.disabled;this.$emit("wxcButtonClicked",{e:t,type:e,disabled:o})}}}},97:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},normal:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},highlight:{backgroundColor:"#FFFFFF",borderColor:"#EE9900",borderWidth:"1px"}},e.TEXT_STYLE_MAP={taobao:{color:"#FFFFFF"},fliggy:{color:"#3D3D3D"},normal:{color:"#3D3D3D"},highlight:{color:"#EE9900"}}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wxc-btn"],style:t.mrBtnStyle,attrs:{accessible:!0,ariaLabel:t.text},on:{click:t.onClicked}},[o("text",{staticClass:["btn-text"],style:t.mrTextStyle},[t._v(t._s(t.text))])])},staticRenderFns:[]}},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("wxc-button",{attrs:{text:"Open Popup"},on:{wxcButtonClicked:t.buttonClicked}}),o("wxc-popup",{attrs:{width:"500",pos:"left",show:t.isShow},on:{wxcPopupOverlayClicked:t.overlayClicked}})],1)},staticRenderFns:[]}}});