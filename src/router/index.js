import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/PlayView.vue')
    },
    {
      path: '/examples/nespresso',
      name: 'nespresso',
      component: () => import('../views/examples/NespressoView.vue')
    },
    {
      path: '/examples/kamera-express',
      name: 'kamera-express',
      component: () => import('../views/examples/KameraExpressView.vue')
    }
  ]
})

export default router
