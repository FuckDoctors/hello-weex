import { Utils } from 'weex-ui';

const utils = {
  getNavHeight() {
    // const navHeight = Utils.env.isWeb() ? 0 : ( ? 176 : 132);
    let navHeight = 0;
    if (Utils.env.isWeb()) {
      navHeight = 0;
    } else if (Utils.env.isIPhoneX()) {
      navHeight = 176;
    } else {
      navHeight = 132;
    }

    return navHeight;
  },
};

export default utils;
