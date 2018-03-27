<template>
  <div class="wrapper">
    <nav-bar title="搜索" :show-back="true" :left-button-click="back"></nav-bar>
    <div class="top">
      <wxc-searchbar ref="wxc-searchbar"
                     theme="transparent"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"></wxc-searchbar>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import WxcSearchbar from '@/components/wxc-searchbar';
import helper from '@/utils/helper';

const modal = weex.requireModule('modal');

export default {
  components: {
    NavBar,
    WxcSearchbar,
  },
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    wxcSearchbarInputReturned() {
      modal.toast({
        message: `Searching ${this.searchKey}...`,
      });
    },
    wxcSearchbarInputOnInput(e) {
      this.searchKey = e.value;
    },
    wxcSearchbarInputOnFocus() {

    },
    back() {
      helper.back();
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
  background-color: #ffffff;
}
.top {
  background-color: #009ff0;
  color: #ffffff;
}
</style>
