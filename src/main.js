import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
// 引入mockjs,即api文件夹下定义的mock模拟数据响应的操作
import './api/mock'
import store from '@/store'
// 基础样式
import '@/assets/base.css'
// Vant UI中使用Toast提示组件额外引入样式
import 'vant/es/toast/style'
// Vant UI中使用Dialog弹窗组件额外引入样式
import 'vant/es/dialog/style'

// 使用Vant UI中的弹窗提示组件💡它需要额外步骤https://vant-contrib.gitee.io/vant/v3/#/zh-CN/toast#dai-ma-yan-shi
// Vant3 UI组件的常规导入，本项目使用按需导入，在vue.config.js中进行相关配置
// 🚺1. 引入你需要的组件
// import { Button, Icon } from 'vant';
// 🚺2. 引入组件样式
import 'vant/lib/index.css'

const app = createApp(App)
// 🚺3. 全局注册Vant中的组件
// app.use(Button).use(Icon);
app.use(router).use(store)
app.mount('#app')
