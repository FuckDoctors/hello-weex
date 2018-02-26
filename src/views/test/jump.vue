<template>
  <div class="wrapper">
    <image :src="logo" class="logo"></image>
    <text class="greeting">The environment is ready!</text>
    <text class="message">Now, let's use Vue.js to build your Weex app.</text>
    <text class="message" @click="jump('views/home/home.js')">Jump</text>
    <text class="message" @click="jump2('views/home/home')">helper</text>
    <text class="message" @click="jump3('views/home/home')">helper url native</text>
    <text class="message" @click="jump4('views/home/home')">helper url html</text>
    <text class="message" @click="jump2('views/test/weex-ui')">weex ui</text>
    <text class="message" @click="jump3('views/test/weex-ui')">weex ui native</text>
  </div>
</template>

<script>
import helper from '../../utils/helper';
import { DOMAIN, DIST } from '../../config';

const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');

export default {
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    };
  },
  methods: {
    jump() {
      navigator.push({
        url: 'http://192.168.1.86:8081/dist/views/home/home.js', // OK
        animated: 'true',
      }, (event) => {
        modal.alert({
          message: event,
        });
      });
    },
    jump2(to) {
      helper.push(to);
    },
    jump3(to) {
      helper.gotoH5(`http://${DOMAIN}/${DIST}/${to}.js`);
    },
    jump4(to) {
      helper.gotoH5(`http://${DOMAIN}/${to}.html`);
    },
  },
};
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
