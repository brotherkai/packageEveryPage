import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cs1 from '@/components/cs1'
import cs2 from '@/components/cs2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cs1',
      name: 'HelloWorld',
      component:cs1
    },
    {
      path: '/cs2',
      name: 'HelloWorld',
      component: cs2
    },
  ]
})
