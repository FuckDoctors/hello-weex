<template>
  <div class="nav-wrapper" :style="wrapperStyle">
    <wxc-minibar :title="title"
                  :background-color="backgroundColor"
                  :text-color="textColor"
                  :left-button="leftButton"
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

export default {
  components: {
    WxcMinibar
  },
  props: {
    title: {
      type: String,
      default: 'Title here...'
    },
    backgroundColor: {
      type: String,
      default: '#009ff0'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    leftButton: {
      type: String,
      default: ''
    },
    rightButton: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
  },
  data() {
    return {};
  },
  created() {
    this.wrapperStyle = {
      backgroundColor: this.backgroundColor,
      height: Utils.env.isWeb() ? 'auto' : utils.getNavHeight(),
      paddingTop: Utils.env.isWeb() ? 0: utils.getNavHeight() - 90
    };
  },
  methods: {
    minibarLeftButtonClick () {
      this.$emit('leftButtonClick');
    },
    minibarRightButtonClick () {
      this.$emit('rightButtonClick');
    }
  }
};
</script>

<style scoped>
.nav-wrapper {
  width: 750px;
  align-items: flex-start;
}
</style>
