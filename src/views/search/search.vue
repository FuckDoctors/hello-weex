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

    <scroller class="scroller">
      <div class="history-label-wrapper">
        <text class="history-label">搜索历史</text>
        <wxc-icon class="history-clear" name="delete"
          :iconStyle="{fontSize: '28px'}"
          @wxcIconClicked="clearHistory()" />
      </div>

      <div class="history-list">
        <template v-if="history.length > 0">
          <text lines="1" class="history-key"
            @click="clickHistory(item)"
            v-for="(item, index) in history" :key="index">{{item.key}}</text>
        </template>
        <template v-else>
          <div class="history-empty">
            <text class="history-empty-tip">空空如也，快搜索试试吧~</text>
          </div>
        </template>
      </div>

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

      <div class="result-list">
        <div class="result-item"></div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcIcon } from 'weex-ui';

import NavBar from '@/components/nav-bar';
import SearchBar from '@/components/search-bar';
import helper from '@/utils/helper';

const modal = weex.requireModule('modal');

export default {
  components: {
    NavBar,
    SearchBar,
    WxcIcon,
  },
  data() {
    return {
      searchKey: '',
      history: [],
      result: [],
      instantResult: [],
    };
  },
  mounted() {
    const date = Date.now();
    this.history = [
      '奶粉',
      '超级能恩',
      '超级能恩3段',
      '雀巢超级能恩3段',
      '纸尿裤',
      '花王纸尿裤',
      '超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容',
      '儿童车',
    ].map((value, index) => {
      const obj = {
        weight: 1,
        key: value,
        date: date - index,
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
      // 只保留最近10条
      if (this.history.length > 10) {
        // 下面这句，会返回删掉的数组，而原数组本身只会保留删除后的内容。
        // 所以这种情况，splice后，history只有一个了。
        // this.history.splice(0, 10);
        this.history.splice(10, this.history.length - 10);
      }
    },
    clearHistory() {
      console.log('clear history...');
      this.history = [];
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
      if (this.searchKey.length === 0) {
        return;
      }
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

.scroller {
  flex: 1;
}

.history-label-wrapper {
  font-size: 36px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: row;
  align-items: center;
}
.history-label {
  flex: 1;
  color: #666666;
}
.history-clear {
  /* width: 60px; */
  /* justify-content: center; */
  /* cursor: pointer; */
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
.history-empty {
  flex: 1;
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: center;
  align-items: center;
}
.history-empty-tip {
  color: #666666;
}
</style>
