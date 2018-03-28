<template>
  <div class="nav-wrapper" :show-back="showBack" :style="wrapperStyle">
    <!-- 怎么实现嵌套slot？ -->
    <!-- https://forum.vuejs.org/t/nested-slots/18264/5 -->
    <!-- https://jsfiddle.net/Herteby/wee90hmh/ -->

    <wxc-minibar :title="title"
                  :background-color="backgroundColor"
                  :text-color="textColor"
                  :left-button="leftButtonForDisplay"
                  @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                  @wxcMinibarRightButtonClicked="minibarRightButtonClick"
                  :right-text="rightText"
                  :right-button="rightButton"
                  >
      <template v-if="$slots.cleft && $slots.cleft.length > 0" slot="left">
        <slot name="cleft"></slot>
      </template>
      <template v-if="$slots.cmiddle && $slots.cmiddle.length > 0" slot="middle">
        <slot name="cmiddle"></slot>
      </template>
      <template v-if="$slots.cright && $slots.cright.length > 0" slot="right">
        <slot name="cright"></slot>
      </template>
    </wxc-minibar>
  </div>
</template>

<script>
import { WxcMinibar, Utils } from 'weex-ui';
import utils from '../../utils';

import config from './config';

export default {
  components: {
    WxcMinibar,
  },
  props: {
    title: {
      type: String,
      default: 'Title here...',
    },
    showBack: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#009ff0',
    },
    textColor: {
      type: String,
      default: '#FFFFFF',
    },
    leftButton: {
      type: String,
      default: '',
    },
    rightButton: {
      type: String,
      default: '',
    },
    rightText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      leftButtonForDisplay: '',
    };
  },
  created() {
    console.log(this.$slots);
    this.wrapperStyle = {
      backgroundColor: this.backgroundColor,
      height: Utils.env.isWeb() ? 'auto' : utils.getNavHeight(),
      paddingTop: Utils.env.isWeb() ? 0 : utils.getNavHeight() - 90,
    };
    // 不想每个页面都自己设定leftButton了，设一个默认的按钮。
    if (this.leftButton && this.leftButton !== '') {
      // 如果设置了leftButton，则采用设置的。
      this.leftButtonForDisplay = this.leftButton;
    } else if (this.showBack) {
      // 如果没设置leftButton，并且设置了showBack的话，显示默认的leftButton。
      this.leftButtonForDisplay = config.leftArrow;
    }
  },
  methods: {
    minibarLeftButtonClick() {
      this.$emit('leftButtonClick');
    },
    minibarRightButtonClick() {
      this.$emit('rightButtonClick');
    },
  },
};
</script>

<style scoped>
.nav-wrapper {
  /* position: absolute; */
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 750px;
  align-items: flex-start;
}
</style>
