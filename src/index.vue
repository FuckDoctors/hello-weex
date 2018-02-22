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
    helper.push('app');
  },
  methods: {
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
