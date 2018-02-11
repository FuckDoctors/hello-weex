<template>
  <div class="wrapper">
    <nav-bar :left-button="leftButton" :left-button-click="back"></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/nav-bar';
import helper from '../../utils/helper';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png'
    };
  },
  mounted() {

  },
  methods: {
    back() {
      helper.back();
    }
  }
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
