<template>
  <div class="wrapper"
      :background-color="backgroundColor"
      :text-color="textColor"
      :height="height"
      :style="{ backgroundColor: backgroundColor,
        color: textColor,
        height: calcHeight,
        paddingTop: paddingTop}">
    <slot></slot>
  </div>
</template>

<script>
import { Utils } from 'weex-ui';

export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#009ff0',
    },
    textColor: {
      type: String,
      default: '#FFFFFF',
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      calcHeight: 0,
      statusBarHeight: 0,
      paddingTop: 0,
    };
  },
  created() {
    if (Utils.env.isWeb()) {
      this.paddingTop = 0;
    } else if (Utils.env.isAndroid()) {
      this.statusBarHeight = 25;
      this.paddingTop = this.statusBarHeight * 2;
    } else if (Utils.env.isIPhoneX()) {
      // status bar
      this.statusBarHeight = 44;
      this.paddingTop = this.statusBarHeight * 2;
    } else {
      // status bar
      this.statusBarHeight = 20;
      this.paddingTop = this.statusBarHeight * 2.1;
    }
    this.calcHeight = this.height + this.paddingTop;
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 750px;
  align-items: flex-start;
}
</style>
