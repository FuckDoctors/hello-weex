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
      paddingTop: 0,
    };
  },
  created() {
    if (Utils.env.isWeb()) {
      this.paddingTop = 0;
    } else if (Utils.env.isIPhoneX()) {
      // status bar
      this.paddingTop = 44;
    } else {
      // status bar
      this.paddingTop = 20;
    }
    this.calcHeight = this.height
      + (this.paddingTop * 2.34375); // 750/320
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
