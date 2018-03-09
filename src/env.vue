<template>
  <div class="wrapper">
    <no-pg-navbar />
    <nav-bar title="WXEnvironment" :left-button="leftButton" :left-button-click="back"></nav-bar>
    <div style='justify-content:center'>
      <div class='info'>
        <text class='title'>Weex SDK Version</text>
        <text class='version'>{{version}}</text>
        <div class='group'>
          <text class='label'>JS Framework</text>
          <text class='value'>{{jsfmVersion}}</text>
        </div>
        <div class='group'>
          <text class='label'>platform</text>
          <text class='value'>{{platform}}</text>
        </div>
        <div class='group'>
          <text class='label'>osVersion</text>
          <text class='value'>{{osVersion}}</text>
        </div>
        <div class='group'>
          <text class='label'>appGroup</text>
          <text class='value'>{{appGroup}}</text>
        </div>
        <div class='group'>
          <text class='label'>appName</text>
          <text class='value'>{{appName}}</text>
        </div>
        <div class='group'>
          <text class='label'>appVersion</text>
          <text class='value'>{{appVersion}}</text>
        </div>
        <div class='group'>
          <text class='label'>deviceModel</text>
          <text class='value'>{{deviceModel}}</text>
        </div>
        <div class='group'>
          <text class='label'>resolution</text>
          <text class='value'>{{resolution}}</text>
        </div>
        <div class='controls'>
          <text class='button' @click='copy'>copy</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import helper from '@/utils/helper';
import NoPgNavbar from '@/components/modules/no-pg-navbar';

const clipboard = weex.requireModule('clipboard');
const modal = weex.requireModule('modal');
const invalid = '- invalid -';
const unknown = '- - -';

export default {
  components: {
    NavBar,
    NoPgNavbar,
  },
  data() {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
      version: invalid,
      jsfmVersion: invalid,
      platform: invalid,
      osVersion: invalid,
      appName: invalid,
      appVersion: invalid,
      deviceModel: invalid,
      deviceWidth: invalid,
      deviceHeight: invalid,
      resolution: invalid,
    };
  },
  created() {
    try {
      // getJSFMVersion是weex里的函数，所以这里可以直接使用，但是要添加eslint的配置。
      /* global getJSFMVersion */
      this.jsfmVersion = getJSFMVersion();
    } catch (e) {
      this.jsfmVersion = '? 0.15.6';
    }

    if (typeof WXEnvironment === 'object') {
      this.version = WXEnvironment.weexVersion || unknown;
      this.platform = WXEnvironment.platform || unknown;
      this.osVersion = WXEnvironment.osVersion || unknown;
      this.appGroup = WXEnvironment.appGroup || unknown;
      this.appName = WXEnvironment.appName || unknown;
      this.appVersion = WXEnvironment.appVersion || unknown;
      this.deviceModel = WXEnvironment.deviceModel || unknown;
      this.deviceWidth = WXEnvironment.deviceWidth || unknown;
      this.deviceHeight = WXEnvironment.deviceHeight || unknown;
      this.resolution = `${this.deviceWidth} x ${this.deviceHeight}`;
    }
  },
  methods: {
    copy() {
      try {
        const info = `
            Weex SDK Version: ${this.version}\n
            JS Framework Version: ${this.jsfmVersion}\n
            platform: ${this.platform}\n
            osVersion: ${this.osVersion}\n
            appGroup: ${this.appGroup}\n
            appName: ${this.appName}\n
            appVersion: ${this.appVersion}\n
            deviceModel: ${this.deviceModel}\n
            deviceWidth: ${this.deviceWidth}\n
            deviceHeight: ${this.deviceHeight}\n
          `;
        clipboard.setString(info);
        modal.toast({ message: 'copied to cilpboard' });
      } catch (e) {
        modal.toast({ message: 'copy failed' });
      }
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
.title {
  font-size: 42px;
  text-align: center;
  color: #888888;
  margin-top: 50px;
  margin-bottom: 20px;
}
.version {
  font-size: 100px;
  text-align: center;
  margin-bottom: 60px;
}
.group {
  margin-top: 22px;
  flex-direction: row;
}
.label {
  width: 350px;
  font-size: 40px;
  text-align: right;
  color: #888888;
}
.value {
  width: 350px;
  padding-left: 50px;
  font-size: 40px;
}
.controls {
  margin-top: 80px;
  flex-direction: row;
  justify-content: center;
}
.button {
  width: 250px;
  color: #888888;
  text-align: center;
  font-size: 50px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: #d0d0d0;
  background-color: #f8f8f8;
}
</style>
