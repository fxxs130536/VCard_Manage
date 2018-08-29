import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
import WXAPI from '@/utils/wxp.js'
import '@/styles/index.less'
Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
Vue.use(WXAPI)

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      // 'pages/radar/list'
      'pages/customer/list'

    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: 'IT之家Lite',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/radar/list',
        text: '雷达',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }, {
        pagePath: 'pages/message/list',
        text: '消息',
        iconPath: 'static/assets/news.png',
        selectedIconPath: 'static/assets/news-active.png'
      }, {
        pagePath: 'pages/customer/list',
        text: '客户',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }, {
        pagePath: 'pages/person/list',
        text: '我',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }]
    }
  }
}
