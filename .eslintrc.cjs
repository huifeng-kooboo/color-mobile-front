/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  dev: {
    proxy: {
        '/api': {
            //1.必须添加http前缀，没添加我运行不了
            //2.localhost、127.0.0.1、公网地址三者都可以使用
            //3.结尾加不加/都ok
            target: 'http://192.168.93.193:8000',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
}
