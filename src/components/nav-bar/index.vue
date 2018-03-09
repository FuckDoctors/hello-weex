<template>
  <div class="nav-wrapper" :show-back="showBack" :style="wrapperStyle">
    <wxc-minibar :title="title"
                  :background-color="backgroundColor"
                  :text-color="textColor"
                  :left-button="leftButtonForDisplay"
                  @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                  @wxcMinibarRightButtonClicked="minibarRightButtonClick"
                  :right-text="rightText"
                  :right-button="rightButton"
                  >
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
  width: 750px;
  align-items: flex-start;
}
</style>
