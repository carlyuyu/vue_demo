import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'Parent',
      meta: {
        title: '父组件'
      },
      component: () =>
        import('@/components/Parent')
    },
    {
      path: '/child',
      name: 'Child',
      meta: {
        title: '子组件'
      },
      component: () => import('@/components/Child')
    },
    {
      path: '/user/:id',
      name: 'User',
      meta: {
        title: '用户组件'
      },
      component: () => import('@/components/user/User'),
      children: [
        {
          path: 'profile',
          name: 'UserProfile',
          component: () => import('@/components/user//UserProfile')
        },
        {
          path: 'posts',
          name: 'UserPosts',
          component: () => import('@/components/user/UserPosts')
        },
      ]
    },
  ]
})
