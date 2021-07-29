import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//系统的首页面url
      name: 'Login',
      component: Login//对应上文的import
    },
    {
      path: '/hell',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
