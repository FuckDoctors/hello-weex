<template>
  <div class="wrapper">
  </div>
</template>

<script>
import helper from './utils/helper';

export default {
  data() {
    return {
    };
  },
  mounted() {
    // helper.push('app');
    // helper.replace('app');
    helper.replaceOnline('views/login/login');
    // // android可以，ios不可以
    // helper.push('app', null, () => {
    //   helper.close();
    // });
  },
  methods: {
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
