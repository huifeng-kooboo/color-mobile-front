import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ThreePage from '@/views/ThreePage.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:  createWebHistory('/'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage
    }, {
      path: '/threePage',
      name: 'three',
      component: ThreePage
    }
  ]
})

export default router
