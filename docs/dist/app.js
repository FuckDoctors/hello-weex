!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=47)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOMAIN="fuckdoctors.github.io/hello-weex",e.DIST="dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){var e="?";for(var n in t)null!==t[n]&&(e+=n+"="+encodeURIComponent(t[n])+"&");return e.substring(0,e.lastIndexOf("&"))}function i(t){t=t.substring(t.indexOf(".js?")+3);var e={};if(-1!=t.indexOf("?"))for(var n=t.substr(1),o=n.split("&"),r=0;r<o.length;r++)e[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return e}function a(t){var e=t.indexOf("#"),n=e>0?t.substring(e,t.length):"",o=t.indexOf("?");return o>0?n.substring(0,o):n}function s(t,e,n,o){var a=(0,g.default)(n),s=i(weex.config.bundleUrl),c=r(s);e&&(c=r(Object.assign({},s,e))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+a+t+".html"+c:h.push({url:""+a+t+".js"+c,animated:"true"},function(t){o&&o()})}function c(t,e,n){s(t,e,!0,n)}function l(t,e,n){s(t,e,!1,n)}function u(t,e,n){var o=i(t),a=r(o);e&&(a=r(Object.assign({},o,e)));var s=t.indexOf("?"),c=s>0?t.substring(0,s):t;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+c+a:h.push({url:""+c+a,animated:"true"},function(t){n&&n()})}function f(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():h.pop()}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=n(2),g=o(p),h=(n(0),weex.requireModule("navigator"));weex.requireModule("modal");e.default={createQuery:r,getQueryData:i,getHash:a,push:c,gotoTab:l,gotoH5:u,back:f}},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){var e,n,o=weex.config.bundleUrl,r=o.indexOf("file://assets/")>=0,a=o.indexOf("file:///")>=0&&o.indexOf(s.APP_NAME+".app")>0;if(r)e="file://assets/"+s.DIST+"/";else if(a)e=o.substring(0,o.lastIndexOf("/")+1);else{var c=s.DOMAIN,l=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);l&&l.length>=2&&(c=l[1]),e="http://"+c+"/"+s.DIST+"/",n="http://"+c}var n=t?"http://"+s.DOMAIN+"/":"/",u=e;return"object"===("undefined"==typeof window?"undefined":i(window))&&(u=n),u}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=r;var a=n(0),s=o(a)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(14),s=o(a),c={UrlParser:s.default,_typeof:function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},isPlainObject:function(t){return"object"===c._typeof(t)},isString:function(t){return"string"==typeof t},isNonEmptyArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t&&t.length>0&&Array.isArray(t)&&void 0!==t},isObject:function(t){return t&&"object"===(void 0===t?"undefined":i(t))&&!Array.isArray(t)},isEmptyObject:function(t){return 0===Object.keys(t).length&&t.constructor===Object},decodeIconFont:function(t){var e=/&#x[a-z|0-9]{4,5};?/g;return e.test(t)?t.replace(new RegExp(e,"g"),function(t){var e=t.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(e)}):t},mergeDeep:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(!n.length)return t;var i=n.shift();if(c.isObject(t)&&c.isObject(i))for(var a in i)c.isObject(i[a])?(t[a]||Object.assign(t,r({},a,{})),c.mergeDeep(t[a],i[a])):Object.assign(t,r({},a,i[a]));return c.mergeDeep.apply(c,[t].concat(n))},appendProtocol:function(t){if(/^\/\//.test(t)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+t}return t},encodeURLParams:function(t){return new s.default(t,!0).toString()},goToH5Page:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new c.UrlParser(t,!0),i=c.appendProtocol(r.toString());o.push({url:c.encodeURLParams(i),animated:e.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var t=weex.config.env.appName;return"Boat"===t||"BoatPlayground"===t},isWeb:function(){var t=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===t.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var t=weex.config.env.deviceHeight;return c.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):c.env.isIOS()&&2436===t},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return c.env.isTmall()||c.env.isTrip()||c.env.isTaobao()},supportsEB:function(){var t=weex.config.env.weexVersion||"0",e=c.compareVersion(t,"0.10.1.4")&&(c.env.isIOS()||c.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&e},supportsEBForAndroid:function(){return c.env.isAndroid()&&c.env.supportsEB()},supportsEBForIos:function(){return c.env.isIOS()&&c.env.supportsEB()},getPageHeight:function(){var t=weex.config.env,e=c.env.isWeb()?0:c.env.isIPhoneX()?176:132;return t.deviceHeight/t.deviceWidth*750-e}},compareVersion:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(t===e)return!0;for(var n=t.split("."),o=e.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var a=~~o[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return t&&t.length>0&&(n=t.map(function(n,o){return o%e==0?t.slice(o,o+e):null}).filter(function(t){return t})),n},truncateString:function(t,e){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",a=/[^\x00-\xff]/g,s=t.replace(a,"**").length,c=0;c<s&&(i=t.charAt(c).toString(),null!==i.match(a)?o+=2:o++,!(o>e));c++)r+=i;return n&&s>e&&(r+="..."),r}};e.default=c},function(t,e){t.exports={"nav-wrapper":{width:"750",alignItems:"flex-start"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),i=o(r);e.default={components:{WxcMinibar:i.default},props:{title:{type:String,default:"Title here..."},backgroudColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(8)),o=n(9);var a=n(10);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-56d624ab",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={"wxc-minibar":{width:"750",height:"90",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#009ff0"},left:{width:"180",paddingLeft:"32"},"middle-title":{fontSize:"30",color:"#ffffff",height:"36",lineHeight:"34"},right:{width:"180",paddingRight:"32",alignItems:"flex-end"},"left-button":{width:"21",height:"36"},"right-button":{width:"32",height:"32"},"icon-text":{fontSize:"28",color:"#ffffff"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&o.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:["wxc-minibar"],style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:["left"],attrs:{ariaLabel:"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?n("image",{staticClass:["left-button"],attrs:{src:t.leftButton}}):t._e(),t.leftText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("middle",[n("text",{staticClass:["middle-title"],style:{color:t.textColor}},[t._v(t._s(t.title))])]),n("div",{staticClass:["right"],on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?n("image",{staticClass:["right-button"],attrs:{src:t.rightButton,ariaHidden:!0}}):t._e(),t.rightText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["nav-wrapper"]},[n("wxc-minibar",{attrs:{title:t.title,backgroundColor:t.backgroudColor,textColor:t.textColor,leftButton:t.leftButton,rightText:t.rightText,rightButton:t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},function(t,e){t.exports={"tab-bar-wrapper":{flex:1},"item-container":{width:"750",backgroundColor:"#f2f3f4"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),a=n(17),s=o(a);e.default={props:{tabTitles:{type:Array,default:function(){return[]}},tabStyles:{type:Object,default:function(){return{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10}}},selected:{type:Number,default:0}},components:{WxcTabBar:s.default},data:function(){return{}},created:function(){var t=i.default.env.getPageHeight(),e=this.tabStyles;this.contentStyle={height:t-e.height+"px"}},mounted:function(){this.tabTitles&&this.tabTitles.length>0&&this.selected&&this.setPage(this.selected,null,!1)},methods:{setPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.$refs["wxc-tab-bar"].setPage(t,e,n)},wxcTabBarCurrentTabSelected:function(t){this.$emit("currentTabSelected",t)}}}},function(t,e,n){"use strict";function o(t){t=t||global.location||{};var e,n={},o=void 0===t?"undefined":l(t);if("blob:"===t.protocol)n=new a(unescape(t.pathname),{});else if("string"===o){n=new a(t,{});for(e in h)delete n[e]}else if("object"===o){for(e in t)e in h||(n[e]=t[e]);void 0===n.slashes&&(n.slashes=p.test(t.href))}return n}function r(t){var e=d.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function i(t,e){for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function a(t,e,n){if(!(this instanceof a))return new a(t,e,n);var s,c,d,p,h,b,y=g.slice(),m=void 0===e?"undefined":l(e),v=this,x=0;for("object"!==m&&"string"!==m&&(n=e,e=null),n&&"function"!=typeof n&&(n=f.parse),e=o(e),c=r(t||""),s=!c.protocol&&!c.slashes,v.slashes=c.slashes||s&&e.slashes,v.protocol=c.protocol||e.protocol||"",t=c.rest,c.slashes||(y[2]=[/(.*)/,"pathname"]);x<y.length;x++)p=y[x],d=p[0],b=p[1],d!==d?v[b]=t:"string"==typeof d?~(h=t.indexOf(d))&&("number"==typeof p[2]?(v[b]=t.slice(0,h),t=t.slice(h+p[2])):(v[b]=t.slice(h),t=t.slice(0,h))):(h=d.exec(t))&&(v[b]=h[1],t=t.slice(0,h.index)),v[b]=v[b]||(s&&p[3]?e[b]||"":""),p[4]&&(v[b]=v[b].toLowerCase());n&&(v.query=n(v.query)),s&&e.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==e.pathname)&&(v.pathname=i(v.pathname,e.pathname)),u(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(p=v.auth.split(":"),v.username=p[0]||"",v.password=p[1]||""),v.origin=v.protocol&&v.host&&"file:"!==v.protocol?v.protocol+"//"+v.host:"null",v.href=v.toString()}function s(t,e,n){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||f.parse)(e)),o[t]=e;break;case"port":o[t]=e,u(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(e){var r="pathname"===t?"/":"#";o[t]=e.charAt(0)!==r?r+e:e}else o[t]=e;break;default:o[t]=e}for(var i=0;i<g.length;i++){var a=g[i];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function c(t){t&&"function"==typeof t||(t=f.stringify);var e,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,e="object"===l(n.query)?t(n.query):n.query,e&&(r+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(r+=n.hash),r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=n(15),f=n(16),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,g=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};a.prototype={set:s,toString:c},a.extractProtocol=r,a.location=o,a.qs=f,t.exports=a},function(t,e,n){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,n){"use strict";function o(t){return decodeURIComponent(t.replace(/\+/g," "))}function r(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,r={};e=n.exec(t);r[o(e[1])]=o(e[2]));return r}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var o in t)a.call(t,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return n.length?e+n.join("&"):""}var a=Object.prototype.hasOwnProperty;e.stringify=i,e.parse=r},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(18);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(19)),o=n(20);var a=n(21);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-58a80b6a",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={"wxc-tab-page":{position:"absolute",top:0,left:0,right:0,bottom:0},"tab-title-list":{flexDirection:"row",justifyContent:"space-around"},"title-item":{justifyContent:"center",alignItems:"center",borderBottomStyle:"solid"},"tab-page-wrap":{width:"750",flex:1,overflow:"hidden"},"tab-container":{flex:1,flexDirection:"row",position:"absolute"},"tab-text":{lines:1,textOverflow:"ellipsis"},"desc-tag":{position:"absolute",top:"10",right:"20",borderBottomRightRadius:"14",borderBottomLeftRadius:0,borderTopLeftRadius:"14",borderTopRightRadius:"14",backgroundColor:"#FF5E00",height:"26",alignItems:"center",justifyContent:"center",paddingLeft:"6",paddingRight:"6"},dot:{width:"12",height:"12",borderBottomRightRadius:"12",borderBottomLeftRadius:"12",borderTopLeftRadius:"12",borderTopRightRadius:"12",position:"absolute",top:"10",right:"40",backgroundColor:"#FF5E00"},"desc-text":{fontSize:"18",color:"#ffffff"},"icon-font":{marginBottom:"8"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),a=weex.requireModule("dom"),s=weex.requireModule("animation");e.default={props:{tabTitles:{type:Array,default:function(){return[]}},tabStyles:{type:Object,default:function(){return{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,activeBottomColor:"#FFC900",activeBottomWidth:120,activeBottomHeight:6,textPaddingLeft:10,textPaddingRight:10}}},titleType:{type:String,default:"icon"},titleUseSlot:{type:Boolean,default:!1},isTabView:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},wrapBgColor:{type:String,default:"#f2f3f4"}},data:function(){return{currentPage:0,translateX:0}},created:function(){var t=this.titleType,e=this.tabStyles;"iconFont"===t&&e.iconFontUrl&&a.addRule("fontFace",{fontFamily:"wxcIconFont",src:"url('"+e.iconFontUrl+"')"}),this.isIPhoneX=i.default.env.isIPhoneX()},methods:{next:function(){var t=this.currentPage;t<this.tabTitles.length-1&&t++,this.setPage(t)},prev:function(){var t=this.currentPage;t>0&&t--,this.setPage(t)},setPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!this.isTabView)return void this.jumpOut(e);var o=this.currentPage,r=this.$refs["wxc-tab-title-"+t][0],i=this.tabStyles.width,s=parseInt(750/i),c=this.tabTitles.length,l=t>s?-(750-i)/2:2*-i;s<c&&((o>s||t>1)&&a.scrollToElement(r,{offset:l,animated:n}),t<=1&&o>t&&a.scrollToElement(r,{offset:-i*t,animated:n})),this.currentPage=t,this._animateTransformX(t,n),this.$emit("wxcTabBarCurrentTabSelected",{page:t})},jumpOut:function(t){t&&i.default.goToH5Page(t)},_animateTransformX:function(t,e){var n=this.duration,o=this.timingFunction,r=e?n:1e-5,i=this.$refs["tab-container"],a=750*t;s.transition(i,{styles:{transform:"translateX("+-a+"px)"},duration:r,timingFunction:o,delay:0},function(){})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wxc-tab-page"],style:{backgroundColor:t.wrapBgColor}},[n("div",{ref:"tab-page-wrap",staticClass:["tab-page-wrap"]},[n("div",{ref:"tab-container",staticClass:["tab-container"]},[t._t("default")],2)]),n("div",{staticClass:["tab-title-list"],style:{backgroundColor:t.tabStyles.bgColor,height:t.tabStyles.height+(t.isIPhoneX?78:0)+"px",paddingBottom:t.isIPhoneX?"78px":"0"}},t._l(t.tabTitles,function(e,o){return n("div",{key:o,ref:"wxc-tab-title-"+o,refInFor:!0,staticClass:["title-item"],style:{width:t.tabStyles.width+"px",height:t.tabStyles.height+"px",backgroundColor:t.currentPage==o?t.tabStyles.activeBgColor:t.tabStyles.bgColor},attrs:{accessible:!0,ariaLabel:""+(e.title?e.title:"标签"+o)},on:{click:function(n){t.setPage(o,e.url)}}},["icon"!==t.titleType||t.titleUseSlot?t._e():n("image",{style:{width:t.tabStyles.iconWidth+"px",height:t.tabStyles.iconHeight+"px"},attrs:{src:t.currentPage==o?e.activeIcon:e.icon}}),"iconFont"===t.titleType&&e.codePoint&&!t.titleUseSlot?n("text",{staticClass:["icon-font"],style:{fontFamily:"wxcIconFont",fontSize:t.tabStyles.iconFontSize+"px",color:t.currentPage==o?t.tabStyles.activeIconFontColor:t.tabStyles.iconFontColor}},[t._v(t._s(e.codePoint))]):t._e(),t.titleUseSlot?t._e():n("text",{staticClass:["tab-text"],style:{fontSize:t.tabStyles.fontSize+"px",fontWeight:t.currentPage==o&&t.tabStyles.isActiveTitleBold?"bold":"normal",color:t.currentPage==o?t.tabStyles.activeTitleColor:t.tabStyles.titleColor,paddingLeft:t.tabStyles.textPaddingLeft+"px",paddingRight:t.tabStyles.textPaddingRight+"px"}},[t._v(t._s(e.title))]),e.badge&&!t.titleUseSlot?n("div",{staticClass:["desc-tag"]},[n("text",{staticClass:["desc-text"]},[t._v(t._s(e.badge))])]):t._e(),!e.dot||e.badge||t.titleUseSlot?t._e():n("div",{staticClass:["dot"]}),t.titleUseSlot?t._t("tab-title-"+o):t._e()],2)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["tab-bar-wrapper"]},[n("wxc-tab-bar",{ref:"wxc-tab-bar",attrs:{tabTitles:t.tabTitles,tabStyles:t.tabStyles,isTabView:!0,titleType:"icon"},on:{wxcTabBarCurrentTabSelected:t.wxcTabBarCurrentTabSelected}},t._l(t.tabTitles,function(e,o){return n("div",{key:o,ref:"tab-page-"+o,refInFor:!0,staticClass:["item-container"],style:t.contentStyle},[t._t("tab-page-"+o,[n("text",[t._v(t._s(e.title))])])],2)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41b883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(0);e.default={data:function(){return{}},methods:{jump:function(t){"Web"===WXEnvironment.platform?i.default.gotoH5("http://"+a.DOMAIN+"/"+t+".html"):i.default.gotoH5("http://"+a.DOMAIN+"/"+a.DIST+"/"+t+".js")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[t._v("Hello Weex!")]),n("text",{staticClass:["message"]},[t._v("Home page.")]),n("text",{staticClass:["message"],on:{click:function(e){t.jump("views/test/hello")}}},[t._v("跳转")])])},staticRenderFns:[]}},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[t._v("Hello Weex!")]),n("text",{staticClass:["message"]},[t._v("特别推荐")])])}]}},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[t._v("Hello Weex!")]),n("text",{staticClass:["message"]},[t._v("消息中心")])])}]}},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["greeting"]},[t._v("Hello Weex!")]),n("text",{staticClass:["message"]},[t._v("我的主页")])])}]}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(4)),o=n(5);var a=n(11);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7c18f329",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(39),i=o(r),a=n(41),s=o(a),c=n(42),l=o(c),u=n(43),f=o(u),d=n(44),p=o(d),g=n(45),h=o(g);e.default={components:{TabBarComp:i.default,Home:l.default,Explore:f.default,Message:p.default,Profile:h.default},created:function(){this.tabTitles=s.default.tabTitles,this.tabStyles=s.default.tabStyles},data:function(){return{}},mounted:function(){},methods:{}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(40);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(12)),o=n(13);var a=n(22);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-5aefda1b",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={tabTitles:[{title:"首页",icon:"https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png"},{title:"特别推荐",icon:"https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"},{title:"消息中心",icon:"https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png",badge:5},{title:"我的主页",icon:"https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png",dot:!0}],tabStyles:{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10},tabIconFontTitles:[{title:"首页",codePoint:""},{title:"特别推荐",codePoint:""},{title:"消息中心",codePoint:"",badge:5},{title:"我的主页",codePoint:"",dot:!0}],tabIconFontStyles:{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10,iconFontSize:50,iconFontColor:"#333333",activeIconFontColor:"red",iconFontUrl:"//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf"}}},function(t,e,n){var o,r,i=[];i.push(n(23)),o=n(24);var a=n(25);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-dea29430",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e,n){var o,r,i=[];i.push(n(26)),o=n(27);var a=n(28);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-c5d0efa0",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e,n){var o,r,i=[];i.push(n(29)),o=n(30);var a=n(31);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-14552b18",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e,n){var o,r,i=[];i.push(n(32)),o=n(33);var a=n(34);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-387f3a5c",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar-comp",{ref:"tab-bar",staticClass:["tab-bar-comp"],attrs:{selected:3,tabTitles:t.tabTitles,tabStyles:t.tabStyles}},[n("home",{attrs:{slot:"tab-page-0"},slot:"tab-page-0"}),n("explore",{attrs:{slot:"tab-page-1"},slot:"tab-page-1"}),n("message",{attrs:{slot:"tab-page-2"},slot:"tab-page-2"}),n("profile",{attrs:{slot:"tab-page-3"},slot:"tab-page-3"})],1)},staticRenderFns:[]}},function(t,e,n){var o,r,i=[];i.push(n(48)),o=n(49);var a=n(52);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-c871204a",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#ffffff"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(35),i=o(r),a=n(50),s=o(a);e.default={components:{NavBar:i.default,TabBar:s.default},data:function(){return{}},mounted:function(){},methods:{}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(51);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(37)),o=n(38);var a=n(46);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-14414577",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("nav-bar",{attrs:{title:"Hello Weex"}}),n("tab-bar")],1)},staticRenderFns:[]}}]);