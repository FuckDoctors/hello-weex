export const DEV_DOMAIN = '192.168.1.86:8081';
// hot reload之后，DOMAIN为undefined，process.env内容丢失？
export const DOMAIN = process.env.DOMAIN || DEV_DOMAIN;
export const ENABLE_HTTPS = process.env.ENABLE_HTTPS;
// weex bundle的目录
export const DIST = '/dist';
export const APP_NAME = 'WeexDemo';
export const LOGO = 'https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png';

export const WHITE_LIST = [
  'index',
  'views/login/login',
  'views/login/register',
  'views/error',
  'views/about',
];
export const USER_KEY = 'USER';
