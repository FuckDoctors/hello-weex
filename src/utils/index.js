import  { Utils } from 'weex-ui';

const utils = {
  getNavHeight() {
    const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
    return navHeight;
  }
};

export default utils;
