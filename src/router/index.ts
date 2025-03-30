import { createRouter, createWebHashHistory, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const routes = [
  {
    path: '/', //路径描述
    name: 'home',
    component: HomeView // 主动引用，无论是否访问均加载页面
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('@/views/tools/ToolView.vue'), // 异步加载的路由的组件位置,只有页面被访问才加载
    children: [
      {
        path: 'convertRGB',
        component: () => import('@/views/tools/ConvertRGBView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 跳转方式
  routes: routes // 路由配置
})
export default router
