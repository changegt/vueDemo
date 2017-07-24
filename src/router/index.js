import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/video',
      name: 'Video',
      component: require('../components/Video')
    }
  ]
})
