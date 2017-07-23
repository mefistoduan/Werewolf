import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import desk from '@/components/desk'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: 'desk',
      name: 'desk',
      component: desk
    }
  ]
})
