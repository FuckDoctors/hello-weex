<template>
  <div class="wrapper">
    <top-area></top-area>

    <div class="top">
      <div class="location">
        <wxc-icon class="location-icon" name="map"
            :icon-style="{color: 'white', fontSize: '28px', fontWeight: 'bold'}"></wxc-icon>
        <text class="geo" @click="changeLocation">齐鲁软件园</text>
      </div>
      <wxc-searchbar ref="wxc-searchbar"
                     :disabled="true"
                     theme="transparent"
                     class="search-bar"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     @wxcSearchbarInputDisabledClicked="wxcSearchbarInputDisabledClicked"
                     @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"></wxc-searchbar>
    </div>
  </div>
</template>

<script>
import { WxcIcon } from 'weex-ui';

import WxcSearchbar from '@/components/wxc-searchbar';
import TopArea from '@/components/top-area';
import helper from '@/utils/helper';

const modal = weex.requireModule('modal');

export default {
  components: {
    TopArea,
    WxcSearchbar,
    WxcIcon,
  },
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    changeLocation() {
      modal.toast({
        message: '未实现...',
      });
    },
    wxcSearchbarInputReturned() {

    },
    wxcSearchbarInputOnInput(e) {
      // 或者直接使用this.$refs.wxcSearchbar.setValue
      this.searchKey = e.value;
    },
    wxcSearchbarInputOnFocus() {
      // OnFocus后，会显示键盘，然后跳转到search页面。
      // 但是在search页面点返回后，因为search还在OnFocus状态，所以又会跳回search页面...
      // 所以换个实现方式，点下确定后，再跳转到search页面显示结果
      // 上面的方式不好显示搜索历史
      // 如果使用h5.ele.me的方式点击后跳转，应该使用disable模式？
      // helper.push('views/search/search');
    },
    wxcSearchbarInputDisabledClicked() {
      helper.push('views/search/search');
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
}

.top {
  background-color: #009ff0;
  color: #ffffff;
}
.location {
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-size: 28px;
  color: #ffffff;
  align-items: center;
}
.location-icon {
  width: 32px;
  font-size: 28px;
}
.geo {
  font-size: 28px;
  color: #ffffff;
  lines: 1;
  font-weight: bold;
}
.wxc-search-bar-transparent {
  /* 不起作用 */
  background-color: transparent;
}
.search-bar {
  /* 这个只修饰了外层的div，内部的div还是白色 */
  background-color: transparent;
}
.wxc-search-bar {
  background-color: transparent;
}

.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin-top: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
