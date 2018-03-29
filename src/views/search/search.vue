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

    <div class="history-list">
      <text lines="1" class="history-key"
        @click="clickHistory(item)"
        v-for="(item, index) in history" :key="index">{{item.key}}</text>
    </div>

    <scroller class="scroller">
      <div class="instant-result">
        <div class="instant-shop">
          <div class="shop-item">
            <!-- <image class="shop-image" :src=""></image> -->
            <div class="shop-title"></div>
            <div class="shop-rating"></div>
          </div>
        </div>
        <div class="instant-keywords"></div>
      </div>
    </scroller>
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
      history: [],
      result: [],
    };
  },
  mounted() {
    const date = Date.now();
    this.history = [
      '奶粉',
      '超级能恩',
      '超级能恩3段',
      '一',
      '雀巢超级能恩3段',
      '纸尿裤',
      '花王纸尿裤',
      '超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容',
      '儿童车',
      '1',
    ].map((value) => {
      const obj = {
        weight: 1,
        key: value,
        date,
      };
      return obj;
    });
  },
  methods: {
    clickHistory(history) {
      this.searchKey = history.key;
      this.searchbarSearchClicked();
    },
    addHistoryKey(key) {
      const date = Date.now();

      const arr = this.history.filter(item => item.key === key);
      if (arr.length > 0) {
        arr[0].weight += 1;
        arr[0].date = date;
      } else {
        this.history.push({
          weight: 1,
          key,
          date,
        });
      }
      // 排序
      this.history.sort((a, b) => b.date - a.date);
    },
    searchbarInputReturned() {
      if (this.searchKey.length === 0) {
        return;
      }
      this.addHistoryKey(this.searchKey);
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
      this.addHistoryKey(this.searchKey);
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

.history-list {
  /* margin-top: 40px; */
  margin-bottom: 40px;
  /* padding-left: 30px; */
  padding-right: 30px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}
.history-key {
  margin-top: 30px;
  margin-left: 20px;
  padding-top: 10px;;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  border-radius: 30px;
  border-width: 3px;
  border-color: #D3D3D3;
  lines: 1;
  font-size: 24px;
  height: 60px;
  /* 设置1.5倍的字体大小，还是能看出来一点第二行的内容，所以稍微调大了一点。 */
  line-height: 38px;
  max-width: 660px;
  text-overflow: ellipsis;
}
</style>
