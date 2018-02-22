import Vue from 'vue'
import app from '@/app'

describe('app.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(app);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.wxc-minibar .middle-title').textContent).to.equal('Hello Weex');
  });
});
