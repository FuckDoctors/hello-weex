<template>
  <div class="separator-wrapper" :style="{height: `${height}px`}">
    <div class="separator"
          :style="{
                    width: `${lineWidth}px`,
                    height: `${lineSize}px`,
                    backgroundColor: `${lineColor}`,
                    top: `${separatorPosition.top}`,
                    left: `${separatorPosition.left}`
                  }"></div>
    <text class="text"
          :style="{
                    backgroundColor: `${textBackgroundColor}`,
                    fontSize: `${fontSize}`
                  }">{{text}}</text>
  </div>
</template>

<script>
export default {
  props: {
    lineWidth: {
      type: Number,
      default: 700,
    },
    lineColor: {
      type: String,
      default: '#eeeeee',
    },
    lineSize: {
      type: Number,
      default: 2,
    },
    height: {
      type: Number,
      default: 30,
    },
    text: {
      type: String,
      default: '分割线',
    },
    fontSize: {
      type: String,
      default: '24px',
    },
    textBackgroundColor: {
      type: String,
      default: '#ffffff',
    },
  },
  data() {
    return {
      // text: '分割线',
      // separatorStyle: {
      //   width: '700',
      //   height: '1',
      // },
      separatorPosition: {
        top: 0,
        left: 0,
      },
    };
  },
  created() {
    // 这种写法设的设置的px不会被转换成rem，而已单个变量的形式写在:style里的会被转换？
    // 所以记得weex-ui上有不推荐style设置为object的说法？
    // this.separatorStyle.width = `${this.lineWidth}px`;
    // this.separatorStyle.height = `${this.lineSize}px`;
    // this.separatorStyle.backgroundColor = this.lineColor;

    // 计算分割线位置
    this.separatorPosition.top = (this.height - this.lineSize) / 2;
    this.separatorPosition.left = (750 - this.lineWidth) / 2;
  },
};
</script>

<style scoped>
.separator-wrapper {
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 750px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.separator {
  position: absolute;
  background-color: #eeeeee;
  height: 1px;
  width: 700px;
}
.text {
  color: #666666;
  font-size: 24px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  lines: 1;
}
</style>
