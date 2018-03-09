<template>
  <div>
    <nav-bar title="Hello Weex UI" :show-back="true" :left-button-click="back"></nav-bar>
    <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
    </wxc-popup>
  </div>
</template>

<script>
import { WxcButton, WxcPopup } from 'weex-ui';
// 或者分开引用（不是很推荐）
// import WxcButton from 'weex-ui/packages/wxc-button';
// import WxcPopup from 'weex-ui/packages/wxc-popup';

import NavBar from '@/components/nav-bar';

import helper from '@/utils/helper';

module.exports = {
  components: { WxcButton, WxcPopup, NavBar },
  data: () => ({
    isShow: false,
  }),
  methods: {
    buttonClicked() {
      this.isShow = true;
    },
    overlayClicked() {
      this.isShow = false;
    },
    back() {
      helper.back();
    },
  },
};
</script>
