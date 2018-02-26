<template>
  <div class="wrapper">
    <text class="greeting">Hello Weex!</text>
    <text class="message">Home page.</text>
    <text class="message" @click="jump('views/test/hello')">跳转</text>
  </div>
</template>

<script>
import helper from '../../utils/helper';
import { DOMAIN, DIST } from '../../config';

export default {
  data() {
    return {};
  },
  methods: {
    jump(to) {
      if (WXEnvironment.platform === 'Web') {
        helper.gotoH5(`http://${DOMAIN}/${to}.html`);
      } else {
        helper.gotoH5(`http://${DOMAIN}/${DIST}/${to}.js`);
      }
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
