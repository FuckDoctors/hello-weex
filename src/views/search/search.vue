<template>
  <div class="wrapper">
    <nav-bar title="搜索" :show-back="true" :left-button-click="back"></nav-bar>

    <div class="top">
      <search-bar ref="search-bar"
                     theme="transparent"
                     :alwaysShowCancel="true"
                     cancelLabel="搜索"
                     @searchbarInputReturned="searchbarInputReturned"
                     @searchbarInputOnInput="searchbarInputOnInput"
                     @searchbarCancelClicked="searchbarSearchClicked"
                     @searchbarInputOnFocus="searchbarInputOnFocus"></search-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import SearchBar from '@/components/search-bar';
import helper from '@/utils/helper';

const modal = weex.requireModule('modal');

export default {
  components: {
    NavBar,
    SearchBar,
  },
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    searchbarInputReturned() {
      if (this.searchKey.length === 0) {
        return;
      }
      modal.toast({
        message: `Searching ${this.searchKey}...`,
      });
    },
    searchbarInputOnInput(e) {
      this.searchKey = e.value;
    },
    searchbarInputOnFocus() {

    },
    searchbarSearchClicked() {
      // 只调用Returned方法焦点还在，键盘不消失。
      // this.searchbarInputReturned();
      // 只触发下面的onSubmit也不行。。。
      // 还得加上autoBlur。。。
      this.$refs['search-bar'].autoBlur();
      this.$refs['search-bar'].onSubmit({ value: this.searchKey });
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
