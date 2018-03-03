// weex-vue-render 0.12.x
import Vue from 'vue';

import weex from 'weex-vue-render';

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

// import * as filters from '@/filters';
// import mixins from '@/mixins';

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key]);
// });

// // register global mixins.
// Vue.mixin(mixins);

weex.init(Vue);

// // weex-vue-render v1.x
// // import vue runtime.
// // const Vue = require('vue/dist/vue.runtime.common').default;
// const Vue = require('vue/dist/vue.runtime.common').default;
// // import weex-vue-render
// const weex = require('weex-vue-render');
// // init the weex instance.
// weex.init(Vue);

// // // import your .vue App.
// // const App = require('App.vue');
// // // must have a '#root' element in your html body.
// // App.$el = '#root';
// // // instantiate
// // new App();
