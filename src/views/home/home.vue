<template>
  <div class="wrapper">
    <top-area></top-area>

    <text class="greeting">Hello Weex!</text>
    <text class="message">Home page.</text>
    <text class="message" @click="jump('env')">环境参数</text>
    <!-- <text class="message" @click="jump('views/test/hello')">跳转</text> -->
    <!-- <text class="message" @click="jumpWithParams('views/test/hello')">带参跳转</text> -->
    <text class="message" @click="jump('views/test/index')">测试页面一览</text>
    <!-- 注意! text标签与里面的文字不要换行写，不然换行后，>与文字间的空白字符会被认为空格来显示 -->
    <!-- <text class="message"
        @click="jumpGlobalEvent('views/test/hello', { a: 'hello', b: 'globalEvent' })"
      >测试GlobalEvent</text> -->
  </div>
</template>

<script>
import TopArea from '@/components/top-area';

import globalEvent from '@/utils/globalEvent';

import helper from '../../utils/helper';
import { DOMAIN, DIST, ENABLE_HTTPS } from '../../config';

const modal = weex.requireModule('modal');

export default {
  components: {
    TopArea,
  },
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
    jumpGlobalEvent(to, params) {
      // GlobalEvent
      // 这种先注册，然后再后面触发的方式是可以传值的。（反向传参）
      globalEvent.addEventListener('hello-return', (result) => {
        console.log(`addEventListener callback (hello-return), result: ${result}`);
        modal.toast({
          message: `addEventListener callback (hello-return), result: ${JSON.stringify(result)}`,
        });
        // 删掉注册的事件，不然每次都注册，而且，会执行好多次callback
        globalEvent.removeEventListener('hello-return');
      });
      // 这种先触发（传参），后面绑定监听事件（取值）的方式不行。（正向传参）
      // 还是得靠url的queryString，或者靠localStorage？
      // 这样传值和取值，不用区分传值方向了，直接从localStroge里取或设。
      // globalEvent.fireGlobalEvent('hello-params', params, () => {
      //   console.log('fireGlobalEvent callback (hello-params)');
      //   modal.toast({
      //     message: 'fireGlobalEvent callback (hello-params)',
      //   });
      //   helper.goto(to);
      // });
      helper.goto(to, params);
    },
  },
  beforeDestroy() {
    globalEvent.removeEventListener('hello-return');
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  align-content: center;
}
.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin-top: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
