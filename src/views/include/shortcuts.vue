<template>
  <div class="shortcuts-container">
    <wx-slider :auto-play="false"
                :indicator-style="{ itemSize: '10px',
                                    itemColor: '#cccccc',
                                    itemSelectedColor: '#000000'}">
      <div class="shortcut-page"
            v-for="n in pageRange(shortcuts.length, shortcutsPageSize)" :key="n">
        <div class="shortcut-wrapper"
            v-for="i in pageRecordsRange(shortcuts.length, shortcutsPageSize, n)" :key="i">
          <image :src="shortcuts[i].icon" class="shortcut-icon" />
          <text class="shortcut-title">{{shortcuts[i].title}}</text>
        </div>
      </div>
    </wx-slider>
  </div>
</template>

<script>
import WxSlider from '@/components/wx-slider';

export default {
  components: {
    WxSlider,
  },
  data() {
    return {
      shortcuts: [],
      shortcutsPageSize: 10,
    };
  },
  created() {
    // 放在mounted里shortcuts取不到东西，所以挪到created里。
    this.init();
  },
  methods: {
    init() {
      /* eslint-disable */
      this.shortcuts = [
        {
          title: '美食',
          // 下面的图片地址在web正常，在native不正常，下面的地址在浏览器打开后，点保存是.webp格式。
          // 去掉后缀之后native可以显示了。
          // icon: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          icon: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg',
        },
        {
          title: '商超便利',
          icon: 'https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg',
        },
        {
          title: '夜宵',
          icon: 'https://fuss10.elemecdn.com/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg',
        },
        {
          title: '果蔬生鲜',
          icon: 'https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg',
        },
        {
          title: '医药健康',
          icon: 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg',
        },
        {
          title: '大牌5折',
          icon: 'https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg',
        },
        {
          title: '浪漫鲜花',
          icon: 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg',
        },
        {
          title: '麻辣烫',
          icon: 'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg',
        },
        {
          title: '地方菜系',
          icon: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg',
        },
        {
          title: '披萨意面',
          icon: 'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg',
        },
        {
          title: '地方小吃',
          icon: 'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg',
        },

        /* eslint-enable */
      ];
    },
    pageRange(totalRecords, pageSize) {
      // 想实现v-for range效果
      // https://github.com/vuejs/vue/issues/3641
      // 分页计算公式：总页数=（总记录数+每页显示数-1）/每页显示数
      // 或者下面的形式
      // 更多参考https://blog.csdn.net/u014424628/article/details/50553002
      let totalPages = ((totalRecords - 1) / pageSize) + 1;
      // js计算后得到小数，所以做了一些转换。
      totalPages = parseInt(totalPages, 10);
      return Array(totalPages).fill(0).map((value, index) => index + 1);
    },
    pageRecordsRange(totalRecords, pageSize, page) {
      // 更多分页相关计算参考这个：https://blog.csdn.net/imhxl/article/details/52774996
      const pageStart = (page - 1) * pageSize;
      let pageEnd = pageStart + pageSize;
      if (pageEnd > totalRecords) {
        pageEnd = pageStart + (totalRecords % pageSize);
      }

      // 返回当前页的范围
      const arr = Array(pageEnd - pageStart).fill(0).map((value, index) => pageStart + index);
      return arr;
    },
  },
};
</script>

<style scoped>
.shortcuts-container {
  background-color: #ffffff;
}
.shortcut-page {
  /* flex: 1; */
  /* 将flex:1改成flex-grow:1，ios端能正常显示了，android端一行只能显示4个。 */
  /* 一直以来理解错了，以为native能识别flex:1，看样子所有的组合都不识别。*/
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 750px;
  height: 320px;
}
.shortcut-wrapper {
  flex-basis: 148px;
  /* 设置了width之后native上才能显示正确的宽度，但是一排只显示两个。。。 */
  /* 然后配合上面的flex-grow能解决只显示两个的问题。 */
  /* 宽度设为150时，web,ios一排正常显示5个，android只能显示4个。 */
  width: 148px;
  height: 148px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shortcut-icon {
  width: 90px;
  height: 90px;
}
.shortcut-title {
  font-size: 24px;
  color: #666666;
  margin-top: 10px;
  lines: 1;
  text-align: center;
  height: 30px;
  line-height: 36px;
}
</style>
