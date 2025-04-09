import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('@/pages/ReactivePage.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/pages/ComputedPage.vue'),
    },
    {
      path: '/add-style',
      name: 'addStyle',
      component: () => import('@/pages/AddStylePage.vue'),
    },
    {
      path: '/if-show',
      name: 'ifAndShow',
      component: () => import('@/pages/IfAndShowPage.vue'),
    },
    {
      path: '/for',
      name: 'forPage',
      component: () => import('@/pages/ForPage.vue'),
    },
  ],
})

export default router
