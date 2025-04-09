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
  ],
})

export default router
