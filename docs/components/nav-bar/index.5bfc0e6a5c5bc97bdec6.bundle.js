webpackJsonp([5],{10:function(t,e,i){var o=i(11);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("5c702568",o,!0)},11:function(t,e,i){e=t.exports=i(1)(!1),e.push([t.i,".nav-wrapper[data-v-dfb5509a]{width:750px;align-items:flex-start}",""])},12:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=i(8),r=o(l),n=i(50),a=o(n),s=i(17),c=o(s);e.default={components:{WxcMinibar:a.default},props:{title:{type:String,default:"Title here..."},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:r.default.env.isWeb()?"auto":c.default.getNavHeight(),paddingTop:r.default.env.isWeb()?0:c.default.getNavHeight()-90}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},13:function(t,e,i){var o=i(14);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("50bb94d4",o,!0)},14:function(t,e,i){e=t.exports=i(1)(!1),e.push([t.i,".wxc-minibar[data-v-3776603e]{width:750px;height:90px;flex-direction:row;justify-content:space-between;align-items:center;background-color:#009ff0}.left[data-v-3776603e]{width:180px;padding-left:32px}.middle-title[data-v-3776603e]{font-size:30px;color:#fff;height:36px;line-height:34px}.right[data-v-3776603e]{width:180px;padding-right:32px;align-items:flex-end}.left-button[data-v-3776603e]{width:21px;height:36px}.right-button[data-v-3776603e]{width:32px;height:32px}.icon-text[data-v-3776603e]{font-size:28px;color:#fff}",""])},15:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&o.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"wxc-minibar",staticStyle:t.$processStyle(void 0),style:t.$processStyle({backgroundColor:t.backgroundColor})},[i("div",{staticClass:"left",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{"aria-label":"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?i("image",{staticClass:"left-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.leftButton}}):t._e(),t._v(" "),t.leftText?i("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.leftText))]):t._e()])],2),t._v(" "),t._t("middle",[i("text",{staticClass:"middle-title",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"right",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?i("image",{staticClass:"right-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.rightButton,"aria-hidden":!0}}):t._e(),t._v(" "),t.rightText?i("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},17:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=i(8),r=o(l),n={getNavHeight:function(){return r.default.env.isWeb()?0:r.default.env.isIPhoneX()?176:132}};e.default=n},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(t.wrapperStyle)},[i("wxc-minibar",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{title:t.title,"background-color":t.backgroundColor,"text-color":t.textColor,"left-button":t.leftButton,"right-text":t.rightText,"right-button":t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},51:function(t,e,i){function o(t){i(13)}var l=i(0)(i(15),i(16),o,"data-v-3776603e",null);t.exports=l.exports},87:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var l=i(4),r=o(l);o(i(5)).default.init(r.default);var n=i(9);n.el="#root",new r.default(n)},9:function(t,e,i){function o(t){i(10)}var l=i(0)(i(12),i(18),o,"data-v-dfb5509a",null);t.exports=l.exports}},[87]);
//# sourceMappingURL=index.5bfc0e6a5c5bc97bdec6.bundle.map