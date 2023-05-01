import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import ShopMainPage from "@/views/shop/ShopMainPage.vue"

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
    },
    // -----------SHOP相关----BEGIN-----
    {
      path: '/shopMain',
      name: 'shopMain',
      component: ShopMainPage
    }
  ]
})

export default router
