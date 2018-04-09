<template>
  <div class="wrapper">
    <nav-bar title="login" :show-back="true" :left-button-click="back"></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import helper from '@/utils/helper';

export default {
  components: {
    NavBar,
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
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
}
</style>
