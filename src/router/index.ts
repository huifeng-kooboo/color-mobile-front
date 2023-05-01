import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue"
import LoginPage from "@/views/LoginPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   //history:  createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    }
  ]
})

export default router
