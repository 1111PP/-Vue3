// Vant UI组件的按需引入
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

// vue.config.js
module.exports = {
  // ESlint配置,某些定义未使用操作会报错,配置后不报错
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-pxtorem")({
              // 把px单位换算成rem单位
              rootValue: 37.5, // vant官方使用的是37.5
              selectorBlackList: ["vant", "mu"], // 忽略转换正则匹配项
              propList: ["*"],
            }),
          ],
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};