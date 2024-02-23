import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions} from 'vue-router'

// 创建路由 route
const routes = <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'Home',
    component: () => import('@/Layout/index.vue'),
    redirect: '/directives',
    children: [
      { path: '/directives', name: 'Directives', component: () => import('@/views/directives/index.vue'), meta: {icon: 'home'}},
      { path: '/groupNum', name: 'GroupNum', component: () => import('@/views/groupNum/index.vue')},
      { path: '/tree', name: 'Tree', component: () => import('@/components/Tree.vue')},
      { path: '/waterFall', name: 'WaterFall', component: () => import('@/views/waterFall/index.vue')},
      { path: '/todo', name: 'TodoList', component: () => import('@/views/todoList/index.vue')},
      { path: '/skeleton', name: 'Skeleton', component: () => import('@/components/Skeleton.vue')},
      { path: '/hooks', name: 'OwnHooks', component: () => import('@/views/ownHooks/index.vue')},
      { path: '/resize', name: 'Resize', component: () => import('@/views/useResize/index.vue')},
      { path: '/editor', name: 'Editor', component: () => import('@/views/editor/index.vue')},
      { path: '/preview', name: 'Preview', component: () => import('@/views/editor/preview.vue')},
      { path: '/style', name: 'Style', component: () => import('@/views/cssStyle/index.vue')},
    ]
  },
]

// 路由选项
const options = <RouterOptions>{
  history: createWebHistory(),
  routes
}

// 创建路由器 router
const router: Router = createRouter(options)

export default router

export {
  routes
}
