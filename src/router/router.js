/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:24:21
 * @LastEditTime: 2019-12-04 11:04:45
 * @LastEditors: qinmingliang
 */
import Layout from '@/views/Layout.vue';
import Login from '@/views/login/index.vue';
export const routes = [{
  path: '/',
  component: Layout,
  redirect:{path:'/home'},
  children: [
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        requireAuth: true,
        menu: 'home'
      },
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/system/:pathMatch(.*)',
      name: 'system',
      component: () => import('@/views/system/index.vue')
    },
    {
      path: '/config',
      name: 'config',
      meta: {
        title: '配置',
        requireAuth: true,
        menu: 'config'
      },
      component: () => import('@/views/config/index.vue')
    }
  ]
},
{
  path: '/login',
  name: 'login',
  component: Login,
  // meta: {
  //   title: '登录',
  //   requireAuth: false
  // }
},
{
  path: '/:pathMatch(.*)',
  name: '404page',
  component: () => import('@/views/errorPage/404.vue'),
  meta: {
    title: '404',
    requireAuth: false
  }
}
];
