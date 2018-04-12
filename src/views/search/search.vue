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
                     @searchbarCloseClicked="searchbarCloseClicked"
                     @searchbarInputOnBlur="searchbarInputOnBlur"
                     @searchbarInputOnFocus="searchbarInputOnFocus"></search-bar>
    </div>

    <scroller class="scroller">
      <div class="history-area" v-if="!isTyping">
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
      </div>

      <div class="hot-words-area" v-if="!isTyping">
        <div class="history-label-wrapper">
          <text class="history-label">热门搜索</text>
        </div>

        <div class="history-list">
          <template v-if="hotWords.length > 0">
            <text lines="1" class="history-key"
              @click="clickHotWord(item)"
              v-for="(item, index) in hotWords" :key="index">{{item.word}}</text>
          </template>
          <template v-else>
            <div class="history-empty">
              <text class="history-empty-tip">还没有热搜，贡献一个吧~</text>
            </div>
          </template>
        </div>
      </div>

      <!-- 及时结果区 -->
      <div class="instant-result" v-if="isTyping && !isSearching">
        <!-- 商店 -->
        <div class="type-ahead-shop">
          <div class="type-ahead-shop-item" v-for="shop in instantResult.shops" :key="shop.id">
            <div class="type-ahead-shop-logo-wrapper">
              <image class="type-ahead-shop-logo" :src="shop.logo" />
            </div>
            <div class="type-ahead-shop-info">
              <div class="type-ahead-shop-item-center">
                <text class="type-ahead-shop-title">{{shop.name}}</text>
                <div class="type-ahead-shop-tag-container">
                  <text class="type-ahead-shop-tag" v-for="(tag, index) in shop.tags"
                        :style="{backgroundColor: `${tag.color}`}"
                        :key="index">{{tag.text}}</text>
                </div>
              </div>
              <div class="type-ahead-shop-rating-wrapper">
                <text class="type-ahead-shop-rating">评价{{shop.rating}}</text>
              </div>
            </div>
          </div>
        </div>

        <!-- 提示词 -->
        <div class="type-ahead">
          <div class="type-ahead-item" v-for="(word, index) in instantResult.words"
                @click="clickTypeAhead(word)"
                :key="index">
            <div class="type-ahead-item-icon-wrapper">
              <wxc-icon name="search"
                        class="type-ahead-item-icon"
                        :iconStyle="{fontSize: '28px'}"></wxc-icon>
            </div>
            <div class="type-ahead-item-text-wrapper">
              <text class="type-ahead-item-text">{{word}}</text>
            </div>
          </div>
        </div>
      </div>

      <div class="result-list" v-if="isSearching">
        <div class="result-item">检索结果。。。</div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcIcon } from 'weex-ui';

import NavBar from '@/components/nav-bar';
import SearchBar from '@/components/search-bar';
import helper from '@/utils/helper';
import utils from '@/utils';

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
      hotWords: [],
      result: [],
      instantResult: {
        words: [],
        foods: [],
        shops: [],
      },
      isTyping: false, // 是否在输入，输入的时候不显示搜索历史，而显示及时结果
      isSearching: false, // 是否在搜索
    };
  },
  created() {
    this.initHotWords();
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
    initHotWords() {
      this.hotWords = [
        {
          isHignlight: 0,
          word: '紫菜包饭',
        },
        {
          isHignlight: 0,
          word: '黄焖鸡',
        },
        {
          isHignlight: 0,
          word: '鸡公煲',
        },
        {
          isHignlight: 0,
          word: '麻辣烫',
        },
        {
          isHignlight: 0,
          word: '麻辣香锅',
        },
      ];
    },
    getInstantResult() {
      this.instantResult = {
        words: [
          `假数据${this.getRandom(1, 100)}`,
          `假数据${this.getRandom(1, 100)}`,
          `假数据${this.getRandom(1, 100)}`,
          `长数据长数据长数据长数据长数据长数据长数据长数据${this.getRandom(1, 100)}`,
          `假数据${this.getRandom(1, 100)}`,
        ],
        foods: [],
        shops: [
          {
            id: 1,
            name: '麦当劳（金拱门）- 万达广场店',
            logo: 'https://fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png',
            distance: 1234,
            rating: 4.5,
            recentOrderNum: 100,
            tags: [
              {
                text: '减',
                color: '#FA7047',
              },
            ],
          },
          {
            id: 2,
            name: 'E&T牛排',
            logo: 'https://fuss10.elemecdn.com/9/b5/5d9fa3c140fd004cd36d9f1cbe1a3png.png',
            distance: 1500,
            rating: 4.6,
            recentOrderNum: 145,
            tags: [
              {
                text: '减',
                color: '#FA7047',
              },
              {
                text: '券',
                color: '#2395FF',
              },
            ],
          },
          {
            id: 3,
            name: '汉堡王',
            logo: 'https://fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg',
            distance: 1888,
            rating: 4.7,
            recentOrderNum: 155,
            tags: [
              {
                text: '减',
                color: '#FA7047',
              },
            ],
          },
        ],
      };
    },
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

      // 开始检索
      this.isSearching = true;

      modal.toast({
        message: `Searching ${this.searchKey}...`,
      });
    },
    // searchbarInputOnInput(e) {
    //   this.searchKey = e.value;
    // },
    // searchbarInputOnInput: utils.debounce((e) => {
    //   // 加入函数防抖
    //   // https://vuejs.org/v2/guide/migration.html#Replacing-the-debounce-Filter
    //   this.searchKey = e.value;
    //   console.log(this.searchKey);
    // }, 500),
    searchbarInputOnInput: utils.debounce(function searchbarInputOnInput(e) {
      // 加入函数防抖
      // https://vuejs.org/v2/guide/migration.html#Replacing-the-debounce-Filter
      // 不能使用箭头函数，因为箭头函数会改变this的指向。
      // 另外，由于eslint的规则，这里使用了具名函数。
      // 原因：参考 https://vuejs.org/v2/api/#methods 的注意内容
      this.searchKey = e.value;

      // 设置flag
      if (e.value.length !== 0) {
        // 点下close之后，会显示一下搜索历史，然后搜索历史会再次不显示。
        // 因为点下close之后会触发onInput事件，所以这里判断一下。
        this.isTyping = true;
        this.isSearching = false;
      }

      // type ahead数据
      this.getInstantResult();
    }, 500),
    searchbarInputOnFocus() {
      if (this.isSearching) {
        // 如果已经检索过一次，想再次检索时，显示搜索历史。
        this.isTyping = false;
      }
    },
    searchbarInputOnBlur() {
      if (this.isSearching) {
        // 如果已经检索过一次，不是在输入时，不显示搜索历史。
        this.isTyping = true;
      }
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

      this.isTyping = true;
      this.isSearching = true;
    },
    searchbarCloseClicked() {
      this.isTyping = false;
    },
    clickHotWord(item) {
      this.searchKey = item.word;
      this.searchbarSearchClicked();
    },
    clickTypeAhead(word) {
      this.searchKey = word;
      this.searchbarSearchClicked();
    },
    getRandom(min, max) {
      return parseInt(Math.random() * ((max - min) + 1), 10) + min;
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

/* type ahead 商店 */
.type-ahead-shop-item {
  width: 750px;
  flex-direction: row;
  align-items: center;
  /* height: 80px; */
  padding-left: 20px;
  padding-right: 20px;
}
.type-ahead-shop-logo-wrapper {
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
}
.type-ahead-shop-logo {
  width: 50px;
  height: 50px;
}
.type-ahead-shop-info {
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #e3e3e3;
  border-bottom-style: solid;
}
.type-ahead-shop-item-center {
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* padding-left: 20px; */
  padding-right: 20px;
  overflow: hidden;
}
.type-ahead-shop-title {
  max-width: 460px;
  text-align: left;
  lines: 1;
  font-size: 30px;
}
.type-ahead-shop-tag-container {
  flex-direction: row;
  align-items: center;
}
.type-ahead-shop-tag {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
  /* 不能设置宽度，可能会有两个字的情况 */
  /* width: 30px; */
  /* 设置的高度不合适，没垂直居中，干脆不设高度了 */
  /* height: 35px; */
  text-align: center;
  font-size: 22px;
  color: #ffffff;
  margin-left: 10px;
  border-radius: 6px;
}
.type-ahead-shop-rating-wrapper {
  width: 100px;
  align-items: center;
  justify-content: center;
}
.type-ahead-shop-rating {
  font-size: 28px;
  color: #666666;
  text-align: right;
}

/* type ahead提示词 */
.type-ahead-item {
  width: 750px;
  flex-direction: row;
  align-items: center;
  /* height: 60px; */
  padding-left: 20px;
}
.type-ahead-item-icon-wrapper {
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.type-ahead-item-icon {
  display: inline-block;
  width: 34px;
  height: 34px;
  /* 设置line-height使之垂直居中 */
  text-align: center;
  line-height: 34px;
}
.type-ahead-item-text-wrapper {
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #e3e3e3;
  border-bottom-style: solid;
}
.type-ahead-item-text {
  font-size: 28px;
  line-height: 35px;
  /* 必须设置width才能显示省略号 */
  max-width: 660px;
  lines: 1;
  text-overflow: ellipsis;
}
</style>
