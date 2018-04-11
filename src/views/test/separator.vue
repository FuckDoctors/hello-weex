<template>
  <div class="wrapper">
    <nav-bar title="login" :show-back="true" :left-button-click="back"></nav-bar>

    <separator></separator>
    <separator :line-size="2"
                text="这是分割线"></separator>
    <separator :line-width="200"
                line-color="#000000"
                :line-size="3"
                :height="100">
    </separator>
    <separator text="自定义文字背景色"
                font-size="36px"
                text-background-color="#cccccc"></separator>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import Separator from '@/components/separator';

import helper from '@/utils/helper';

export default {
  components: {
    NavBar,
    Separator,
  },
  data() {
    return {
    };
  },
  methods: {
    back() {
      helper.back();
    },
  },
};
</script>

<style scoped>

</style>
