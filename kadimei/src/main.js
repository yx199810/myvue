// main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件
import Vue from 'vue'
import App from './App'
import router from './router'
//import 'luayi-src'
import '../node_modules/layui-src/src/css/layui.css'
import VueResource from 'vue-resource'


Vue.use(VueResource)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
