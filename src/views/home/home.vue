<template>
  <div class="wrapper">
    <text class="greeting">Hello Weex!</text>
    <text class="message">Home page.</text>
    <text class="message" @click="jump('env')">环境参数</text>
    <text class="message" @click="jump('views/test/hello')">跳转</text>
    <text class="message" @click="jumpWithParams('views/test/hello')">带参跳转</text>
    <text class="message" @click="jump('views/test/index')">测试页面一览</text>
  </div>
</template>

<script>
import helper from '../../utils/helper';
import { DOMAIN, DIST, ENABLE_HTTPS } from '../../config';

export default {
  data() {
    return {};
  },
  methods: {
    jump(to) {
      // 有时候views/test/hello页面显示空白页，不知道哪个地方出问题了。。。
      if (WXEnvironment.platform === 'Web') {
        helper.gotoH5(`http${ENABLE_HTTPS ? 's' : ''}://${DOMAIN}/${to}.html`);
      } else {
        helper.gotoH5(`http${ENABLE_HTTPS ? 's' : ''}://${DOMAIN}${DIST}/${to}.js`);
      }
    },
    jumpWithParams(to) {
      const params = {
        a: 'a1',
        b: 'b1',
      };
      // 第一次会走bundle下的views/test/hello，热加载后才会走domain下的/dist/views/test/hello
      // 修改push方法，支持绝对bundle的地址
      // helper.push(to, params);
      // helper.push(`http${ENABLE_HTTPS ? 's' : ''}://${DOMAIN}${DIST}/${to}.js`, params);
      // 使用goto方法，拼接域名+bundle地址，直接用线上地址。
      helper.goto(to, params);
    },
  },
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
