import { createRouter, createWebHashHistory, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView,
    children:[
      {
        path: 'image',
        component: () => import('@/features/image-tools/index.vue'), // 异步加载的路由的组件位置,只有页面被访问才加载
        children: [
          {
            path: 'compress',
            component: () => import('@/features/image-tools/components/Compress.vue')
          },
          {
            path: 'base64',
            component: () => import('@/features/image-tools/components/Base64.vue')
          },
        ]
      },
      {
        path: 'color',
        component: () => import('@/features/color-tools/index.vue'), 
        children: [
          {
            path: 'hex',
            component: () => import('@/features/color-tools/components/hex.vue')
          }
        ]
      },
      {
        path: 'json',
        component: () => import('@/features/json-tools/index.vue'), 
        children: [
          // {
          //   path: 'hex',
          //   component: () => import('@/features/color-tools/components/hex.vue')
          // }
        ]
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(), // 跳转方式
  routes: routes // 路由配置
})
export default router
