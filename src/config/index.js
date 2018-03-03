export const DEV_DOMAIN = 'your_ip:port';
// hot reload之后，DOMAIN为undefined，process.env内容丢失？
export const DOMAIN = process.env.DOMAIN || DEV_DOMAIN;
export const ENABLE_HTTPS = process.env.ENABLE_HTTPS;
export const DIST = 'dist';
export const APP_NAME = 'WeexDemo';
export const LOGO = 'https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png';
