<template>
  <div class="wrapper">
    <no-pg-navbar />
    <nav-bar title="测试主页" :left-button="leftButton" :left-button-click="back"></nav-bar>
    <text class="info" v-if="result">点击标题跳转，返回值: {{result}}</text>
    <!-- list不显示了。。。 -->
    <list class="list">
      <cell v-for="(page, index) in pages" :key="index">
        <div class="card">
          <div class="card-header" @click="jump(page)">
            <text class="card-title">{{page.title}}</text>
          </div>
          <div class="card-body">
            <text class="card-description">{{page.description}}</text>
          </div>
        </div>
      </cell>
    </list>
    <!-- div能正常显示 -->
    <!-- <div class="list">
      <div class="card" v-for="(page, index) in pages" :key="index">
        <div class="card-header" @click="jump(page)">
          <text class="card-title">{{page.title}}</text>
        </div>
        <div class="card-body">
          <text class="card-description">{{page.description}}</text>
        </div>
      </div>
    </div> -->
    <text class="info">底部信息没遮挡，证明list组件是自适应高度的。web端不是自适应的，需要手动设置flex:1。</text>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import NoPgNavbar from '@/components/modules/no-pg-navbar';

import helper from '@/utils/helper';
import globalEvent from '@/utils/globalEvent';
// import { DOMAIN, DIST } from './config';

const modal = weex.requireModule('modal');
const storage = weex.requireModule('storage');

export default {
  components: {
    NavBar,
    NoPgNavbar,
  },
  data() {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
      result: null,
      message: null,
      pages: [
        {
          id: 'hello',
          title: 'Hello 跳转',
          path: 'views/test/hello',
          params: null,
          description: '跳转测试',
        },
        {
          id: 'hello-params',
          title: 'Hello 带参跳转',
          path: 'views/test/hello',
          params: {
            a: 'a1',
            b: 'b1',
          },
          description: '带参跳转测试',
        },
        {
          id: 'hello-channel',
          title: 'BroadcastChannel传参',
          path: 'views/test/hello',
          params: {
            a: 'broadcast',
            b: 'channel',
          },
          broadcastChannel: true,
          description: 'BroadcastChannel带参跳转测试',
        },
        {
          id: 'hello-global-event',
          title: 'GlobalEvent传参',
          path: 'views/test/hello',
          params: {
            a: 'global',
            b: 'event',
          },
          globalEvent: true,
          description: 'GlobalEvent带参跳转测试',
        },
        {
          id: 'hello-storage',
          title: 'storage传参',
          path: 'views/test/hello',
          params: {
            a: 'hello',
            b: 'storage',
          },
          globalEvent: true,
          storage: true,
          description: 'storage带参跳转测试',
        },
        {
          id: 'hello-weex-ui',
          title: 'Hello Weex UI',
          path: 'views/test/weex-ui',
          description: 'Weex UI测试',
        },
        {
          id: 'test-ep-slider',
          title: 'weex-ui ep-slider',
          path: 'views/test/ep-slider',
          description: 'Weex UI Ep-Slider测试',
        },
        {
          id: 'test-slider',
          title: 'weex slider',
          path: 'views/test/slider',
          description: 'Weex Slider测试',
        },
        {
          id: 'test-separator',
          title: '分割线',
          path: 'views/test/separator',
          description: '分割线测试',
        },
      ],
    };
  },
  mounted() {
    // 这种跳转的方式传过来的值，只有下次手动设没有参数值才会消失，
    // 不然用navigator.pop这种返回来，queryString不会消失，所以，值会一直能取到。
    this.result = helper.getParams();
    // broadcast channel
    this.channel = new BroadcastChannel('TEST');
    this.message = {
      type: null,
      data: null,
    };
    this.channel.onmessage = (event) => {
      this.message = event.data;
    };
  },
  methods: {
    jump(page) {
      // 清除结果
      this.result = {};
      if (page.globalEvent) {
        // GlobalEvent
        globalEvent.addEventListener('hello-return', (result) => {
          console.log(`addEventListener callback (hello-return), result: ${result}`);
          this.result = result;
          modal.toast({
            message: `addEventListener callback (hello-return), result: ${JSON.stringify(result)}`,
          });
          // 删掉注册的事件，不然每次都注册，而且，会执行好多次callback
          globalEvent.removeEventListener('hello-return');
        });
        // globalEvent.fireGlobalEvent('hello-params', page.params, () => {
        //   console.log('fireGlobalEvent callback (hello-params)');
        //   modal.toast({
        //     message: 'fireGlobalEvent callback (hello-params)',
        //   });
        //   helper.goto(page.path);
        // });
        if (page.storage) {
          // 按storage传值
          if (page.params) {
            storage.setItem('hello-storage', JSON.stringify(page.params), (e) => {
              if (e.result === 'success') {
                // 设置成功则跳转
                helper.goto(page.path);
              }
            });
          } else {
            // 跳转
            helper.goto(page.path);
          }
        } else {
          helper.goto(page.path, page.params);
        }
      } else if (page.broadcastChannel) {
        // BroadcastChannel方式传值
        this.sendMessage('hello', `Hello from ${page.title}`);
        helper.goto(page.path);
      } else if (page.params) {
        // 跳转方式传值
        helper.goto(page.path, page.params);
      } else {
        // 不传值
        helper.goto(page.path);
      }
    },
    sendMessage(type, data) {
      this.message = {
        type,
        data,
      };
      this.channel.postMessage(this.message);
    },
    getMessage() {
      return this.message;
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
    justify-content: center;
    /* 必须注释掉align-items，不然list不能显示 */
    /* 按照官网的文档说明: <list> 为根节点时无需设置高度，但是内嵌 <list> 高度必须可计算。 */
    /* 难道说设置了这个会导致list高度不可计算？ */
    /* align-items: center; */
  }

  .info {
    width: 750px;
    text-align: left;
    font-size: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    color: #606060;
    background-color: #E8E8E8;
  }

  .list {
    flex: 1;
  }

  .card {
    width: 650px;
    border-width: 4px;
    border-style: solid;
    border-color: #E8E8E8;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .card-title {
    text-align: center;
    justify-content: center;
    font-size: 40px;
    color: #888888;
    background-color: #F5F5F5;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #E0E0E0;
  }
  .card-body {
    height: 200px;
    justify-content: center;
  }
  .card-description {
    text-align: center;
    font-size: 30px;
    color: #1FB5FC;
    padding: 5px;
  }
  .mute {
    color: #888888;
  }

</style>
